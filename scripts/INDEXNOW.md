# IndexNow publication notifications

The GitHub Actions workflow runs on pushes to main. It does not deploy or change
the website. It waits for the changed public files and ownership file to match
the repository, then sends changed canonical URLs to api.indexnow.org.

- HTML edits notify only the corresponding sitemap URLs.
- Shared assets and robots.txt changes notify the current canonical pages.
- Sitemap additions/removals notify affected URLs, including removed URLs.
- Documentation-only changes do not submit anything.
- The first ownership-file publication bootstraps the current 25 sitemap URLs.
- The ownership text file is deliberately publicly accessible, as required by
  IndexNow. It is not a GitHub credential and grants no access to this repository.
- HTTP 200 means receipt; HTTP 202 means receipt with key validation pending.
  Neither guarantees crawling, indexing, citations, or higher rankings.
- API failures fail the job rather than repeatedly posting the same batch.
- No visitor script, cookies, tracking, customer data, or page-layout changes.

Check the GitHub Actions run after publishing. Deployment mismatches time out
safely without submitting. A manual workflow dispatch sends all current URLs;
use it only for initial recovery or genuinely changed content, not daily pings.

Tests: `python3 -m unittest discover -s scripts -p 'test_*.py'`

Local preview without network submission:
`python3 scripts/indexnow.py --dry-run --all`

Protocol: https://www.indexnow.org/documentation
