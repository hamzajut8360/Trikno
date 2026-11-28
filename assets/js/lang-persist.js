(function () {
  var STORAGE_KEY = 'trikno_site_lang';
  var SUPPORTED = { de: true, en: true, es: true, fr: true };

  function getPathLang() {
    var p = window.location.pathname || '/';
    if (p === '/en' || p.indexOf('/en/') === 0) return 'en';
    if (p === '/es' || p.indexOf('/es/') === 0) return 'es';
    if (p === '/fr' || p.indexOf('/fr/') === 0) return 'fr';
    if (p.indexOf('/portal') === 0) return null;
    return 'de';
  }

  function safeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }

  function safeSet(key, val) {
    try { window.localStorage.setItem(key, val); } catch (e) {}
  }

  var pageLang = getPathLang();
  if (pageLang) {
    // Check explicit ?lang= override in URL
    try {
      var params = new URLSearchParams(window.location.search);
      var qLang = (params.get('lang') || '').toLowerCase();
      if (SUPPORTED[qLang]) {
        safeSet(STORAGE_KEY, qLang);
      }
    } catch (e) {}

    if (pageLang !== 'de') {
      // User is on an /en/, /es/, or /fr/ page -> persist it
      safeSet(STORAGE_KEY, pageLang);
    } else {
      // User is on a German root page -> check if they previously chose EN, ES, or FR
      var saved = safeGet(STORAGE_KEY);
      if (saved && saved !== 'de' && SUPPORTED[saved]) {
        var p = window.location.pathname || '/';
        var target;
        if (p === '/' || p === '/index' || p === '/index.html') {
          target = '/' + saved + '/index';
        } else {
          target = '/' + saved + p;
        }
        window.location.replace(target + window.location.search + window.location.hash);
        return;
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Save language choice whenever user clicks an option in the language dropdown
    document.querySelectorAll('.lang-menu a.lang-opt').forEach(function (opt) {
      opt.addEventListener('click', function () {
        var codeEl = opt.querySelector('.lang-code');
        var code = codeEl ? codeEl.textContent.trim().toLowerCase() : '';
        if (!SUPPORTED[code]) {
          var href = opt.getAttribute('href') || '';
          if (href.indexOf('/en/') !== -1 || href === '/en') code = 'en';
          else if (href.indexOf('/es/') !== -1 || href === '/es') code = 'es';
          else if (href.indexOf('/fr/') !== -1 || href === '/fr') code = 'fr';
          else if (href === '/' || href.indexOf('/index') === 0 || href.indexOf('/') === 0) code = 'de';
        }
        if (SUPPORTED[code]) {
          safeSet(STORAGE_KEY, code);
        }
      });
    });
  });
})();
