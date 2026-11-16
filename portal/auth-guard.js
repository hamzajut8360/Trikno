// TRIKNO Partner Portal - Client-side Auth Guard
(function () {
  const SESSION_KEY = 'trikno_portal_user';
  
  function getSession() {
    try {
      const data = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
      if (!data) return null;
      const parsed = JSON.parse(data);
      // Optional: check session expiry (e.g. 7 days)
      if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
        logout();
        return null;
      }
      return parsed;
    } catch (e) {
      return null;
    }
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
  }

  const user = getSession();
  const currentPath = window.location.pathname.toLowerCase();
  
  // If not on login page and not authenticated -> redirect to login
  if (!user && !currentPath.includes('login')) {
    // Determine relative login path
    let loginUrl = '/portal/login.html';
    if (window.location.protocol === 'file:' || !window.location.pathname.startsWith('/portal')) {
      loginUrl = 'login.html';
    }
    // Store where user was trying to go
    sessionStorage.setItem('trikno_portal_redirect', window.location.href);
    window.location.replace(loginUrl);
  }

  // Export helper globally
  window.TriknoAuth = {
    getUser: getSession,
    logout: function () {
      logout();
      window.location.replace('/portal/login.html');
    }
  };
})();

