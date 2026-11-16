// TRIKNO Partner Portal - Internationalization (DE / EN)
(function () {
  const LANG_KEY = 'trikno_portal_lang';

  const TRANSLATIONS = {
    de: {
      // Nav & Common
      backToMain: "← Hauptwebsite",
      mainSite: "Hauptwebsite",
      partnerPortal: "Partner & Lieferantenportal",
      loggedAs: "Angemeldet als:",
      adminNav: "Benutzerverwaltung",
      logout: "Abmelden",
      switchLang: "Sprache",

      // Login Page
      loginTitle: "Partner & Supplier Portal – Login | TRIKNO",
      loginHeroTag: "Autorisierter Zugang",
      loginHeroTitle: "Partner & Lieferanten-Portal",
      loginHeroSub: "Exklusiver, geschützter Zugang zu interaktiven 3D-Anlagen und Maschinendokumentationen der TRIKNO AG.",
      loginCardTitle: "Portal-Anmeldung",
      loginCardSub: "Melden Sie sich mit Ihren Zugangsdaten an.",
      labelEmail: "E-Mail-Adresse",
      phEmail: "beispiel@trikno.ch",
      labelPassword: "Passwort",
      phPassword: "••••••••••••",
      rememberMe: "Angemeldet bleiben",
      contactSupport: "Zugang anfordern",
      btnLogin: "Anmelden",
      loggingIn: "Wird überprüft...",
      errEmpty: "Bitte geben Sie E-Mail und Passwort ein.",
      errInvalid: "Ungültige E-Mail-Adresse oder falsches Passwort.",
      supportNote: "Sie haben noch keinen Zugang? Wenden Sie sich bitte an Ihren Ansprechpartner bei der <strong>TRIKNO AG</strong> oder schreiben Sie an <a href=\"mailto:info@trikno.ch\">info@trikno.ch</a>.",

      // Dashboard Page
      dashTitle: "Dashboard | TRIKNO Partner Portal",
      dashHeroTag: "Geschützter Bereich",
      dashHeroTitle: "Willkommen im Partner-Portal",
      dashHeroSub: "Wählen Sie eine der beiden Plattformen, um 3D-Modelle zu konfigurieren oder die vollständigen Maschinenspezifikationen einzusehen.",
      dashSectionTitle: "Verfügbare Plattformen",
      dashSectionSub: "Wählen Sie das gewünschte System für Ihre Arbeit aus.",

      // Card 1
      card1Badge: "Interaktives 3D-Tool",
      card1Kicker: "Planung & Konfiguration",
      card1Title: "3D-Anlagenkonfigurator",
      card1Desc: "Modulare Schokoladen- und Giessanlagen in Echtzeit interaktiv planen, Baugruppen kombinieren, Masse prüfen und 3D-Layouts visualisieren.",
      card1Btn: "3D-Konfigurator starten",

      // Card 2
      card2Badge: "Spezifikationen & Details",
      card2Kicker: "Maschinen-Dokumentation",
      card2Title: "Produkt-Portfolio",
      card2Desc: "Umfassende Übersicht aller Maschinentypen, Detailbeschreibungen der Baugruppen, technische Alleinstellungsmerkmale und Verkaufsargumente.",
      card2Btn: "Portfolio öffnen",

      // Footer
      footerDesc: "TRIKNO AG – Schweizer Experten für hochpräzise Schokoladen- und Confiseriemaschinen von der handwerklichen Kleinmaschine bis zur industriellen Produktionslinie.",
      footerAddressTitle: "Adresse",
      footerContactTitle: "Kontakt",
      footerSecurityTitle: "Sicherheit",
      footerSecurityDesc: "Dieser Bereich ist verschlüsselt und ausschliesslich autorisierten Kunden, Lieferanten und Partnern vorbehalten.",
      footerCopyright: "© 2026 TRIKNO AG · Alle Rechte vorbehalten.",

      // Admin Page
      adminTitle: "Benutzerverwaltung | TRIKNO Partner Portal",
      adminHeroTag: "Nur für Administratoren",
      adminHeroTitle: "Portal Benutzerverwaltung",
      adminHeroSub: "Legen Sie Zugänge für neue Mitarbeiter, Kunden und Lieferanten an, generieren Sie sichere Passwörter und verwalten Sie bestehende Konten.",
      adminBackToDash: "← Zum Dashboard",
      adminCreateTitle: "Neuen Zugang anlegen",
      adminCreateSub: "Geben Sie die E-Mail ein und generieren Sie ein sicheres Passwort mit einem Klick.",
      labelRole: "Zugriffsrolle",
      roleGuest: "Gast / Lieferant / Kunde (Nur Konfigurator & Portfolio)",
      roleEmployee: "Mitarbeiter (Interner Zugriff)",
      roleAdmin: "Administrator (Voller Systemzugriff)",
      btnGeneratePwd: "Passwort neu generieren",
      btnSaveUser: "Benutzer speichern & aktivieren",
      activeUsersTitle: "Aktive Benutzerkonten",
      activeUsersSub: "Übersicht aller im System hinterlegten Konten.",
      colEmail: "E-Mail",
      colRole: "Rolle",
      colPassword: "Passwort",
      colActions: "Aktionen",
      btnCopy: "Kopieren",
      btnDelete: "Löschen",
      copySuccess: "Zugangsdaten wurden in die Zwischenablage kopiert:",
      deleteConfirm: "Möchten Sie den Zugang für wirklich löschen?",
      accessDenied: "Zugriff verweigert: Sie haben keine Administrator-Rechte."
    },
    en: {
      // Nav & Common
      backToMain: "← Main Website",
      mainSite: "Main Website",
      partnerPortal: "Partner & Supplier Portal",
      loggedAs: "Logged in as:",
      adminNav: "User Management",
      logout: "Sign Out",
      switchLang: "Language",

      // Login Page
      loginTitle: "Partner & Supplier Portal – Login | TRIKNO",
      loginHeroTag: "Authorized Access",
      loginHeroTitle: "Partner & Supplier Portal",
      loginHeroSub: "Exclusive, secure access to interactive 3D machinery planning and technical machine documentation by TRIKNO AG.",
      loginCardTitle: "Portal Sign In",
      loginCardSub: "Sign in with your authorized credentials.",
      labelEmail: "Email Address",
      phEmail: "example@trikno.ch",
      labelPassword: "Password",
      phPassword: "••••••••••••",
      rememberMe: "Keep me signed in",
      contactSupport: "Request access",
      btnLogin: "Sign In",
      loggingIn: "Verifying...",
      errEmpty: "Please enter your email and password.",
      errInvalid: "Invalid email address or incorrect password.",
      supportNote: "Don't have an access account yet? Please contact your representative at <strong>TRIKNO AG</strong> or email <a href=\"mailto:info@trikno.ch\">info@trikno.ch</a>.",

      // Dashboard Page
      dashTitle: "Dashboard | TRIKNO Partner Portal",
      dashHeroTag: "Restricted Area",
      dashHeroTitle: "Welcome to Partner Portal",
      dashHeroSub: "Select one of the two platforms to configure 3D equipment or inspect complete machine engineering specifications.",
      dashSectionTitle: "Available Platforms",
      dashSectionSub: "Choose the platform you wish to access.",

      // Card 1
      card1Badge: "Interactive 3D Tool",
      card1Kicker: "Planning & Configuration",
      card1Title: "3D Machine Configurator",
      card1Desc: "Plan modular chocolate and depositing production lines in real time, combine assemblies, verify dimensions, and visualize 3D layouts.",
      card1Btn: "Launch 3D Configurator",

      // Card 2
      card2Badge: "Specs & Engineering Details",
      card2Kicker: "Machine Documentation",
      card2Title: "Product Portfolio",
      card2Desc: "Comprehensive overview of all machine types, engineering assembly details, unique selling propositions (USPs), and technical documentation.",
      card2Btn: "Open Portfolio",

      // Footer
      footerDesc: "TRIKNO AG – Swiss experts in high-precision chocolate and confectionery machinery, from artisanal compact units to industrial manufacturing lines.",
      footerAddressTitle: "Address",
      footerContactTitle: "Contact",
      footerSecurityTitle: "Security",
      footerSecurityDesc: "This area is encrypted and strictly reserved for authorized clients, suppliers, and partners.",
      footerCopyright: "© 2026 TRIKNO AG · All rights reserved.",

      // Admin Page
      adminTitle: "User Management | TRIKNO Partner Portal",
      adminHeroTag: "Administrators Only",
      adminHeroTitle: "Portal User Management",
      adminHeroSub: "Create credentials for new employees, clients, and suppliers, generate secure passwords, and manage existing user accounts.",
      adminBackToDash: "← Back to Dashboard",
      adminCreateTitle: "Create New User Account",
      adminCreateSub: "Enter email address and generate a strong secure password with one click.",
      labelRole: "Access Role",
      roleGuest: "Guest / Supplier / Client (Configurator & Portfolio Only)",
      roleEmployee: "Employee (Internal Access)",
      roleAdmin: "Administrator (Full System Access)",
      btnGeneratePwd: "Re-generate Password",
      btnSaveUser: "Save & Activate User",
      activeUsersTitle: "Active User Accounts",
      activeUsersSub: "Overview of all registered accounts currently stored in the system.",
      colEmail: "Email",
      colRole: "Role",
      colPassword: "Password",
      colActions: "Actions",
      btnCopy: "Copy",
      btnDelete: "Delete",
      copySuccess: "Credentials copied to clipboard:",
      deleteConfirm: "Are you sure you want to delete access for",
      accessDenied: "Access Denied: You do not have administrator privileges."
    }
  };

  function getLang() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    if (paramLang && (paramLang === 'de' || paramLang === 'en')) {
      localStorage.setItem(LANG_KEY, paramLang);
      return paramLang;
    }
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && (saved === 'de' || saved === 'en')) {
      return saved;
    }
    // Default to German, but if browser is English and no saved pref, default to EN
    if (navigator.language && navigator.language.startsWith('en')) {
      return 'en';
    }
    return 'de';
  }

  function setLang(lang) {
    if (lang !== 'de' && lang !== 'en') lang = 'de';
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations(lang);
    updateLangSwitchUI(lang);
  }

  function t(key, lang) {
    lang = lang || getLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.de;
    return dict[key] !== undefined ? dict[key] : (TRANSLATIONS.de[key] || key);
  }

  function applyTranslations(lang) {
    lang = lang || getLang();
    document.documentElement.lang = lang;

    // Title
    const titleKey = document.querySelector('title')?.getAttribute('data-i18n');
    if (titleKey) {
      document.title = t(titleKey, lang);
    }

    // Text & HTML content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && el.tagName !== 'TITLE') {
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = t(key, lang);
        } else {
          el.textContent = t(key, lang);
        }
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (key) {
        el.setAttribute('placeholder', t(key, lang));
      }
    });

    updateLangSwitchUI(lang);
  }

  function updateLangSwitchUI(lang) {
    document.querySelectorAll('.lang-btn-de').forEach(b => {
      if (lang === 'de') b.classList.add('active');
      else b.classList.remove('active');
    });
    document.querySelectorAll('.lang-btn-en').forEach(b => {
      if (lang === 'en') b.classList.add('active');
      else b.classList.remove('active');
    });
  }

  // Auto apply on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyTranslations());
  } else {
    applyTranslations();
  }

  window.TriknoI18n = {
    getLang: getLang,
    setLang: setLang,
    t: t,
    apply: applyTranslations
  };
})();

