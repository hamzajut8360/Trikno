// TRIKNO Partner Portal - Internationalization (DE / EN / ES / FR)
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
      footerCountry: "Schweiz",
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
      footerCountry: "Switzerland",
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
    },
    es: {
      // Nav & Common
      backToMain: "← Sitio web principal",
      mainSite: "Sitio web principal",
      partnerPortal: "Portal de Socios y Proveedores",
      loggedAs: "Conectado como:",
      adminNav: "Gestión de usuarios",
      logout: "Cerrar sesión",
      switchLang: "Idioma",

      // Login Page
      loginTitle: "Portal de Socios y Proveedores – Acceso | TRIKNO",
      loginHeroTag: "Acceso autorizado",
      loginHeroTitle: "Portal de Socios y Proveedores",
      loginHeroSub: "Acceso exclusivo y seguro a la planificación interactiva de maquinaria 3D y documentación técnica de TRIKNO AG.",
      loginCardTitle: "Acceso al Portal",
      loginCardSub: "Inicie sesión con sus credenciales autorizadas.",
      labelEmail: "Correo electrónico",
      phEmail: "ejemplo@trikno.ch",
      labelPassword: "Contraseña",
      phPassword: "••••••••••••",
      rememberMe: "Mantener sesión iniciada",
      contactSupport: "Solicitar acceso",
      btnLogin: "Iniciar sesión",
      loggingIn: "Verificando...",
      errEmpty: "Por favor, introduzca su correo electrónico y contraseña.",
      errInvalid: "Correo electrónico o contraseña incorrectos.",
      supportNote: "¿Aún no tiene cuenta de acceso? Póngase en contacto con su representante en <strong>TRIKNO AG</strong> o escriba a <a href=\"mailto:info@trikno.ch\">info@trikno.ch</a>.",

      // Dashboard Page
      dashTitle: "Panel de control | TRIKNO Partner Portal",
      dashHeroTag: "Área protegida",
      dashHeroTitle: "Bienvenido al Portal de Socios",
      dashHeroSub: "Seleccione una plataforma para configurar equipos en 3D o consultar las especificaciones técnicas completas de las máquinas.",
      dashSectionTitle: "Plataformas disponibles",
      dashSectionSub: "Elija la plataforma a la que desea acceder.",

      // Card 1
      card1Badge: "Herramienta 3D interactiva",
      card1Kicker: "Planificación y configuración",
      card1Title: "Configurador de maquinaria 3D",
      card1Desc: "Planifique líneas modulares de chocolate y dosificación en tiempo real, combine módulos, verifique dimensiones y visualice esquemas 3D.",
      card1Btn: "Iniciar configurador 3D",

      // Card 2
      card2Badge: "Especificaciones y detalles",
      card2Kicker: "Documentación técnica",
      card2Title: "Catálogo de productos",
      card2Desc: "Visión completa de todos los tipos de máquinas, detalles de ensamblaje, ventajas competitivas (USP) y documentación técnica.",
      card2Btn: "Abrir catálogo",

      // Footer
      footerDesc: "TRIKNO AG – Expertos suizos en maquinaria de alta precisión para chocolate y confitería, desde unidades artesanales compactas hasta líneas de producción industriales.",
      footerAddressTitle: "Dirección",
      footerCountry: "Suiza",
      footerContactTitle: "Contacto",
      footerSecurityTitle: "Seguridad",
      footerSecurityDesc: "Esta área está encriptada y estrictamente reservada para clientes, proveedores y socios autorizados.",
      footerCopyright: "© 2026 TRIKNO AG · Todos los derechos reservados.",

      // Admin Page
      adminTitle: "Gestión de usuarios | TRIKNO Partner Portal",
      adminHeroTag: "Solo administradores",
      adminHeroTitle: "Gestión de usuarios del Portal",
      adminHeroSub: "Cree accesos para empleados, clientes y proveedores, genere contraseñas seguras y gestione cuentas de usuario existentes.",
      adminBackToDash: "← Volver al panel",
      adminCreateTitle: "Crear nueva cuenta de usuario",
      adminCreateSub: "Introduzca el correo electrónico y genere una contraseña segura con un solo clic.",
      labelRole: "Rol de acceso",
      roleGuest: "Invitado / Proveedor / Cliente (Solo Configurador y Catálogo)",
      roleEmployee: "Empleado (Acceso interno)",
      roleAdmin: "Administrador (Acceso total al sistema)",
      btnGeneratePwd: "Regenerar contraseña",
      btnSaveUser: "Guardar y activar usuario",
      activeUsersTitle: "Cuentas de usuario activas",
      activeUsersSub: "Resumen de todas las cuentas registradas almacenadas en el sistema.",
      colEmail: "Correo electrónico",
      colRole: "Rol",
      colPassword: "Contraseña",
      colActions: "Acciones",
      btnCopy: "Copiar",
      btnDelete: "Eliminar",
      copySuccess: "Credenciales copiadas al portapapeles:",
      deleteConfirm: "¿Realmente desea eliminar el acceso para",
      accessDenied: "Acceso denegado: No tiene permisos de administrador."
    },
    fr: {
      // Nav & Common
      backToMain: "← Site principal",
      mainSite: "Site principal",
      partnerPortal: "Portail Partenaires & Fournisseurs",
      loggedAs: "Connecté en tant que :",
      adminNav: "Gestion des utilisateurs",
      logout: "Déconnexion",
      switchLang: "Langue",

      // Login Page
      loginTitle: "Portail Partenaires & Fournisseurs – Connexion | TRIKNO",
      loginHeroTag: "Accès autorisé",
      loginHeroTitle: "Portail Partenaires & Fournisseurs",
      loginHeroSub: "Accès exclusif et sécurisé à la planification interactive 3D des équipements et à la documentation technique de TRIKNO AG.",
      loginCardTitle: "Connexion au Portail",
      loginCardSub: "Connectez-vous avec vos identifiants autorisés.",
      labelEmail: "Adresse e-mail",
      phEmail: "exemple@trikno.ch",
      labelPassword: "Mot de passe",
      phPassword: "••••••••••••",
      rememberMe: "Rester connecté",
      contactSupport: "Demander un accès",
      btnLogin: "Se connecter",
      loggingIn: "Vérification...",
      errEmpty: "Veuillez saisir votre e-mail et votre mot de passe.",
      errInvalid: "Adresse e-mail ou mot de passe incorrect.",
      supportNote: "Vous ne possédez pas encore de compte ? Contactez votre interlocuteur chez <strong>TRIKNO AG</strong> ou écrivez à <a href=\"mailto:info@trikno.ch\">info@trikno.ch</a>.",

      // Dashboard Page
      dashTitle: "Tableau de bord | TRIKNO Partner Portal",
      dashHeroTag: "Zone protégée",
      dashHeroTitle: "Bienvenue sur le Portail Partenaires",
      dashHeroSub: "Sélectionnez l'une des plateformes pour configurer vos équipements 3D ou consulter les spécifications techniques complètes des machines.",
      dashSectionTitle: "Plateformes disponibles",
      dashSectionSub: "Choisissez la plateforme à laquelle vous souhaitez accéder.",

      // Card 1
      card1Badge: "Outil 3D interactif",
      card1Kicker: "Planification & Configuration",
      card1Title: "Configurateur de machines 3D",
      card1Desc: "Planifiez des lignes modulaires de chocolat et de dosage en temps réel, combinez les assemblages, vérifiez les cotes et visualisez vos agencements 3D.",
      card1Btn: "Lancer le configurateur 3D",

      // Card 2
      card2Badge: "Spécifications & Détails",
      card2Kicker: "Documentation des machines",
      card2Title: "Portefeuille de produits",
      card2Desc: "Aperçu complet de tous les types de machines, détails d'assemblage, atouts techniques et commerciaux (USP) et documentation technique.",
      card2Btn: "Ouvrir le portefeuille",

      // Footer
      footerDesc: "TRIKNO AG – Experts suisses des machines de haute précision pour le chocolat et la confiserie, des appareils artisanaux compacts aux lignes industrielles complètes.",
      footerAddressTitle: "Adresse",
      footerCountry: "Suisse",
      footerCountry: "Schweiz",
      footerContactTitle: "Contact",
      footerSecurityTitle: "Sécurité",
      footerSecurityDesc: "Cette zone est cryptée et strictement réservée aux clients, fournisseurs et partenaires autorisés.",
      footerCopyright: "© 2026 TRIKNO AG · Tous droits réservés.",

      // Admin Page
      adminTitle: "Gestion des utilisateurs | TRIKNO Partner Portal",
      adminHeroTag: "Réservé aux administrateurs",
      adminHeroTitle: "Gestion des utilisateurs du Portail",
      adminHeroSub: "Créez des accès pour les collaborateurs, clients et fournisseurs, générez des mots de passe sécurisés et gérez les comptes existants.",
      adminBackToDash: "← Retour au tableau de bord",
      adminCreateTitle: "Créer un nouveau compte",
      adminCreateSub: "Saisissez l'adresse e-mail et générez un mot de passe sécurisé en un clic.",
      labelRole: "Rôle d'accès",
      roleGuest: "Invité / Fournisseur / Client (Configurateur & Portefeuille uniquement)",
      roleEmployee: "Collaborateur (Accès interne)",
      roleAdmin: "Administrateur (Accès complet au système)",
      btnGeneratePwd: "Régénérer le mot de passe",
      btnSaveUser: "Enregistrer et activer l'utilisateur",
      activeUsersTitle: "Comptes d'utilisateurs actifs",
      activeUsersSub: "Aperçu de tous les comptes enregistrés dans le système.",
      colEmail: "E-mail",
      colRole: "Rôle",
      colPassword: "Mot de passe",
      colActions: "Actions",
      btnCopy: "Copier",
      btnDelete: "Supprimer",
      copySuccess: "Identifiants copiés dans le presse-papiers :",
      deleteConfirm: "Voulez-vous vraiment supprimer l'accès pour",
      accessDenied: "Accès refusé : Vous ne disposez pas des droits d'administrateur."
    }
  };

  const SUPPORTED_LANGS = ['de', 'en', 'es', 'fr'];

  function getLang() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    if (paramLang && SUPPORTED_LANGS.includes(paramLang)) {
      localStorage.setItem(LANG_KEY, paramLang);
      localStorage.setItem('trikno_site_lang', paramLang);
      return paramLang;
    }
    const saved = localStorage.getItem(LANG_KEY) || localStorage.getItem('trikno_site_lang');
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      return saved;
    }
    // Check document referrer
    if (document.referrer) {
      if (document.referrer.includes('/es/')) return 'es';
      if (document.referrer.includes('/fr/')) return 'fr';
      if (document.referrer.includes('/en/')) return 'en';
    }
    if (navigator.language) {
      if (navigator.language.startsWith('es')) return 'es';
      if (navigator.language.startsWith('fr')) return 'fr';
      if (navigator.language.startsWith('en')) return 'en';
    }
    return 'de';
  }

  function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'de';
    localStorage.setItem(LANG_KEY, lang);
    localStorage.setItem('trikno_site_lang', lang);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    } catch (e) {}
    applyTranslations(lang);
    updateLangSwitchUI(lang);
    try {
      window.dispatchEvent(new CustomEvent('trikno-lang-change', { detail: { lang } }));
    } catch (e) {}
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

    // Back to main website link localized
    const mainHref = (lang === 'es') ? '/es/index' : (lang === 'fr') ? '/fr/index' : (lang === 'en') ? '/en/index' : '/index.html';
    document.querySelectorAll('.btn-back-main, [data-i18n="mainSite"]').forEach(el => {
      if (el.tagName === 'A') el.setAttribute('href', mainHref);
    });

    // Propagate selected language to Configurator and Portfolio links
    document.querySelectorAll('a[href*="/portal/configurator/"]').forEach(el => {
      el.setAttribute('href', '/portal/configurator/index.html?lang=' + lang);
    });
    document.querySelectorAll('a[href*="/portal/portfolio/"]').forEach(el => {
      el.setAttribute('href', '/portal/portfolio/index.html?lang=' + lang);
    });

    updateLangSwitchUI(lang);
  }

  function updateLangSwitchUI(lang) {
    lang = lang || getLang();
    // Update dropdown current label
    document.querySelectorAll('.lang-curr').forEach(el => {
      el.textContent = lang.toUpperCase();
    });

    // Update active state in dropdown options
    document.querySelectorAll('.lang-opt').forEach(opt => {
      const optLang = opt.getAttribute('data-lang');
      if (optLang === lang) {
        opt.classList.add('active');
        opt.setAttribute('aria-selected', 'true');
      } else {
        opt.classList.remove('active');
        opt.removeAttribute('aria-selected');
      }
    });

    // Support legacy pills if present
    SUPPORTED_LANGS.forEach(code => {
      document.querySelectorAll('.lang-btn-' + code).forEach(b => {
        if (lang === code) b.classList.add('active');
        else b.classList.remove('active');
      });
    });
  }

  function initDropdownEvents() {
    document.querySelectorAll('.lang-dropdown').forEach(dd => {
      const btn = dd.querySelector('.lang-btn');
      if (btn && !btn._hasTriknoListener) {
        btn._hasTriknoListener = true;
        btn.addEventListener('click', e => {
          e.stopPropagation();
          const isOpen = dd.classList.toggle('is-open');
          btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
      }

      dd.querySelectorAll('.lang-opt').forEach(opt => {
        if (!opt._hasTriknoListener) {
          opt._hasTriknoListener = true;
          opt.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            const targetLang = opt.getAttribute('data-lang');
            if (targetLang) {
              setLang(targetLang);
            }
            dd.classList.remove('is-open');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          });
        }
      });
    });

    if (!document._hasTriknoLangDocListener) {
      document._hasTriknoLangDocListener = true;
      document.addEventListener('click', () => {
        document.querySelectorAll('.lang-dropdown.is-open').forEach(dd => {
          dd.classList.remove('is-open');
          const b = dd.querySelector('.lang-btn');
          if (b) b.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // Auto apply on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyTranslations();
      initDropdownEvents();
    });
  } else {
    applyTranslations();
    initDropdownEvents();
  }

  window.TriknoI18n = {
    getLang: getLang,
    setLang: setLang,
    t: t,
    apply: applyTranslations
  };
})();
