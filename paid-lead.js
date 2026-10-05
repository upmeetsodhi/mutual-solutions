(function () {
  var form = document.querySelector('[data-paid-lead-form]');
  if (!form) return;

  var status = form.querySelector('[data-form-status]');
  var button = form.querySelector('button[type="submit"]');
  var source = form.getAttribute('data-lead-source') || 'paid_landing_page';
  var endpoint = 'https://formsubmit.co/ajax/info@mutuals.co.nz';

  function track(name, parameters) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, Object.assign({ transport_type: 'beacon' }, parameters || {}));
    }
  }

  function showError(message) {
    status.textContent = message;
    status.setAttribute('role', 'alert');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = form.elements.name;
    var email = form.elements.email;
    var phone = form.elements.phone;
    var valid = true;
    [name, email].forEach(function (field) {
      field.removeAttribute('aria-invalid');
      if (!field.value.trim() || !field.checkValidity()) {
        field.setAttribute('aria-invalid', 'true');
        valid = false;
      }
    });
    if (!valid) {
      showError('Please enter your name and a valid email address.');
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    status.removeAttribute('role');
    status.textContent = 'Sending your request...';
    button.disabled = true;
    button.textContent = 'Sending...';
    var params = new URLSearchParams(window.location.search);
    var payload = {
      _subject: 'Website lead: ' + source,
      _template: 'table',
      _autoresponse: 'Thanks for contacting Mutual Solutions. We have received your request and will be in touch soon. If your enquiry is urgent, call 0800 67 55 55.',
      source: source,
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || ''
    };

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (response) {
      return response.ok ? response.json() : Promise.reject(new Error('submit failed'));
    }).then(function (result) {
      if (result.success !== true && result.success !== 'true') throw new Error('submit failed');
      track('generate_lead', { lead_source: source, form_location: 'paid_landing_page' });
      window.location.assign('/thank-you.html?source=' + encodeURIComponent(source));
    }).catch(function () {
      button.disabled = false;
      button.textContent = 'Request a free conversation';
      showError('Your request did not send. Please try again or call 0800 67 55 55.');
      track('lead_submission_error', { lead_source: source, form_location: 'paid_landing_page' });
    });
  });
})();
