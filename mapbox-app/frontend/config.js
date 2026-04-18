(function () {
  const override = new URLSearchParams(location.search).get('backend');
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  window.BACKEND_URL = override || (isLocal ? 'http://localhost:4000' : '/api');
  console.log('[config] BACKEND_URL =', window.BACKEND_URL);
})();
