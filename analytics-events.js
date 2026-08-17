(function() {
  window.mutualsTrackEvent = window.mutualsTrackEvent || function(eventName, params) {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params || {});
    }
  };

  document.addEventListener("click", function(event) {
    var link = event.target.closest && event.target.closest("a[href]");
    if (!link || typeof window.mutualsTrackEvent !== "function") return;

    var href = link.getAttribute("href") || "";
    var params = {
      link_url: href,
      link_text: (link.textContent || "").trim().slice(0, 120),
      page_location: window.location.href
    };

    if (href.indexOf("tel:") === 0) {
      window.mutualsTrackEvent("click_phone", params);
    } else if (href.indexOf("mailto:") === 0) {
      window.mutualsTrackEvent("click_email", params);
    } else if (href.indexOf("calendar.app.google") !== -1) {
      window.mutualsTrackEvent("click_booking", params);
    }
  });
})();
