// TRIKNO Partner Portal - Auth Controller (Live Firebase Cloud + Local Fallback Engine)
(function () {
  const SESSION_KEY = 'trikno_portal_user';
  const DYNAMIC_USERS_KEY = 'trikno_portal_dynamic_users';

  // Helper: Get dynamically added users from storage
  function getDynamicUsers() {
    try {
      const data = localStorage.getItem(DYNAMIC_USERS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveDynamicUsers(users) {
    localStorage.setItem(DYNAMIC_USERS_KEY, JSON.stringify(users));
  }

  // Combined accounts list
  function getAllAccounts() {
    const initial = window.TRIKNO_INITIAL_ACCOUNTS || [];
    const dynamic = getDynamicUsers();
    // Dynamic users take precedence if email overlaps
    const dynamicEmails = new Set(dynamic.map(u => u.email.toLowerCase()));
    const filteredInitial = initial.filter(u => !dynamicEmails.has(u.email.toLowerCase()));
    return [...filteredInitial, ...dynamic];
  }

  // Generate strong random password
  function generatePassword(length = 12) {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%&*";
    let pwd = "";
    // Ensure at least one uppercase, lowercase, digit, special char
    pwd += "ABCDEFGHJKLMNPQRSTUVWXYZ"[Math.floor(Math.random() * 24)];
    pwd += "abcdefghijkmnpqrstuvwxyz"[Math.floor(Math.random() * 24)];
    pwd += "23456789"[Math.floor(Math.random() * 8)];
    pwd += "!@#$%&*"[Math.floor(Math.random() * 7)];
    for (let i = 4; i < length; i++) {
      pwd += chars[Math.floor(Math.random() * chars.length)];
    }
    // Shuffle
    return pwd.split('').sort(() => 0.5 - Math.random()).join('');
  }

  // Login method
  async function login(email, password) {
    email = (email || '').trim().toLowerCase();
    password = (password || '').trim();

    if (!email || !password) {
      return { success: false, message: "Bitte geben Sie E-Mail und Passwort ein." };
    }

    // 1. Try Live Firebase Cloud Auth
    let firebaseSuccess = false;
    if (window.firebase && window.firebase.auth && window.TRIKNO_FIREBASE_CONFIG) {
      try {
        const userCred = await firebase.auth().signInWithEmailAndPassword(email, password);
        if (userCred && userCred.user) {
          firebaseSuccess = true;
        }
      } catch (fbErr) {
        console.warn("Firebase Auth Cloud login:", fbErr.message);
      }
    }

    // 2. Check local account store (seed + dynamic)
    const accounts = getAllAccounts();
    const matched = accounts.find(a => a.email.toLowerCase() === email && a.password === password);

    if (matched || firebaseSuccess) {
      let role = 'guest';
      if (email.includes('admin')) {
        role = 'admin';
      } else if (matched && matched.role) {
        role = matched.role;
      } else if (email.endsWith('@trikno.ch')) {
        role = 'employee';
      }

      const sessionUser = {
        email: email,
        role: role,
        name: matched ? (matched.name || email.split('@')[0]) : email,
        loginTime: Date.now(),
        expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 days session
      };

      sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
      return { success: true, user: sessionUser };
    }

    return { success: false, message: "Ungültige E-Mail oder falsches Passwort." };
  }

  function logout() {
    if (window.firebase && window.firebase.auth) {
      try { firebase.auth().signOut(); } catch (e) {}
    }
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    window.location.replace('/portal/login.html');
  }

  function getCurrentUser() {
    try {
      const data = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  async function addUser(email, password, role = 'guest', name = '') {
    email = (email || '').trim().toLowerCase();
    password = (password || '').trim();
    if (!email || !password) {
      return { success: false, message: "E-Mail und Passwort sind erforderlich." };
    }

    const dynamic = getDynamicUsers();
    const existing = dynamic.find(u => u.email.toLowerCase() === email);
    if (existing) {
      existing.password = password;
      existing.role = role;
      existing.name = name || existing.name;
    } else {
      dynamic.push({
        id: 'u_' + Date.now(),
        email: email,
        password: password,
        role: role,
        name: name || (role === 'guest' ? 'Guest User' : 'Employee'),
        createdAt: new Date().toISOString()
      });
    }

    saveDynamicUsers(dynamic);

    // Also register in Live Firebase Cloud Auth
    let fbSuccess = false;
    if (window.firebase && window.firebase.auth && window.TRIKNO_FIREBASE_CONFIG) {
      try {
        let secApp;
        try {
          secApp = firebase.app('TriknoSecondary');
        } catch (e) {
          secApp = firebase.initializeApp(window.TRIKNO_FIREBASE_CONFIG, 'TriknoSecondary');
        }
        await secApp.auth().createUserWithEmailAndPassword(email, password);
        secApp.auth().signOut();
        fbSuccess = true;
      } catch (fbErr) {
        console.warn("Firebase Auth Cloud Sync:", fbErr.message);
      }
    }

    return { 
      success: true, 
      message: fbSuccess ? "Benutzer in Firebase Cloud & lokal gespeichert!" : "Benutzer erfolgreich gespeichert!" 
    };
  }

  function deleteUser(email) {
    email = (email || '').trim().toLowerCase();
    let dynamic = getDynamicUsers();
    dynamic = dynamic.filter(u => u.email.toLowerCase() !== email);
    saveDynamicUsers(dynamic);
    return { success: true };
  }

  // Export PortalAuth globally
  window.PortalAuth = {
    login: login,
    logout: logout,
    getCurrentUser: getCurrentUser,
    getAllAccounts: getAllAccounts,
    addUser: addUser,
    deleteUser: deleteUser,
    generatePassword: generatePassword
  };
})();
