(function () {
  'use strict';

  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbwyZJXqjOdRD6LumRq5A2q6AJVktwCI-zO9iasRjFCJXXk9KQP4j9hrsiHaw6BcCH3k/exec';
  var pending = Object.create(null);

  function requestId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
      return window.crypto.randomUUID();
    }
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
  }

  function trustedGoogleOrigin(origin) {
    try {
      var url = new URL(origin);
      return url.protocol === 'https:' && (
        url.hostname === 'script.google.com' ||
        url.hostname === 'script.googleusercontent.com' ||
        url.hostname.slice(-29) === '-script.googleusercontent.com'
      );
    } catch (error) {
      return false;
    }
  }

  function cleanup(id) {
    var item = pending[id];
    if (!item) return;
    window.clearTimeout(item.timeout);
    if (item.form.parentNode) item.form.parentNode.removeChild(item.form);
    if (item.frame.parentNode) item.frame.parentNode.removeChild(item.frame);
    delete pending[id];
  }

  window.addEventListener('message', function (event) {
    if (!trustedGoogleOrigin(event.origin)) return;
    var data = event.data;
    if (!data || data.type !== 'mutuals-lead-result' || !pending[data.requestId]) return;
    var item = pending[data.requestId];
    if (event.source !== item.frame.contentWindow) return;
    var ok = data.ok === true;
    cleanup(data.requestId);
    item.resolve(ok);
  });

  window.mutualsSendLead = function (payload, options) {
    options = options || {};
    var id = requestId();
    var frameName = 'mutuals_lead_' + id.replace(/[^a-z0-9_-]/gi, '');
    var frame = document.createElement('iframe');
    frame.name = frameName;
    frame.setAttribute('title', 'Secure enquiry delivery');
    frame.setAttribute('aria-hidden', 'true');
    frame.style.display = 'none';

    var submitForm = document.createElement('form');
    submitForm.method = 'POST';
    submitForm.action = ENDPOINT;
    submitForm.target = frameName;
    submitForm.style.display = 'none';

    var values = Object.assign({}, payload, {
      request_id: id,
      parent_origin: window.location.origin,
      website: payload.website || ''
    });
    Object.keys(values).forEach(function (key) {
      if (values[key] == null) return;
      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = typeof values[key] === 'object' ? JSON.stringify(values[key]) : String(values[key]);
      submitForm.appendChild(input);
    });

    document.body.appendChild(frame);
    document.body.appendChild(submitForm);

    return new Promise(function (resolve) {
      pending[id] = {
        resolve: resolve,
        frame: frame,
        form: submitForm,
        timeout: window.setTimeout(function () {
          cleanup(id);
          resolve(false);
        }, options.timeoutMs || 20000)
      };
      submitForm.submit();
    });
  };
})();
