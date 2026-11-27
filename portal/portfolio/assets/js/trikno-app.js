/**
 * TRIKNO INTERACTIVE APPLICATION CONTROLLER
 * Full Page About Trikno, Balanced 2-Column Products, Flawless Machine Details,
 * Smart Back Navigation, and Bilingual (German & English) Language Switcher.
 */

(function($) {
  'use strict';

  var currentProduct = null;
  var currentTab = '02';
  var currentSubMode = null;
  var currentLang = localStorage.getItem('trikno_lang') || 'en';

  $(function() {
    // Hide default In5 navigation everywhere
    $('#trikno-portfolio-nav').hide();

    initHeroEvents();
    initNavigationEvents();
    initAboutPageEvents();
    initLanguageController();
    renderProductsList();
    initMachineDetailDock();
    initModalHandlers();

    // Apply initial language
    setLanguage(currentLang);

    // Deep linking for products and tabs (e.g. ?product=alpha-nuss&tab=06)
    try {
      var params = new URLSearchParams(window.location.search);
      var prodId = params.get('product') || (window.location.hash ? window.location.hash.replace('#', '') : null);
      var tabId = params.get('tab') || (prodId ? '06' : null);
      if (prodId) {
        setTimeout(function() {
          openMachineDetail(prodId);
          if (tabId) switchMachineTab(tabId);
        }, 100);
      }
    } catch(e) {}
  });

  // --- 1. HERO SLIDE CENTER BUTTON ---
  function initHeroEvents() {
    // Click "Discover Products" Button -> Opens Products Showcase directly
    $(document).on('click touchend', '#btn-hero-products', function(e) {
      e.preventDefault();
      closeAboutView();
      closeMachineView();
      openProductsView();
    });

    // Click "About Trikno" Button -> Opens FULL PAGE About Trikno
    $(document).on('click touchend', '#btn-about-trikno', function(e) {
      e.preventDefault();
      openAboutView();
    });

    // Back to Intro Video from any page
    $(document).on('click', '.btn-back-intro', function(e) {
      e.preventDefault();
      closeAboutView();
      closeProductsView();
      closeMachineView();
      $('#trikno-portfolio-nav').hide();
      if (window.nav && typeof window.nav.to === 'function') {
        window.nav.to(1);
      }
    });

    // Back to Products from Machine View button
    $(document).on('click', '.btn-machine-back-list, .dock-btn-products-back', function(e) {
      e.preventDefault();
      closeMachineView();
      closeAboutView();
      openProductsView();
    });
  }

  // --- 1B. NAVIGATION BACK BUTTON HANDLER ---
  function initNavigationEvents() {
    $(document).on('click', '.btn-topbar-back, .btn-back-step', function(e) {
      e.preventDefault();

      // If Machine Detail view is open -> Go back to Products list
      if ($('#trikno-machine-view').hasClass('active')) {
        closeMachineView();
        openProductsView();
        return;
      }

      // If Applications view is open -> Go back to About Trikno
      if ($('#trikno-applications-view').hasClass('active')) {
        closeApplicationsView();
        openAboutView();
        return;
      }

      // If Products view is open -> Go back to About Trikno
      if ($('#trikno-products-view').hasClass('active')) {
        closeProductsView();
        openAboutView();
        return;
      }

      // If About Trikno is open -> Go back to Homepage Intro Video
      if ($('#trikno-about-view').hasClass('active')) {
        closeAboutView();
        if (window.nav && typeof window.nav.to === 'function') {
          window.nav.to(1);
        }
        return;
      }

      // Fallback
      if (window.nav && typeof window.nav.to === 'function') {
        window.nav.to(1);
      }
    });
  }

  // --- 1C. LANGUAGE CONTROLLER (GERMAN, ENGLISH, SPANISH, FRENCH DROPDOWN) ---
  function initLanguageController() {
    var lastInteraction = 0;

    // Toggle dropdown open / close (debounced for touch + click on mobile)
    $(document).on('click touchend', '.btn-lang-toggle', function(e) {
      var now = Date.now();
      if (now - lastInteraction < 320) {
        e.preventDefault();
        return;
      }
      lastInteraction = now;
      e.preventDefault();
      e.stopPropagation();
      var $parent = $(this).closest('.trikno-lang-dropdown');
      var wasOpen = $parent.hasClass('open');
      $('.trikno-lang-dropdown').removeClass('open');
      if (!wasOpen) {
        $parent.addClass('open');
      }
    });

    // Select language option
    $(document).on('click touchend', '.lang-option-btn', function(e) {
      var now = Date.now();
      if (now - lastInteraction < 320) {
        e.preventDefault();
        return;
      }
      lastInteraction = now;
      e.preventDefault();
      e.stopPropagation();
      var lang = $(this).attr('data-lang');
      if (lang && (['de', 'en', 'es', 'fr'].includes(lang))) {
        setLanguage(lang);
      }
      $('.trikno-lang-dropdown').removeClass('open');
    });

    // Close dropdown when clicking or touching outside
    $(document).on('click touchend', function(e) {
      if (Date.now() - lastInteraction < 320) return;
      if (!$(e.target).closest('.trikno-lang-dropdown').length) {
        $('.trikno-lang-dropdown').removeClass('open');
      }
    });

    // Close dropdown on Escape key
    $(document).on('keydown', function(e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        $('.trikno-lang-dropdown').removeClass('open');
      }
    });
  }

  function getProdText(p, field) {
    if (!p) return '';
    if (currentLang === 'en' && window.TRIKNO_PRODUCTS_EN && window.TRIKNO_PRODUCTS_EN[p.id]) {
      var en = window.TRIKNO_PRODUCTS_EN[p.id];
      if (en[field] !== undefined) {
        return en[field];
      }
    }
    return p[field] || '';
  }

  function setLanguage(lang) {
    currentLang = lang;
    try {
      localStorage.setItem('trikno_lang', lang);
    } catch (e) {}

    var t = (window.TRIKNO_TRANSLATIONS && window.TRIKNO_TRANSLATIONS[lang]) || window.TRIKNO_TRANSLATIONS.en;

    // Update Language labels in all dropdowns
    $('.lang-current-label').text(lang.toUpperCase());
    $('.lang-option-btn').removeClass('active');
    $(`.lang-option-btn[data-lang="${lang}"]`).addClass('active');

    // Update Topbar buttons text
    $('.btn-back-text').text(t.back);
    $('.btn-back-intro span').text(t.introVideo);
    $('#btn-hero-about-text').text(lang === 'de' ? 'Über Trikno' : (lang === 'es' ? 'Sobre Trikno' : (lang === 'fr' ? 'À propos de Trikno' : 'About Trikno')));
    $('#btn-hero-products-text').text(lang === 'de' ? 'Produkte entdecken' : (lang === 'es' ? 'Descubrir productos' : (lang === 'fr' ? 'Découvrir nos produits' : 'Discover Products')));

    // Update About Page
    $('#about-badge-label').text(t.aboutBadge);
    $('#about-main-heading').text(t.aboutTitle);
    $('#about-main-lead').text(t.aboutLead);
    if ($('#about-main-vision').length) {
      var visionPrefix = (lang === 'de') ? 'Unsere Vision: ' : (lang === 'es' ? 'Nuestra visión: ' : (lang === 'fr' ? 'Notre vision : ' : 'Our Vision: '));
      $('#about-main-vision').html('<strong>' + visionPrefix + '</strong>' + (t.aboutVision || ''));
    }
    if ($('#about-main-mission').length) {
      var missionPrefix = (lang === 'de') ? 'Unsere Mission: ' : (lang === 'es' ? 'Nuestra misión: ' : (lang === 'fr' ? 'Notre mission : ' : 'Our Mission: '));
      $('#about-main-mission').html('<strong>' + missionPrefix + '</strong>' + (t.aboutMission || ''));
    }
    $('#btn-about-to-products-text').text(t.aboutBtn);
    if ($('#btn-about-video-text').length) {
      $('#btn-about-video-text').text(t.aboutBtnVideo || 'Trikno Video');
    }
    if ($('#btn-about-applications-text').length) {
      $('#btn-about-applications-text').text(t.aboutBtnApplications || (lang === 'de' ? 'Unsere Applikationen' : (lang === 'es' ? 'Nuestras aplicaciones' : (lang === 'fr' ? 'Nos applications' : 'Our Applications'))));
    }
    if ($('#btn-about-presentation-text').length) {
      $('#btn-about-presentation-text').text(t.aboutBtnPresentation || (lang === 'de' ? 'Firmenpräsentation' : (lang === 'es' ? 'Presentación de la empresa' : (lang === 'fr' ? 'Présentation de l\'entreprise' : 'Company Presentation'))));
    }
    if ($('#btn-about-presentation').length) {
      var presPdf = (lang === 'de')
        ? 'assets/pdf/Trikno_company_presentation_german_01-26.pdf'
        : 'assets/pdf/Trikno_company_presentation_english_1-26.pdf';
      $('#btn-about-presentation').attr('href', presPdf);
      $('#btn-about-presentation').attr('aria-label', t.aboutBtnPresentation || (lang === 'de' ? 'Firmenpräsentation' : 'Company Presentation'));
    }
    if ($('#btn-video-modal-back-text').length) {
      $('#btn-video-modal-back-text').text(t.videoModalBack || (lang === 'de' ? '← Zurück' : (lang === 'es' ? '← Volver' : (lang === 'fr' ? '← Retour' : '← Back'))));
    }
    $('#about-render-caption').text(t.aboutCaption);
    if ($('#hero-portfolio-subheading').length && t.heroSubtitle) {
      $('#hero-portfolio-subheading').text(t.heroSubtitle);
    }

    // Update Applications Page header & cards
    if ($('#applications-header-badge').length) {
      $('#applications-header-badge').text(t.appBadge || '');
      $('#applications-header-title').text(t.appTitle || '');
      $('#applications-header-desc').text(t.appDesc || '');
    }
    if (t.applications && t.applications.length) {
      t.applications.forEach(function(app) {
        var $card = $('.app-card[data-slug="' + app.slug + '"]');
        if ($card.length) {
          $card.find('.app-card-kicker').text(app.kicker);
          $card.find('h3').text(app.title);
          $card.find('p').text(app.desc);
        }
      });
    }

    // Update Products Page header
    $('#products-header-badge').text(t.productsBadge);
    $('#products-header-title').text(t.productsTitle);
    $('#products-header-desc').text(t.productsSubtitle);

    // Update Category titles
    $('#title-cat-giess').text(t.catGiess);
    $('#title-cat-periph').text(t.catPeriph);

    // Re-render product cards
    renderProductsList();

    // If machine view is open, refresh machine details
    if (currentProduct) {
      updateMachineDetailContent(currentProduct);
      if (currentTab === '03' || currentTab === '04') {
        setTimeout(updateActiveDiagramLines, 60);
      }
    }

    // Update Dock Tab Labels
    $('#trikno-dynamic-dock .dock-tab-btn').each(function() {
      var tabId = $(this).attr('data-tab');
      if (t.tabs && t.tabs[tabId]) {
        var raw = t.tabs[tabId];
        var parts = raw.split(' ');
        var num = parts[0];
        var label = parts.slice(1).join(' ');
        $(this).find('.tab-num').text(num);
        $(this).find('span').last().text(label);
      }
    });

    // Update Machine detail buttons
    $('#btn-machine-datasheet span').text(t.technicalDatasheet);
    $('#btn-machine-video span').text(t.video);
  }

  // --- 2. ABOUT TRIKNO FULL PAGE VIEW ---
  function openAboutView() {
    closeProductsView();
    closeApplicationsView();
    closeMachineView();
    $('#trikno-portfolio-nav').hide();
    $('#trikno-about-view').addClass('active').scrollTop(0);
    $('#homepage-lang-fixed').hide(); // hide homepage lang btn when inner page opens
  }

  function closeAboutView() {
    $('#trikno-about-view').removeClass('active');
    // Show homepage lang btn only if no other inner page is active
    if (!$('#trikno-products-view').hasClass('active') && !$('#trikno-applications-view').hasClass('active') && !$('#trikno-machine-view').hasClass('active')) {
      $('#homepage-lang-fixed').show();
    }
  }

  function initAboutPageEvents() {
    // "Our Products" button inside About Full Page
    $(document).on('click', '#btn-about-to-products', function(e) {
      e.preventDefault();
      closeAboutView();
      openProductsView();
    });

    // "Unsere Applikationen" button inside About Full Page
    $(document).on('click', '#btn-about-applications', function(e) {
      e.preventDefault();
      closeAboutView();
      openApplicationsView();
    });

    // "Back" button from Applications View
    $(document).on('click', '#btn-applications-back', function(e) {
      e.preventDefault();
      closeApplicationsView();
      openAboutView();
    });

    // "Trikno Video" button inside About Full Page
    $(document).on('click', '#btn-about-video', function(e) {
      e.preventDefault();
      var $modal = $('#trikno-video-modal');
      var $video = $('#trikno-modal-video');
      $modal.find('h3, #trikno-video-modal-title').text('TRIKNO Video');
      var $source = $video.find('source');
      if ($source.attr('src') !== 'assets/media/trikno-company-video.mp4') {
        $source.attr('src', 'assets/media/trikno-company-video.mp4');
        if ($video[0]) $video[0].load();
      }
      $modal.css('display', 'flex').hide().fadeIn(250);
      if ($video.length && $video[0].play) {
        $video[0].currentTime = 0;
        $video[0].play().catch(function() {});
      }
    });
  }

  // --- 2B. OUR APPLICATIONS VIEW ---
  function openApplicationsView() {
    closeAboutView();
    closeProductsView();
    closeMachineView();
    $('#trikno-portfolio-nav').hide();
    $('#trikno-applications-view').addClass('active').scrollTop(0);
    $('#homepage-lang-fixed').hide();
  }

  function closeApplicationsView() {
    $('#trikno-applications-view').removeClass('active');
    if (!$('#trikno-about-view').hasClass('active') && !$('#trikno-products-view').hasClass('active') && !$('#trikno-machine-view').hasClass('active')) {
      $('#homepage-lang-fixed').show();
    }
  }

  // --- 3. OUR PRODUCTS VIEW (BALANCED 2-COLUMN GRID, PERFECT ALIGNMENT) ---
  function openProductsView() {
    closeAboutView();
    closeApplicationsView();
    closeMachineView();
    $('#trikno-portfolio-nav').hide();
    $('#trikno-products-view').addClass('active').scrollTop(0);
    $('#homepage-lang-fixed').hide(); // hide homepage lang btn when inner page opens

    // Clean URL query parameters when returning to catalog so navigation stays clean
    if (window.history && window.history.replaceState) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }

  function closeProductsView() {
    $('#trikno-products-view').removeClass('active');
    // Show homepage lang btn only if no other inner page is active
    if (!$('#trikno-about-view').hasClass('active') && !$('#trikno-applications-view').hasClass('active') && !$('#trikno-machine-view').hasClass('active')) {
      $('#homepage-lang-fixed').show();
    }
  }

  function renderProductsList() {
    var products = window.TRIKNO_PRODUCTS || [];
    var $container = $('#products-unified-grid');

    if (!$container.length || !products.length) return;

    var t = (window.TRIKNO_TRANSLATIONS && window.TRIKNO_TRANSLATIONS[currentLang]) || window.TRIKNO_TRANSLATIONS.en;

    $container.empty();

    // Separate into:
    // Left: Giessmaschinen (and Gesamtanlagen)
    var giessmaschinen = products.filter(function(p) {
      return p.category === 'Giessmaschinen' || p.category === 'Gesamtanlagen';
    });

    // Right: Peripheriegeräte (in exact sequence of Screenshot 3)
    var peripherie = products.filter(function(p) {
      return p.category === 'Peripheriegeräte';
    });

    function createCardHtml(p) {
      var kicker = getProdText(p, 'kicker');
      var name = getProdText(p, 'name');
      var desc = getProdText(p, 'lead') || getProdText(p, 'description');
      var btnText = t.viewProduct;

      return `
        <div class="trikno-prod-card" data-id="${p.id}">
          <div class="prod-card-media">
            <img src="${p.image}" alt="${name}" loading="lazy">
          </div>
          <div class="prod-card-body">
            <span class="prod-card-kicker" title="${kicker}">${kicker}</span>
            <h3 class="prod-card-title" title="${name}">${name}</h3>
            <p class="prod-card-desc" title="${desc}">${desc}</p>
            <button class="btn-view-product" data-product-id="${p.id}">
              <span>${btnText}</span>
            </button>
          </div>
        </div>
      `;
    }

    var leftCardsHtml = giessmaschinen.map(createCardHtml).join('');
    var rightCardsHtml = peripherie.map(createCardHtml).join('');

    var layoutHtml = `
      <div class="products-two-columns-layout">
        <!-- Left Side: Giessmaschinen -->
        <div class="products-category-col" id="col-giessmaschinen">
          <div class="category-col-header">
            <h2 class="category-col-title" id="title-cat-giess">${t.catGiess}</h2>
          </div>
          <div class="category-col-cards">
            ${leftCardsHtml}
          </div>
        </div>

        <!-- Right Side: Peripheriegeräte -->
        <div class="products-category-col" id="col-peripherie">
          <div class="category-col-header">
            <h2 class="category-col-title" id="title-cat-periph">${t.catPeriph}</h2>
          </div>
          <div class="category-col-cards">
            ${rightCardsHtml}
          </div>
        </div>
      </div>
    `;

    $container.html(layoutHtml);

    // View Product Click (supports clicking on either the button or the entire card)
    $(document).off('click', '.trikno-prod-card, .btn-view-product').on('click', '.trikno-prod-card, .btn-view-product', function(e) {
      e.preventDefault();
      var pId = $(this).attr('data-product-id') || $(this).closest('.trikno-prod-card').attr('data-id');
      if (pId) {
        openMachineDetail(pId);
      }
    });
  }

  // --- 4. MACHINE DETAIL VIEW (MATCHING SCREENSHOT 2, NO ARROWS) ---
  function openMachineDetail(productId) {
    var products = window.TRIKNO_PRODUCTS || [];
    var product = typeof productId === 'string'
      ? products.find(function(item) { return item.id === productId; })
      : productId;

    if (!product) {
      product = products[0]; // fallback
    }

    currentProduct = product;
    currentSubMode = (product.subModes && product.subModes.length) ? product.subModes[0].key : null;
    updateMachineDetailContent(product);

    // Reset to Tab 02 "machine"
    switchMachineTab('02');

    // Show machine view with dock
    closeAboutView();
    closeProductsView();
    $('#trikno-machine-view').addClass('active');
    $('#homepage-lang-fixed').hide(); // hide homepage lang btn when machine opens
  }

  /**
   * Resolves active mode data (top-level product or selected subMode)
   * merging structural properties (dots, images, layouts) with localized text.
   */
  function resolveModeData(product) {
    var enProd = (currentLang === 'en' && window.TRIKNO_PRODUCTS_EN && window.TRIKNO_PRODUCTS_EN[product.id])
      ? window.TRIKNO_PRODUCTS_EN[product.id]
      : null;

    var baseSubModes = product.subModes || [];
    var hasSubModes = baseSubModes.length > 0;
    var activeKey = currentSubMode;
    var baseMode = null;
    var locMode = null;

    if (hasSubModes) {
      baseMode = baseSubModes.find(function(m) { return m.key === activeKey; }) || baseSubModes[0];
      activeKey = baseMode.key;
      currentSubMode = activeKey;

      if (enProd && enProd.subModes) {
        locMode = enProd.subModes.find(function(m) { return m.key === activeKey; }) || null;
      }
    }

    var subModesList = baseSubModes.map(function(m) {
      var enMatch = (enProd && enProd.subModes)
        ? enProd.subModes.find(function(em) { return em.key === m.key; })
        : null;
      return {
        key: m.key,
        label: (enMatch && enMatch.label) || m.label
      };
    });

    function pickField(field) {
      if (locMode && locMode[field] !== undefined) return locMode[field];
      if (baseMode && baseMode[field] !== undefined) return baseMode[field];
      if (enProd && enProd[field] !== undefined) return enProd[field];
      return product[field];
    }

    function pickBaseField(field) {
      if (baseMode && baseMode[field] !== undefined) return baseMode[field];
      return product[field];
    }

    return {
      activeKey: activeKey,
      hasSubModes: hasSubModes,
      subModesList: subModesList,
      pdf: (locMode && locMode.pdf) || (baseMode && baseMode.pdf) || (enProd && enProd.pdf) || product.pdf,
      diagramImage: pickBaseField('diagramImage') || product.cutoutImage || product.image,
      variantsDiagramImage: pickBaseField('variantsDiagramImage') || pickBaseField('diagramImage') || product.cutoutImage || product.image,
      diagramTitleUSP: pickField('diagramTitleUSP'),
      diagramTitleVariants: pickField('diagramTitleVariants'),
      baseUsps: pickBaseField('usps'),
      usps: pickField('usps'),
      baseVariantsCustom: pickBaseField('variantsCustom'),
      variantsCustom: pickField('variantsCustom'),
      optionsCustom: pickField('optionsCustom'),
      optionsNote: pickField('optionsNote'),
      baseApplicationCustom: pickBaseField('applicationCustom'),
      applicationCustom: pickField('applicationCustom'),
      applications: pickField('applications')
    };
  }

  function resolveProductPdf(rawPdf) {
    if (!rawPdf) return 'assets/pdf/Trikno_Imagebrochure_2026-08_EN_V5.pdf';
    var isGerman = (currentLang === 'de');
    if (isGerman) {
      if (rawPdf.indexOf('_Technisches Datenblatt_EN.pdf') !== -1) {
        return rawPdf.replace('_Technisches Datenblatt_EN.pdf', '_Technisches Datenblatt.pdf');
      }
      if (rawPdf.indexOf('_Technical DataSheet_EN.pdf') !== -1) {
        return rawPdf.replace('_Technical DataSheet_EN.pdf', '_Technisches Datenblatt.pdf');
      }
      return rawPdf;
    } else {
      // For English, French, and Spanish: use English datasheet
      if (rawPdf.indexOf('_Technisches Datenblatt.pdf') !== -1) {
        return rawPdf.replace('_Technisches Datenblatt.pdf', '_Technisches Datenblatt_EN.pdf');
      }
      if (rawPdf.indexOf('_Technical DataSheet_DE.pdf') !== -1) {
        return rawPdf.replace('_Technical DataSheet_DE.pdf', '_Technisches Datenblatt_EN.pdf');
      }
      if (rawPdf.indexOf('german') !== -1) {
        return rawPdf.replace('german', 'english');
      }
      return rawPdf;
    }
  }

  function renderSubModePills(modeData) {
    if (!modeData || !modeData.hasSubModes) return '';
    var btns = modeData.subModesList.map(function(m) {
      var activeCls = (m.key === modeData.activeKey) ? ' is-active' : '';
      return `<button type="button" class="submode-btn${activeCls}" data-submode="${m.key}">${m.label}</button>`;
    }).join('');
    return `<div class="submode-switcher">${btns}</div>`;
  }

  function updateMachineDetailContent(product) {
    var t = (window.TRIKNO_TRANSLATIONS && window.TRIKNO_TRANSLATIONS[currentLang]) || window.TRIKNO_TRANSLATIONS.en;
    var modeData = resolveModeData(product);

    var kicker = getProdText(product, 'kicker');
    var name = getProdText(product, 'name');
    var desc = getProdText(product, 'description') || getProdText(product, 'lead');
    var variantsTitle = getProdText(product, 'variantsTitle') || t.variantsHead;
    var variantsText = getProdText(product, 'variantsText');
    var characteristics = getProdText(product, 'characteristics');
    var specs = getProdText(product, 'specs');
    var variantsDetail = getProdText(product, 'variantsDetail');
    var options = getProdText(product, 'options');
    var applications = getProdText(product, 'applications');

    // Visuals & title for Tab 02 Overview
    var imgSrc = product.cutoutImage || product.image;
    $('#machine-visual-img').attr('src', imgSrc).attr('alt', name);
    $('#machine-detail-kicker').text(kicker);
    $('#machine-detail-title').text(name);

    // Tab 02 "machine"
    $('#machine-desc-text').text(desc);
    $('#machine-subhead').text(variantsTitle);
    $('#machine-subtext').text(variantsText);

    // Datasheet PDF (dynamic by language: German -> German datasheet; English/Spanish/French -> English datasheet)
    var rawPdf = modeData.pdf || product.pdf || 'assets/pdf/Trikno_Imagebrochure_2026-08_EN_V5.pdf';
    var pdfHref = resolveProductPdf(rawPdf);
    var datasheetLabel = (currentLang === 'de') ? 'Technisches Datenblatt' : (currentLang === 'es' ? 'Ficha técnica' : (currentLang === 'fr' ? 'Fiche technique' : 'Technical Datasheet'));
    $('#btn-machine-datasheet').attr('href', pdfHref).show();
    $('#btn-machine-datasheet-text').text(datasheetLabel);

    // Machine Video Button
    var videoSrc = modeData.video || product.video;
    var videoTitle = (product.fullName || product.name) + ' – Video';
    var youtubeVideos = modeData.youtubeVideos || product.youtubeVideos || null;
    var youtubePlaylist = modeData.youtubePlaylist || product.youtubePlaylist || null;
    if (videoSrc) {
      $('#btn-machine-video')
        .data('video-src', videoSrc)
        .data('video-title', videoTitle)
        .data('youtube-videos', youtubeVideos)
        .data('youtube-playlist', youtubePlaylist)
        .show();
    } else {
      $('#btn-machine-video')
        .data('video-src', '')
        .data('video-title', videoTitle)
        .data('youtube-videos', null)
        .data('youtube-playlist', null)
        .show();
    }

    // --- TAB 03: Characteristics / Eigenschaften ---
    var $charContainer = $('#container-characteristics').empty();
    if (modeData.baseUsps && modeData.baseUsps.length) {
      renderInteractiveDiagram($charContainer, product, modeData, {
        viewId: 'omega-usp-diagram',
        svgId: 'omega-usp-lines',
        baseKey: 'baseUsps',
        locKey: 'usps',
        titleKey: 'diagramTitleUSP',
        imageKey: 'diagramImage',
        fallbackTitle: name + " USP's"
      });
    } else {
      renderFallbackCharacteristics($charContainer, characteristics, specs);
    }

    // --- TAB 04: Variants / Varianten ---
    var $varContainer = $('#container-variants').empty();
    if (modeData.baseVariantsCustom && modeData.baseVariantsCustom.length) {
      renderInteractiveDiagram($varContainer, product, modeData, {
        viewId: 'omega-variants-diagram',
        svgId: 'omega-variants-lines',
        baseKey: 'baseVariantsCustom',
        locKey: 'variantsCustom',
        titleKey: 'diagramTitleVariants',
        imageKey: 'variantsDiagramImage',
        fallbackTitle: name + ((currentLang === 'de') ? ' Varianten' : ' Variants')
      });
    } else {
      renderFallbackVariants($varContainer, variantsDetail, variantsText, t);
    }

    // --- TAB 05: Options / Optionen ---
    var $optContainer = $('#container-options').empty();
    if ((modeData.optionsCustom && modeData.optionsCustom.length) || modeData.optionsNote) {
      renderCustomOptions($optContainer, product, modeData);
    } else {
      renderFallbackOptions($optContainer, options, t);
    }

    // --- TAB 06: Application / Anwendung ---
    var $appContainer = $('#container-application').empty();
    renderApplicationTab($appContainer, product, modeData, applications);
  }

  // --- SHARED INTERACTIVE DIAGRAM RENDERER (TAB 03 & TAB 04) ---
  function renderInteractiveDiagram($container, product, modeData, cfg) {
    var baseItems = modeData[cfg.baseKey] || [];
    var locItems = modeData[cfg.locKey] || baseItems;
    var items = baseItems.map(function(item) {
      var tItem = locItems.find(function(x) { return x.id === item.id; }) || item;
      return Object.assign({}, item, tItem, { dot: item.dot, pos: item.pos });
    });

    var title = modeData[cfg.titleKey] || cfg.fallbackTitle;
    var imgSrc = modeData[cfg.imageKey] || product.diagramImage || product.cutoutImage || product.image;
    var subModeHtml = renderSubModePills(modeData);

    var leftItems = items.filter(function(u) { return u.pos === 'left'; });
    var rightItems = items.filter(function(u) { return u.pos === 'right'; });

    function buildCardHtml(item) {
      var descHtml = item.desc ? `<span class="diagram-card-desc">${item.desc}</span>` : '';
      return `
        <div class="diagram-card" data-target="${item.id}">
          <strong class="diagram-card-title">${item.title}</strong>
          ${descHtml}
        </div>
      `;
    }

    function getColClass(sideItems) {
      if (sideItems.length > 0 && sideItems.length <= 2) return ' is-compact-col';
      if (sideItems.length >= 5) return ' has-many-col';
      return '';
    }

    var leftCardsHtml = leftItems.map(buildCardHtml).join('');
    var rightCardsHtml = rightItems.map(buildCardHtml).join('');
    var singleSideClass = (rightItems.length === 0) ? ' single-side-left' : '';

    var dotsHtml = items.map(function(item) {
      return `
        <div class="diagram-dot" data-target="${item.id}" data-dot-x="${item.dot.x}" data-dot-y="${item.dot.y}">
          <span class="dot-core"></span>
          <span class="dot-pulse"></span>
        </div>
      `;
    }).join('');

    var rightColHtml = rightItems.length > 0
      ? `<div class="diagram-cards-col diagram-cards-right${getColClass(rightItems)}">${rightCardsHtml}</div>`
      : '';

    var html = `
      <div class="trikno-diagram-view" id="${cfg.viewId}">
        <div class="diagram-header${subModeHtml ? ' diagram-header-row' : ''}">
          <h2 class="diagram-heading">${title}</h2>
          ${subModeHtml}
        </div>

        <div class="diagram-canvas${singleSideClass}">
          <svg class="diagram-lines-svg" id="${cfg.svgId}"></svg>
          <div class="diagram-dots-overlay">
            ${dotsHtml}
          </div>

          <div class="diagram-cards-col diagram-cards-left${getColClass(leftItems)}">
            ${leftCardsHtml}
          </div>

          <div class="diagram-center-visual">
            <img src="${imgSrc}" alt="${product.name}" class="diagram-machine-img">
          </div>

          ${rightColHtml}
        </div>
      </div>
    `;

    $container.html(html);
    var $img = $container.find('.diagram-machine-img');
    $img.on('load', function() {
      updateActiveDiagramLines();
    });
    if ($img[0] && $img[0].complete) {
      setTimeout(updateActiveDiagramLines, 30);
    }
  }

  // Tab 05: Options / Optionen (PDF Datasheet options + optional note + dense mode)
  function renderCustomOptions($container, product, modeData) {
    var options = modeData.optionsCustom || [];
    var optionsNote = modeData.optionsNote || '';
    var heading = (currentLang === 'de') ? "Optionen" : "Options";
    var imgSrc = modeData.diagramImage || product.diagramImage || product.cutoutImage || product.image;
    var subModeHtml = renderSubModePills(modeData);
    var denseClass = (options.length > 6) ? ' is-dense' : '';

    var noteHtml = optionsNote
      ? `<div class="options-note-banner">${optionsNote}</div>`
      : '';

    var itemsHtml = options.map(function(opt) {
      return `
        <div class="options-clean-item">
          <div class="options-bullet-icon"></div>
          <div>${opt}</div>
        </div>
      `;
    }).join('');

    var html = `
      <div class="options-view-stage">
        <div class="options-grid-layout">
          <div class="options-left-col">
            <div class="${subModeHtml ? 'options-heading-row' : ''}">
              <h2 class="options-heading">${heading}</h2>
              ${subModeHtml}
            </div>
            ${noteHtml}
            <div class="options-clean-list${denseClass}">
              ${itemsHtml}
            </div>
          </div>
          <div class="options-right-col">
            <div class="options-visual-wrap">
              <img src="${imgSrc}" alt="${product.name}" class="options-machine-img">
            </div>
          </div>
        </div>
      </div>
    `;

    $container.html(html);
  }

  // --- FALLBACK RENDERERS FOR MACHINES WITHOUT INTERACTIVE DIAGRAMS ---
  function renderFallbackCharacteristics($container, characteristics, specs) {
    var title = (currentLang === 'de') ? "Eigenschaften" : "Characteristics";
    var html = `
      <div class="trikno-diagram-view fallback-view" style="padding: 40px; max-width: 900px; margin: 0 auto;">
        <div class="diagram-header"><h2 class="diagram-heading">${title}</h2></div>
        <div class="options-clean-card" style="margin-top: 20px; padding: 24px; background: #fff; border-radius: 16px; border: 1px solid #dce8ec; box-shadow: 0 4px 14px rgba(40,45,50,0.06);">
          ${characteristics ? `<p style="font-size: 15px; line-height: 1.6; color: #334155;">${characteristics}</p>` : ''}
          ${specs ? `<p style="font-size: 14px; line-height: 1.5; color: #64748b; margin-top: 12px;">${specs}</p>` : ''}
        </div>
      </div>
    `;
    $container.html(html);
  }

  function renderFallbackVariants($container, variantsDetail, variantsText, t) {
    var title = (currentLang === 'de') ? "Varianten" : "Variants";
    var html = `
      <div class="trikno-diagram-view fallback-view" style="padding: 40px; max-width: 900px; margin: 0 auto;">
        <div class="diagram-header"><h2 class="diagram-heading">${title}</h2></div>
        <div class="options-clean-card" style="margin-top: 20px; padding: 24px; background: #fff; border-radius: 16px; border: 1px solid #dce8ec; box-shadow: 0 4px 14px rgba(40,45,50,0.06);">
          ${variantsDetail ? `<p style="font-size: 15px; line-height: 1.6; color: #334155;">${variantsDetail}</p>` : ''}
          ${variantsText ? `<p style="font-size: 14px; line-height: 1.5; color: #64748b; margin-top: 12px;">${variantsText}</p>` : ''}
        </div>
      </div>
    `;
    $container.html(html);
  }

  function renderFallbackOptions($container, options, t) {
    var heading = (currentLang === 'de') ? "Optionen" : "Options";
    var optionsList = Array.isArray(options) ? options : (options ? [options] : []);
    var itemsHtml = optionsList.map(function(opt) {
      return `
        <div class="options-clean-item" style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 10px;">
          <div class="options-bullet-icon" style="width: 8px; height: 8px; border-radius: 50%; background: #6cb8d2; flex-shrink: 0;"></div>
          <div style="font-size: 14px; color: #334155;">${opt}</div>
        </div>
      `;
    }).join('');
    var html = `
      <div class="trikno-diagram-view fallback-view" style="padding: 40px; max-width: 900px; margin: 0 auto;">
        <div class="diagram-header"><h2 class="diagram-heading">${heading}</h2></div>
        <div class="options-clean-card" style="margin-top: 20px; padding: 24px; background: #fff; border-radius: 16px; border: 1px solid #dce8ec; box-shadow: 0 4px 14px rgba(40,45,50,0.06);">
          ${itemsHtml || '<p style="color: #64748b;">' + ((currentLang === 'de') ? 'Keine speziellen Optionen aufgeführt.' : 'No special options listed.') + '</p>'}
        </div>
      </div>
    `;
    $container.html(html);
  }

  // --- SAFE DIAGRAM LINE UPDATER ---
  function updateActiveDiagramLines() {
    try {
      var $activePane = $('.machine-stage-pane.active');
      if (!$activePane.length) return;
      var $view = $activePane.find('.trikno-diagram-view');
      if (!$view.length) return;
      var $svg = $view.find('.diagram-lines-svg');
      if (!$svg.length) return;

      var viewOffset = $view.offset();
      if (!viewOffset) return;

      $svg.empty();

      var $activeCard = $view.find('.diagram-card.is-active');
      if (!$activeCard.length) return;

      var targetId = $activeCard.attr('data-target');
      var $dot = $view.find('.diagram-dot[data-target="' + targetId + '"]');
      if (!$dot.length) return;

      var cardOffset = $activeCard.offset();
      var dotOffset = $dot.offset();
      if (!cardOffset || !dotOffset) return;

      var isLeft = $activeCard.closest('.diagram-cards-left').length > 0;
      var cardX = isLeft
        ? (cardOffset.left + $activeCard.outerWidth() - viewOffset.left)
        : (cardOffset.left - viewOffset.left);
      var cardY = cardOffset.top + ($activeCard.outerHeight() / 2) - viewOffset.top;

      var dotX = dotOffset.left + ($dot.outerWidth() / 2) - viewOffset.left;
      var dotY = dotOffset.top + ($dot.outerHeight() / 2) - viewOffset.top;

      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', cardX);
      line.setAttribute('y1', cardY);
      line.setAttribute('x2', dotX);
      line.setAttribute('y2', dotY);
      line.setAttribute('class', 'diagram-line is-active');
      $svg.append(line);
    } catch (err) {}
  }

  // Tab 06: Application / Anwendung (Datasheet-accurate layout with circular images, categories & bullet lists)
  function renderApplicationTab($container, product, modeData, applications) {
    var appsList = applications || (modeData && modeData.applications) || product.applications || [];

    var headerTitle = (currentLang === 'en') ? 'Possible Applications' :
                      ((currentLang === 'es') ? 'Posibles aplicaciones' :
                      ((currentLang === 'fr') ? 'Possibilités d\'application' : 'Anwendungsmöglichkeiten'));

    var prodName = (currentLang === 'en' && window.TRIKNO_PRODUCTS_EN && window.TRIKNO_PRODUCTS_EN[product.id] && (window.TRIKNO_PRODUCTS_EN[product.id].fullName || window.TRIKNO_PRODUCTS_EN[product.id].name)) || product.fullName || product.name;
    var prodKicker = (currentLang === 'en' && window.TRIKNO_PRODUCTS_EN && window.TRIKNO_PRODUCTS_EN[product.id] && window.TRIKNO_PRODUCTS_EN[product.id].kicker) || product.kicker || '';

    var cardsCount = appsList.length;
    var gridClass = (cardsCount <= 2) ? 'cols-2' : ((cardsCount <= 4) ? 'cols-2-or-4' : 'cols-3');

    var cardsHtml = appsList.map(function(app) {
      var img = app.image || 'assets/img/Applikationen/Solid.png';

      var bulletsHtml = '';
      if (Array.isArray(app.items) && app.items.length > 0) {
        bulletsHtml = `
          <ul class="app-ds-bullets">
            ${app.items.map(function(item) {
              return `<li>${item}</li>`;
            }).join('')}
          </ul>
        `;
      } else if (app.desc) {
        bulletsHtml = `<div class="app-ds-desc">${app.desc}</div>`;
      }

      var statBadge = app.stat ? `<span class="app-ds-stat">${app.stat}</span>` : '';

      return `
        <div class="app-ds-card">
          <div class="app-ds-circle-wrap">
            <img src="${img}" alt="${app.title}" class="app-ds-circle-img" loading="lazy">
          </div>
          <div class="app-ds-content">
            <div class="app-ds-card-header">
              <h4 class="app-ds-title">${app.title}</h4>
              ${statBadge}
            </div>
            ${bulletsHtml}
          </div>
        </div>
      `;
    }).join('');

    var html = `
      <div class="application-view-stage">
        <div class="app-view-header">
          <div class="app-view-header-text">
            <h2 class="app-view-title">${prodName}</h2>
            ${prodKicker ? `<div class="app-view-subtitle">${prodKicker}</div>` : ''}
          </div>
        </div>

        <div class="app-cards-section-subhead">${headerTitle}</div>

        <div class="app-ds-grid ${gridClass}">
          ${cardsHtml}
        </div>
      </div>
    `;

    $container.html(html);
  }

  // --- SUB-MODE SWITCHER HANDLER ---
  $(document).on('click', '.submode-btn', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var nextKey = $(this).attr('data-submode');
    if (!currentProduct || !nextKey || nextKey === currentSubMode) return;
    currentSubMode = nextKey;
    updateMachineDetailContent(currentProduct);
    setTimeout(updateActiveDiagramLines, 60);
  });

  // --- DIAGRAM INTERACTION HANDLERS ---
  $(document).on('click', '.diagram-card, .diagram-dot', function(e) {
    e.stopPropagation();
    var target = $(this).attr('data-target');
    var $diagram = $(this).closest('.trikno-diagram-view');
    var isCurrentlyActive = $(this).hasClass('is-active');

    if (isCurrentlyActive) {
      // Toggle off / deselect
      $diagram.find('.diagram-card, .diagram-dot, .diagram-line').removeClass('is-active is-dimmed');
    } else {
      // Activate this point, dim others
      $diagram.find('.diagram-card, .diagram-dot, .diagram-line').addClass('is-dimmed').removeClass('is-active');
      $diagram.find(`[data-target="${target}"]`).removeClass('is-dimmed').addClass('is-active');
    }
  });

  // Clicking background resets selection
  $(document).on('click', '.trikno-diagram-view', function(e) {
    if (!$(e.target).closest('.diagram-card, .diagram-dot').length) {
      $(this).find('.diagram-card, .diagram-dot, .diagram-line').removeClass('is-active is-dimmed');
    }
  });

  // Redraw SVG lines on window resize
  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      updateActiveDiagramLines();
    }, 80);
  });

  function closeMachineView() {
    $('#trikno-machine-view').removeClass('active');
    $('.machine-stage-pane').removeClass('active').hide();
    currentProduct = null;
    // Show homepage lang btn only if no other inner page is active
    if (!$('#trikno-about-view').hasClass('active') && !$('#trikno-products-view').hasClass('active') && !$('#trikno-applications-view').hasClass('active')) {
      $('#homepage-lang-fixed').show();
    }
  }

  // --- 5. BOTTOM DOCK TABS SWITCHING ---
  function initMachineDetailDock() {
    $(document).on('click', '#trikno-dynamic-dock .dock-tab-btn', function(e) {
      e.preventDefault();
      var tabId = $(this).attr('data-tab');

      if (tabId === '01') {
        // Tab 01 "Intro" goes to Intro video & hides bottom dock
        closeMachineView();
        closeProductsView();
        closeAboutView();
        $('#trikno-portfolio-nav').hide();
        if (window.nav && typeof window.nav.to === 'function') {
          window.nav.to(1);
        }
        return;
      }

      switchMachineTab(tabId);
    });
  }

  function switchMachineTab(tabId) {
    currentTab = tabId;

    // Scroll machine view container to top on tab change
    var machineView = document.getElementById('trikno-machine-view');
    if (machineView) {
      machineView.scrollTop = 0;
    }

    // Highlight active dock button
    $('#trikno-dynamic-dock .dock-tab-btn').removeClass('active');
    $(`#trikno-dynamic-dock .dock-tab-btn[data-tab="${tabId}"]`).addClass('active');

    // Hide all stage panes
    $('.machine-stage-pane').removeClass('active').hide();

    // Show selected stage pane
    var $activePane = $(`#pane-tab-${tabId}`);
    if ($activePane.length) {
      $activePane.addClass('active').show();
      if (tabId === '03' || tabId === '04') {
        updateActiveDiagramLines();
        setTimeout(updateActiveDiagramLines, 40);
        setTimeout(updateActiveDiagramLines, 120);
        setTimeout(updateActiveDiagramLines, 250);
      }
    }
  }

  // --- 6. VIDEO MODAL POPUP ---
  function initModalHandlers() {
    $(document).on('click', '#btn-machine-video, [data-video-open]', function(e) {
      e.preventDefault();
      var videoSrc = $(this).data('video-src') || $(this).attr('data-video-src');
      var videoTitle = $(this).data('video-title') || $(this).attr('data-video-title') || 'TRIKNO Video';
      var ytVideos = $(this).data('youtube-videos');
      var ytPlaylist = $(this).data('youtube-playlist');

      var $modal = $('#trikno-video-modal');
      var $video = $('#trikno-modal-video');
      var $iframe = $('#trikno-modal-iframe');
      var $playlistBar = $('#trikno-modal-playlist-bar');

      $modal.find('h3, #trikno-video-modal-title').text(videoTitle);

      var isYouTube = videoSrc && (videoSrc.indexOf('youtube.com') !== -1 || videoSrc.indexOf('youtu.be') !== -1);

      if (isYouTube) {
        if ($video.length && $video[0].pause) $video[0].pause();
        $video.hide();
        $iframe.show();

        // Convert playlist URL or watch URL to embed URL
        var embedUrl = videoSrc;
        if (embedUrl.indexOf('playlist?list=') !== -1) {
          var listId = embedUrl.split('list=')[1].split('&')[0];
          embedUrl = 'https://www.youtube.com/embed/videoseries?list=' + listId + '&autoplay=1';
        } else if (embedUrl.indexOf('watch?v=') !== -1) {
          var vId = embedUrl.split('v=')[1].split('&')[0];
          embedUrl = 'https://www.youtube.com/embed/' + vId + '?autoplay=1';
        }

        $iframe.attr('src', embedUrl);

        // If multiple playlist videos are configured, show interactive track buttons
        if (ytVideos && ytVideos.length) {
          $playlistBar.empty().css('display', 'flex');

          var $allBtn = $('<button type="button" class="btn-yt-track" style="cursor:pointer; background:#6cb8d2; color:#fff; border:none; border-radius:20px; padding:6px 14px; font-size:12px; font-weight:600; white-space:nowrap; transition:all 0.2s;">▶ Ganze Playlist</button>');
          $allBtn.on('click', function() {
            $playlistBar.find('button').css({background: 'rgba(255,255,255,0.12)', color: '#fff'});
            $(this).css({background: '#6cb8d2', color: '#fff'});
            $iframe.attr('src', embedUrl);
          });
          $playlistBar.append($allBtn);

          ytVideos.forEach(function(v, idx) {
            var $vBtn = $('<button type="button" class="btn-yt-track" style="cursor:pointer; background:rgba(255,255,255,0.12); color:#fff; border:none; border-radius:20px; padding:6px 14px; font-size:12px; font-weight:500; white-space:nowrap; transition:all 0.2s;">' + (idx+1) + '. ' + v.title + '</button>');
            $vBtn.on('click', function() {
              $playlistBar.find('button').css({background: 'rgba(255,255,255,0.12)', color: '#fff'});
              $(this).css({background: '#6cb8d2', color: '#fff'});
              var singleEmbed = 'https://www.youtube.com/embed/' + v.id + '?autoplay=1';
              $iframe.attr('src', singleEmbed);
            });
            $playlistBar.append($vBtn);
          });
        } else {
          $playlistBar.hide();
        }
      } else {
        $iframe.attr('src', 'about:blank').hide();
        $playlistBar.hide();
        $video.show();
        if (videoSrc) {
          var $source = $video.find('source');
          if ($source.attr('src') !== videoSrc) {
            $source.attr('src', videoSrc);
            if ($video[0]) $video[0].load();
          }
          if ($video.length && $video[0].play) {
            $video[0].currentTime = 0;
            $video[0].play().catch(function() {});
          }
        }
      }

      $modal.css('display', 'flex').hide().fadeIn(250);
    });

    $(document).on('click', '#trikno-video-close, #btn-video-modal-back', function(e) {
      e.preventDefault();
      closeVideoModal();
    });

    $(document).on('click', '#trikno-video-modal', function(e) {
      if (e.target === this) {
        closeVideoModal();
      }
    });

    $(document).on('keydown', function(e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        closeVideoModal();
      }
    });
  }

  function closeVideoModal() {
    var $modal = $('#trikno-video-modal');
    var $video = $('#trikno-modal-video');
    var $iframe = $('#trikno-modal-iframe');
    $modal.fadeOut(200);
    if ($video.length && $video[0].pause) {
      $video[0].pause();
    }
    if ($iframe.length) {
      $iframe.attr('src', 'about:blank');
    }
  }

  window.TriknoApp = {
    openAbout: openAboutView,
    closeAbout: closeAboutView,
    openProducts: openProductsView,
    closeProducts: closeProductsView,
    openMachine: openMachineDetail,
    closeMachine: closeMachineView,
    setLanguage: setLanguage,
    getLanguage: function() { return currentLang; }
  };

})(jQuery);
