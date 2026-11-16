// TRIKNO Partner Portal - Client-side Auth Guard
(function () {
  const SESSION_KEY = 'trikno_portal_user';
  
  function getSession() {
    try {
      const data = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
      if (!data) return null;
      const parsed = JSON.parse(data);
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
    if (window.firebase && window.firebase.auth) {
      try { firebase.auth().signOut(); } catch (e) {}
    }
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    let loginUrl = '/portal/login.html';
    if (window.location.protocol === 'file:') {
      loginUrl = 'login.html';
    }
    window.location.replace(loginUrl);
  }

  const user = getSession();
  const currentPath = window.location.pathname.toLowerCase();
  
  // If not on login page and not authenticated -> redirect to login
  if (!user && !currentPath.includes('login')) {
    let loginUrl = '/portal/login.html';
    if (window.location.protocol === 'file:') {
      loginUrl = 'login.html';
    }
    sessionStorage.setItem('trikno_portal_redirect', window.location.href);
    window.location.replace(loginUrl);
  }

  // Export helper globally
  window.TriknoAuth = {
    getUser: getSession,
    getCurrentUser: getSession,
    logout: logout
  };
  window.PortalAuth = window.PortalAuth || window.TriknoAuth;
})();
