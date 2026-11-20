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
  });

  // --- 1. HERO SLIDE CENTER BUTTON ---
  function initHeroEvents() {
    // Click "About Trikno" Button -> Opens FULL PAGE About Trikno
    $(document).on('click', '#btn-about-trikno', function(e) {
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

  // --- 1C. LANGUAGE CONTROLLER (GERMAN & ENGLISH DROPDOWN) ---
  function initLanguageController() {
    // Toggle dropdown open / close
    $(document).on('click', '.btn-lang-toggle', function(e) {
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
    $(document).on('click', '.lang-option-btn', function(e) {
      e.preventDefault();
      var lang = $(this).attr('data-lang');
      if (lang && (lang === 'de' || lang === 'en')) {
        setLanguage(lang);
      }
      $('.trikno-lang-dropdown').removeClass('open');
    });

    // Close dropdown when clicking outside
    $(document).on('click', function(e) {
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
    $('#btn-hero-about-text').text(lang === 'de' ? 'Über Trikno' : 'About Trikno');

    // Update About Page
    $('#about-badge-label').text(t.aboutBadge);
    $('#about-main-heading').text(t.aboutTitle);
    $('#about-main-lead').text(t.aboutLead);
    if ($('#about-main-vision').length) {
      $('#about-main-vision').html('<strong>' + (lang === 'de' ? 'Unsere Vision: ' : 'Our Vision: ') + '</strong>' + (t.aboutVision || ''));
    }
    if ($('#about-main-mission').length) {
      $('#about-main-mission').html('<strong>' + (lang === 'de' ? 'Unsere Mission: ' : 'Our Mission: ') + '</strong>' + (t.aboutMission || ''));
    }
    $('#btn-about-to-products-text').text(t.aboutBtn);
    if ($('#btn-about-video-text').length) {
      $('#btn-about-video-text').text(t.aboutBtnVideo || 'Trikno Video');
    }
    if ($('#btn-about-presentation-text').length) {
      $('#btn-about-presentation-text').text(t.aboutBtnPresentation || (lang === 'de' ? 'Firmenpräsentation' : 'Company Presentation'));
    }
    if ($('#btn-video-modal-back-text').length) {
      $('#btn-video-modal-back-text').text(t.videoModalBack || (lang === 'de' ? '← Zurück' : '← Back'));
    }
    $('#about-render-caption').text(t.aboutCaption);
    if ($('#hero-portfolio-subheading').length && t.heroSubtitle) {
      $('#hero-portfolio-subheading').text(t.heroSubtitle);
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
    closeMachineView();
    $('#trikno-portfolio-nav').hide();
    $('#trikno-about-view').addClass('active').scrollTop(0);
    $('#homepage-lang-fixed').hide(); // hide homepage lang btn when inner page opens
  }

  function closeAboutView() {
    $('#trikno-about-view').removeClass('active');
    // Show homepage lang btn only if no other inner page is active
    if (!$('#trikno-products-view').hasClass('active') && !$('#trikno-machine-view').hasClass('active')) {
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

    // "Trikno Video" button inside About Full Page
    $(document).on('click', '#btn-about-video', function(e) {
      e.preventDefault();
      var $modal = $('#trikno-video-modal');
      var $video = $('#trikno-modal-video');
      $modal.find('h3, #trikno-video-modal-title').text('TRIKNO Video');
      var $source = $video.find('source');
      if ($source.attr('src') !== 'assets/media/hero-bg-chocolate.mp4') {
        $source.attr('src', 'assets/media/hero-bg-chocolate.mp4');
        if ($video[0]) $video[0].load();
      }
      $modal.css('display', 'flex').hide().fadeIn(250);
      if ($video.length && $video[0].play) {
        $video[0].currentTime = 0;
        $video[0].play().catch(function() {});
      }
    });
  }

  // --- 3. OUR PRODUCTS VIEW (BALANCED 2-COLUMN GRID, PERFECT ALIGNMENT) ---
  function openProductsView() {
    closeAboutView();
    closeMachineView();
    $('#trikno-portfolio-nav').hide();
    $('#trikno-products-view').addClass('active').scrollTop(0);
    $('#homepage-lang-fixed').hide(); // hide homepage lang btn when inner page opens
  }

  function closeProductsView() {
    $('#trikno-products-view').removeClass('active');
    // Show homepage lang btn only if no other inner page is active
    if (!$('#trikno-about-view').hasClass('active') && !$('#trikno-machine-view').hasClass('active')) {
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

    // View Product Click
    $(document).off('click', '.btn-view-product').on('click', '.btn-view-product', function(e) {
      e.preventDefault();
      var pId = $(this).attr('data-product-id');
      openMachineDetail(pId);
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
      applicationCustom: pickField('applicationCustom')
    };
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

    // Datasheet PDF (subMode can override if specified, e.g. Alpha Nuss / Eta Nuss)
    var pdfHref = modeData.pdf || product.pdf || 'assets/pdf/Trikno_Imagebrochure_2026-08_EN_V5.pdf';
    $('#btn-machine-datasheet').attr('href', pdfHref).show();

    // Machine Video Button
    var videoSrc = modeData.video || product.video;
    var videoTitle = (product.fullName || product.name) + ' – Video';
    if (videoSrc) {
      $('#btn-machine-video')
        .data('video-src', videoSrc)
        .data('video-title', videoTitle)
        .show();
    } else {
      $('#btn-machine-video')
        .data('video-src', '')
        .data('video-title', videoTitle)
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
    if (modeData.baseApplicationCustom || modeData.applicationCustom) {
      renderCustomApplication($appContainer, product, modeData);
    } else {
      renderFallbackApplications($appContainer, applications);
    }
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

  // Tab 06: Application / Anwendung (Supports output cards, single/multi-col specs tables, bullets & flow diagrams)
  function renderCustomApplication($container, product, modeData) {
    var baseAppData = modeData.baseApplicationCustom || {};
    var appData = modeData.applicationCustom || baseAppData;
    var subModeHtml = renderSubModePills(modeData);

    var specsList = appData.specs || baseAppData.specs || [];
    var isMultiCol = specsList.some(function(s) { return Array.isArray(s.values); });
    var maxCols = specsList.reduce(function(max, s) {
      return Array.isArray(s.values) ? Math.max(max, s.values.length) : max;
    }, 1);

    var specsRowsHtml = specsList.map(function(s) {
      if (Array.isArray(s.values)) {
        var cells = s.values.map(function(v) { return `<td>${v}</td>`; }).join('');
        return `<tr><td>${s.label}</td>${cells}</tr>`;
      }
      var colSpanAttr = (isMultiCol && maxCols > 1) ? ` colspan="${maxCols}"` : '';
      return `<tr><td>${s.label}</td><td${colSpanAttr}>${s.value}</td></tr>`;
    }).join('');

    var productsList = appData.products || baseAppData.products || [];
    var productsHtml = productsList.map(function(p, idx) {
      var baseProd = (baseAppData.products && baseAppData.products[idx]) ? baseAppData.products[idx] : {};
      var img = p.image || baseProd.image || '';
      var stat2Html = p.stat2 ? `<div class="app-product-stat">${p.stat2}</div>` : '';
      return `
        <div class="app-product-card">
          <img src="${img}" alt="${p.title}" class="app-product-thumb">
          <div class="app-product-info">
            <div class="app-product-title">${p.title}</div>
            <div class="app-product-stat">${p.stat1}</div>
            ${stat2Html}
          </div>
        </div>
      `;
    }).join('');

    var productsBlockHtml = productsList.length > 0
      ? `<div class="app-products-grid">${productsHtml}</div>`
      : '';

    var specsBlockHtml = specsList.length > 0
      ? `
        <div class="app-specs-section">
          ${appData.specsTitle ? `<div class="app-section-subhead">${appData.specsTitle}</div>` : ''}
          <table class="app-specs-table${isMultiCol ? ' is-multicolumn' : ''}">
            <tbody>${specsRowsHtml}</tbody>
          </table>
        </div>
      `
      : '';

    var bulletsList = appData.bullets || baseAppData.bullets || [];
    var bulletsBlockHtml = bulletsList.length > 0
      ? `
        <div class="app-bullets-card">
          ${appData.bulletsTitle ? `<div class="app-bullets-title">${appData.bulletsTitle}</div>` : ''}
          <ul class="app-bullets-list">
            ${bulletsList.map(function(b) { return `<li>${b}</li>`; }).join('')}
          </ul>
        </div>
      `
      : '';

    var flowObj = appData.flowDiagram || baseAppData.flowDiagram || null;
    var flowBlockHtml = flowObj
      ? `
        <div class="app-flow-card">
          <img src="${(baseAppData.flowDiagram && baseAppData.flowDiagram.image) || flowObj.image}" alt="${flowObj.caption || ''}" class="app-flow-img">
          ${flowObj.caption ? `<div class="app-flow-caption">${flowObj.caption}</div>` : ''}
        </div>
      `
      : '';

    var html = `
      <div class="application-view-stage">
        <div class="app-view-header${subModeHtml ? ' app-view-header-row' : ''}">
          <div>
            <h2 class="app-view-title">${appData.title || product.name}</h2>
            ${appData.subtitle ? `<div class="app-view-subtitle">${appData.subtitle}</div>` : ''}
          </div>
          ${subModeHtml}
        </div>

        <div class="app-content-container">
          ${productsBlockHtml}
          ${specsBlockHtml}
          ${bulletsBlockHtml}
          ${flowBlockHtml}
        </div>
      </div>
    `;

    $container.html(html);
  }

  // --- FALLBACK RENDERERS FOR OTHER MACHINES ---
  function renderFallbackCharacteristics($container, characteristics, specs) {
    var charsListHtml = (characteristics || []).map(function(item) {
      return `<li class="chars-item">✔ ${item}</li>`;
    }).join('');

    var specsHtml = (specs || []).map(function(s) {
      return `<tr><td>${s.label}</td><td>${s.value}</td></tr>`;
    }).join('');

    var html = `
      <div class="machine-stage" style="align-items: flex-start; padding-top: 80px;">
        <div style="grid-column: 1 / -1; max-width: 900px; margin: 0 auto; width: 100%;">
          <h3 class="machine-subhead">Merkmale & Technische Highlights</h3>
          <ul class="chars-list">${charsListHtml}</ul>
          <h3 class="machine-subhead" style="margin-top:20px;">Technische Daten</h3>
          <table class="specs-table">
            <tbody>${specsHtml}</tbody>
          </table>
        </div>
      </div>
    `;
    $container.html(html);
  }

  function renderFallbackVariants($container, variantsDetail, variantsText, t) {
    var itemsHtml = '';
    if (variantsDetail && variantsDetail.length) {
      itemsHtml = variantsDetail.map(function(v) {
        return `
          <div class="sub-item-card">
            <strong>${v.name}</strong>
            <p>${v.desc}</p>
          </div>
        `;
      }).join('');
    } else if (variantsText) {
      itemsHtml = `
        <div class="sub-item-card">
          <strong>${t.modularVariant}</strong>
          <p>${variantsText}</p>
        </div>
      `;
    }

    var html = `
      <div class="machine-stage" style="align-items: flex-start; padding-top: 80px;">
        <div style="grid-column: 1 / -1; max-width: 900px; margin: 0 auto; width: 100%;">
          <h3 class="machine-subhead">Ausführungs-Varianten im Detail</h3>
          <div class="sub-items-grid">${itemsHtml}</div>
        </div>
      </div>
    `;
    $container.html(html);
  }

  function renderFallbackOptions($container, options, t) {
    var itemsHtml = (options || []).map(function(opt) {
      return `
        <div class="sub-item-card">
          <strong>${t.additionalOption}</strong>
          <p>${opt}</p>
        </div>
      `;
    }).join('');

    var html = `
      <div class="machine-stage" style="align-items: flex-start; padding-top: 80px;">
        <div style="grid-column: 1 / -1; max-width: 900px; margin: 0 auto; width: 100%;">
          <h3 class="machine-subhead">Verfügbare Optionen & Zubehör</h3>
          <div class="sub-items-grid">${itemsHtml}</div>
        </div>
      </div>
    `;
    $container.html(html);
  }

  function renderFallbackApplications($container, applications) {
    var itemsHtml = (applications || []).map(function(app) {
      return `
        <div class="sub-item-card">
          <strong>${app.title}</strong>
          <p>${app.desc}</p>
        </div>
      `;
    }).join('');

    var html = `
      <div class="machine-stage" style="align-items: flex-start; padding-top: 80px;">
        <div style="grid-column: 1 / -1; max-width: 900px; margin: 0 auto; width: 100%;">
          <h3 class="machine-subhead">Einsatzgebiete & Applikationen</h3>
          <div class="sub-items-grid">${itemsHtml}</div>
        </div>
      </div>
    `;
    $container.html(html);
  }

  // --- SVG CONNECTOR LINES CALCULATION ---
  function drawDiagramLines(diagramId, svgId) {
    var $diagram = $('#' + diagramId);
    var $svg = $('#' + svgId);
    if (!$diagram.length || !$svg.length || !$diagram.is(':visible')) return;

    var $img = $diagram.find('.diagram-machine-img');
    if (!$img.length) return;

    var imgEl = $img[0];
    if (!imgEl.complete || imgEl.naturalWidth === 0) {
      $img.off('load.lines').one('load.lines', function() {
        drawDiagramLines(diagramId, svgId);
      });
      return;
    }

    var svgEl = $svg[0];
    var svgRect = svgEl.getBoundingClientRect();
    var imgRect = imgEl.getBoundingClientRect();
    if (!svgRect.width || !svgRect.height || !imgRect.width || !imgRect.height) return;

    var svgLinesHtml = '';

    function appendSideLines(selector, useRightEdge) {
      $diagram.find(selector).each(function() {
        var $card = $(this);
        var targetId = $card.attr('data-target');
        var $dot = $diagram.find(`.diagram-dot[data-target="${targetId}"]`);
        if (!$card.length || !$dot.length) return;

        var dotXPercent = parseFloat($dot.attr('data-dot-x'));
        var dotYPercent = parseFloat($dot.attr('data-dot-y'));
        var dotX = (imgRect.left - svgRect.left) + (dotXPercent / 100 * imgRect.width);
        var dotY = (imgRect.top - svgRect.top) + (dotYPercent / 100 * imgRect.height);

        $dot.css({
          left: dotX + 'px',
          top: dotY + 'px',
          display: 'flex'
        });

        var cardRect = $card[0].getBoundingClientRect();
        var cardX = (useRightEdge ? cardRect.right : cardRect.left) - svgRect.left;
        var cardY = cardRect.top + (cardRect.height / 2) - svgRect.top;
        var isActive = $card.hasClass('is-active') ? ' is-active' : '';
        var isDimmed = $card.hasClass('is-dimmed') ? ' is-dimmed' : '';

        svgLinesHtml += `<line class="diagram-line${isActive}${isDimmed}" data-target="${targetId}" x1="${cardX}" y1="${cardY}" x2="${dotX}" y2="${dotY}" />`;
      });
    }

    appendSideLines('.diagram-cards-left .diagram-card', true);
    appendSideLines('.diagram-cards-right .diagram-card', false);

    $svg.html(svgLinesHtml);
  }

  function updateActiveDiagramLines() {
    if (currentTab === '03') {
      drawDiagramLines('omega-usp-diagram', 'omega-usp-lines');
    } else if (currentTab === '04') {
      drawDiagramLines('omega-variants-diagram', 'omega-variants-lines');
    }
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
    // Show homepage lang btn only if no other inner page is active
    if (!$('#trikno-about-view').hasClass('active') && !$('#trikno-products-view').hasClass('active')) {
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
      var $modal = $('#trikno-video-modal');
      var $video = $('#trikno-modal-video');
      $modal.find('h3, #trikno-video-modal-title').text(videoTitle);
      if (videoSrc) {
        var $source = $video.find('source');
        if ($source.attr('src') !== videoSrc) {
          $source.attr('src', videoSrc);
          if ($video[0]) $video[0].load();
        }
      }
      $modal.css('display', 'flex').hide().fadeIn(250);
      if ($video.length && $video[0].play) {
        $video[0].currentTime = 0;
        $video[0].play().catch(function() {});
      }
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
    $modal.fadeOut(200);
    if ($video.length && $video[0].pause) {
      $video[0].pause();
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
