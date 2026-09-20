import unittest
from unittest.mock import patch
import indexnow as module


class IndexNowTests(unittest.TestCase):
    def setUp(self):
        self.home = module.ORIGIN + "/"
        self.health = module.ORIGIN + "/health-insurance.html"
        self.urls = {self.home, self.health}

    def test_html_changes_are_scoped(self):
        self.assertEqual(module.select_urls(self.urls, self.urls, {"health-insurance.html"}), [self.health])

    def test_non_public_changes_do_not_submit(self):
        self.assertEqual(module.select_urls(self.urls, self.urls, {"scripts/indexnow.py", "README.md"}), [])

    def test_shared_assets_notify_canonical_pages(self):
        self.assertEqual(module.select_urls(self.urls, self.urls, {"motion-runtime.js"}), sorted(self.urls))

    def test_additions_and_removals(self):
        self.assertEqual(module.select_urls({self.health}, {self.home}, {"sitemap.xml"}), sorted(self.urls))

    def test_directory_mapping(self):
        self.assertEqual(module.file_for_url(self.home), "index.html")
        self.assertEqual(module.file_for_url(module.ORIGIN + "/blog/"), "blog/index.html")

    def test_reject_wrong_host(self):
        with self.assertRaises(ValueError):
            module.sitemap_urls("<urlset><url><loc>https://example.com/</loc></url></urlset>")

    def test_reject_query_urls(self):
        with self.assertRaises(ValueError):
            module.sitemap_urls("<urlset><url><loc>https://mutuals.co.nz/?private=1</loc></url></urlset>")

    def test_live_mismatch_blocks(self):
        with patch.object(module, "fetch", return_value=(200, b"stale")):
            self.assertFalse(module.deployment_ready({"index.html"}, "test"))

    def test_live_match_passes(self):
        content = (module.ROOT / module.KEY_FILE).read_bytes()
        with patch.object(module, "fetch", return_value=(200, content)):
            self.assertTrue(module.deployment_ready({module.KEY_FILE}, "test"))

    def test_empty_submission_does_not_call_network(self):
        with patch.object(module.urllib.request, "urlopen") as request:
            module.submit([])
            request.assert_not_called()


if __name__ == "__main__":
    unittest.main()
