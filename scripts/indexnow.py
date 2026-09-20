"""Notify changed canonical pages only after their deployment is live."""

import argparse
import json
import os
from pathlib import Path
import subprocess
import time
import urllib.error
import urllib.request
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://mutuals.co.nz"
KEY = "f2d1730c1ef153198323398660784e35"
KEY_FILE = KEY + ".txt"
ENDPOINT = "https://api.indexnow.org/indexnow"


def git(*args):
    return subprocess.check_output(["git", *args], cwd=ROOT).decode().strip()


def sitemap_urls(xml):
    urls = {node.text.strip() for node in ET.fromstring(xml).iter()
            if node.tag.split("}")[-1] == "loc" and node.text}
    for url in urls:
        parsed = urlsplit(url)
        if (parsed.scheme != "https" or parsed.netloc != "mutuals.co.nz"
                or parsed.query or parsed.fragment):
            raise ValueError("Unexpected URL in sitemap: " + url)
    return urls


def file_for_url(url):
    path = unquote(urlsplit(url).path).lstrip("/")
    if ".." in Path(path).parts:
        raise ValueError("Unsafe sitemap path")
    return path + "index.html" if not path or path.endswith("/") else path


def select_urls(current, previous, changed, full=False):
    # Shared scripts, styles and media can change every rendered page.
    shared = any(Path(p).suffix.lower() in
                 {".css", ".js", ".jpg", ".jpeg", ".png", ".webp", ".svg"}
                 for p in changed if not p.startswith(("scripts/", ".github/")))
    if full or shared or "robots.txt" in changed:
        return sorted(current | (previous - current))
    return sorted((current ^ previous) | {
        url for url in current | previous if file_for_url(url) in changed})


def fetch(url):
    request = urllib.request.Request(url, headers={"User-Agent": "MutualSolutions-DeploymentCheck/1.0"})
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            return response.status, response.read()
    except urllib.error.HTTPError as error:
        return error.code, b""


def deployment_ready(paths, revision):
    for path in sorted(paths):
        local = ROOT / path
        url = ORIGIN + "/" + path + "?deploy-check=" + revision
        status, body = fetch(url)
        if local.is_file():
            if status != 200 or body != local.read_bytes():
                return False
        elif status not in (404, 410):
            return False
    return True


def submit(urls):
    if not urls:
        return
    if len(urls) > 10000:
        raise ValueError("IndexNow batch exceeds 10,000 URLs")
    payload = {"host": "mutuals.co.nz", "key": KEY,
               "keyLocation": ORIGIN + "/" + KEY_FILE, "urlList": urls}
    request = urllib.request.Request(ENDPOINT, data=json.dumps(payload).encode(),
                                     headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(request, timeout=30) as response:
        if response.status not in (200, 202):
            raise RuntimeError("Unexpected IndexNow response: " + str(response.status))
        print(f"IndexNow HTTP {response.status}: received {len(urls)} URLs. "
              "Receipt is not a guarantee of indexing or ranking.")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--all", action="store_true", help="Submit all canonical URLs once")
    parser.add_argument("--base", default=os.environ.get("INDEXNOW_BASE", "HEAD^"))
    args = parser.parse_args()
    current = sitemap_urls((ROOT / "sitemap.xml").read_text())
    base = args.base
    if base and set(base) != {"0"}:
        previous = sitemap_urls(git("show", base + ":sitemap.xml"))
        changed = set(git("diff", "--name-only", base, "HEAD").splitlines())
    else:
        previous, changed = set(), set()
    full = args.all or os.environ.get("INDEXNOW_MANUAL") == "true" or KEY_FILE in changed or not base or set(base) == {"0"}
    urls = select_urls(current, previous, changed, full)
    print(json.dumps({"urls": urls, "count": len(urls)}, indent=2))
    if args.dry_run or not urls:
        return
    paths = {KEY_FILE, "sitemap.xml"} | {file_for_url(u) for u in urls}
    paths |= {p for p in changed if not p.startswith(("scripts/", ".github/"))
              and Path(p).suffix.lower() in {".html", ".js", ".css", ".jpg", ".jpeg", ".png", ".webp", ".svg"}}
    revision = git("rev-parse", "HEAD")
    for attempt in range(30):
        ready = False
        try:
            if deployment_ready(paths, revision):
                # Verify the public, query-free key location used by search engines.
                status, body = fetch(ORIGIN + "/" + KEY_FILE)
                ready = status == 200 and body.decode().strip() == KEY
        except (OSError, UnicodeError) as error:
            print("Deployment check temporarily unavailable:", type(error).__name__)
        if ready:
            # Do not repeatedly resubmit when the API rejects a batch or times out.
            submit(urls)
            return
        if attempt < 29:
            time.sleep(20)
    raise RuntimeError("Live files do not match this deployment; no successful notification confirmed")


if __name__ == "__main__":
    main()
