/* Decorative scenes only run while visible, and respect reduced motion. */
(function () {
  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  window.mutualsAnimateScene = function (element, render, advance) {
    var visible = false, frame = null, previous = null, lost = false;
    function stop() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      previous = null;
    }
    function tick(now) {
      frame = null;
      if (!visible || document.hidden || motion.matches || lost) return;
      var step = previous === null ? 1 : Math.min((now - previous) / (1000 / 60), 3);
      previous = now;
      advance(step);
      render();
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      stop();
      if (!visible || document.hidden || lost) return;
      render();
      if (!motion.matches) frame = requestAnimationFrame(tick);
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        sync();
      }).observe(element);
    } else { visible = true; sync(); }
    document.addEventListener('visibilitychange', sync);
    if (motion.addEventListener) motion.addEventListener('change', sync);
    else motion.addListener(sync);
    element.addEventListener('webglcontextlost', function (event) {
      event.preventDefault(); lost = true; stop();
    });
    element.addEventListener('webglcontextrestored', function () { lost = false; sync(); });
    window.addEventListener('resize', sync, { passive: true });
  };
})();
