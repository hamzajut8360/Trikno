// TRIKNO Partner Portal - Live Firebase Configuration & Account Store
window.TRIKNO_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCeJ5E2sKpnXdFhm287RnfMhJklaZbzypM",
  authDomain: "trikno-portal.firebaseapp.com",
  projectId: "trikno-portal",
  storageBucket: "trikno-portal.firebasestorage.app",
  messagingSenderId: "997862084206",
  appId: "1:997862084206:web:ba6f387869a64c4463a07f",
  measurementId: "G-0T63ZJ1ZLH"
};

// Auto-initialize Firebase SDK
if (typeof firebase !== 'undefined' && firebase.initializeApp) {
  try {
    if (!firebase.apps || !firebase.apps.length) {
      firebase.initializeApp(window.TRIKNO_FIREBASE_CONFIG);
      console.log("Firebase connected successfully: trikno-portal");
    }
  } catch (e) {
    console.warn("Firebase initialization:", e);
  }
}

// Built-in Seed Accounts (8 Employees + 4 Guest Mails)
// These accounts work in all environments: Localhost, Vercel & Live cPanel domain
window.TRIKNO_INITIAL_ACCOUNTS = [
  // --- Employee Accounts (8) ---
  { email: "management@trikno.ch", password: "Trikno#2026!Mgmt", role: "employee", name: "Management" },
  { email: "sales@trikno.ch", password: "Trikno#2026!Sales", role: "employee", name: "Sales Team" },
  { email: "engineering@trikno.ch", password: "Trikno#2026!Eng", role: "employee", name: "Engineering" },
  { email: "service@trikno.ch", password: "Trikno#2026!Srv", role: "employee", name: "Service & Support" },
  { email: "gtrajkovic@trikno.ch", password: "Trikno#2026!Goran", role: "employee", name: "Goran Trajkovic" },
  { email: "production@trikno.ch", password: "Trikno#2026!Prod", role: "employee", name: "Production" },
  { email: "hr@trikno.ch", password: "Trikno#2026!HR", role: "employee", name: "HR Department" },
  { email: "admin@trikno.ch", password: "Trikno#2026!Admin", role: "admin", name: "Administrator" },

  // --- Guest / Depositor Accounts (4) ---
  { email: "guest1@trikno.ch", password: "Trikno#Guest2026!1", role: "guest", name: "Guest Access 1" },
  { email: "guest2@trikno.ch", password: "Trikno#Guest2026!2", role: "guest", name: "Guest Access 2" },
  { email: "guest3@trikno.ch", password: "Trikno#Guest2026!3", role: "guest", name: "Guest Access 3" },
  { email: "guest4@trikno.ch", password: "Trikno#Guest2026!4", role: "guest", name: "Guest Access 4" }
];
