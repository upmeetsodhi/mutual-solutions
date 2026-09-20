(function() {
  var menuButton = document.getElementById('hamburger');
  var menu = document.getElementById('mobile-menu');
  if (menuButton && menu) {
    function syncMenu() {
      var open = menu.classList.contains('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-controls', menu.id);
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    function closeMenu() {
      menu.classList.remove('open');
      menuButton.classList.remove('open');
      document.body.style.overflow = '';
      syncMenu();
    }
    syncMenu();
    menuButton.addEventListener('click', syncMenu);
    menu.addEventListener('click', function(event) {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu(); menuButton.focus();
      }
    });
    window.addEventListener('resize', function() {
      if (getComputedStyle(menuButton).display === 'none') closeMenu();
    }, { passive: true });
  }
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
      link_url: href.split('?')[0].split('#')[0],
      link_text: (link.textContent || "").trim().slice(0, 120),
      page_location: window.location.origin + window.location.pathname
    };

    if (href.indexOf("tel:") === 0) {
      window.mutualsTrackEvent("click_phone", params);
    } else if (href.indexOf("mailto:") === 0) {
      window.mutualsTrackEvent("click_email", params);
    } else if (href.indexOf("calendar.app.google") !== -1) {
      window.mutualsTrackEvent("click_booking", params);
    } else if (/^https:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)(\/|$)/i.test(href)) {
      window.mutualsTrackEvent("click_whatsapp", params);
    }
  });
  var reviewForm = document.getElementById('lg-rform');
  if (reviewForm) {
    reviewForm.addEventListener('input', function() {
      window.mutualsTrackEvent('policy_review_start', { form_location: 'homepage' });
    }, { once: true });
  }
})();
