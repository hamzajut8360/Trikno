/**
 * TRIKNO GIESSMASCHINEN
 * Portfolio Website Script
 * Replicates the InDesign In5 interactive slide-based navigation
 */

// ============================================================
// STATE
// ============================================================
let currentPage = 0;
const totalPages = 6;
let isTransitioning = false;
let menuOpen = false;

// ============================================================
// DOM ELEMENTS
// ============================================================
const pages       = document.querySelectorAll('.page');
const dots        = document.querySelectorAll('.dot');
const navItems    = document.querySelectorAll('.nav-item');
const loader      = document.getElementById('loadIndicator');
const hamburger   = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose   = document.getElementById('menuClose');
const videoModal  = document.getElementById('videoModal');
const modalVideo  = document.getElementById('modalVideo');
const videoModalClose = document.getElementById('videoModalClose');

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Hide loader after assets ready
  window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, 2500); // Fallback

  // Start on page 0
  goToPage(0);

  // Bind all navigation
  bindNavigationButtons();
  bindDots();
  bindNavItems();
  bindKeyboard();
  bindWheelNavigation();
  bindTouchNavigation();
  bindHamburger();
  bindVideoModal();
  bindHotspots();
  addPageCounter();
  updateNavStyle();
});

function hideLoader() {
  if (loader && !loader.classList.contains('hidden')) {
    loader.classList.add('hidden');
  }
}

// ============================================================
// PAGE NAVIGATION
// ============================================================
function goToPage(index) {
  if (index < 0 || index >= totalPages) return;
  if (isTransitioning) return;

  currentPage = index;
  isTransitioning = true;

  // Update pages
  pages.forEach(page => page.classList.remove('active'));

  const targetPage = pages[index];
  if (targetPage) targetPage.classList.add('active');

  // Reset & re-trigger animations on new page
  setTimeout(() => triggerPageAnimations(targetPage), 50);

  // Update dots
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));

  // Update nav items
  navItems.forEach((item, i) => item.classList.toggle('active', i === index));

  // Close video modal when changing pages
  if (videoModal?.classList.contains('open')) closeVideoModal();

  // Hero video autoplay
  const heroVideo = document.getElementById('heroVideo');
  if (index === 0 && heroVideo) {
    heroVideo.play().catch(() => {});
  } else if (heroVideo) {
    heroVideo.pause();
  }

  // Update nav style
  updateNavStyle();

  // Update page counter
  const counter = document.getElementById('page-counter');
  if (counter) {
    counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}`;
  }

  setTimeout(() => { isTransitioning = false; }, 700);
}

function triggerPageAnimations(page) {
  if (!page) return;
  const animEls = page.querySelectorAll('.animate-up, .animate-from-right, .animate-from-bottom');
  animEls.forEach(el => {
    el.style.animation = 'none';
    el.offsetHeight; // force reflow
    el.style.animation = '';
  });

  // Re-trigger feature items
  const featureItems = page.querySelectorAll('.feature-item');
  featureItems.forEach((item, i) => {
    item.style.animation = 'none';
    item.offsetHeight;
    item.style.animation = `fadeInUp 0.5s ease ${(i + 1) * 0.1}s forwards`;
  });
}

// ============================================================
// BIND NAVIGATION BUTTONS (data-page attribute)
// ============================================================
function bindNavigationButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-page]');
    if (!btn) return;

    const pageIndex = parseInt(btn.getAttribute('data-page'), 10);
    if (isNaN(pageIndex)) return;

    // Close mobile menu if open
    if (btn.hasAttribute('data-close') || btn.classList.contains('menu-link')) {
      closeMobileMenu();
    }

    goToPage(pageIndex);
  });
}

// ============================================================
// DOTS
// ============================================================
function bindDots() {
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => goToPage(i));
  });
}

// ============================================================
// NAV ITEMS
// ============================================================
function bindNavItems() {
  navItems.forEach((item, i) => {
    item.addEventListener('click', () => goToPage(i));
  });
}

// ============================================================
// KEYBOARD NAVIGATION
// ============================================================
function bindKeyboard() {
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        if (currentPage < totalPages - 1) goToPage(currentPage + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        if (currentPage > 0) goToPage(currentPage - 1);
        break;
      case 'Escape':
        closeMobileMenu();
        closeVideoModal();
        break;
    }
  });
}

// ============================================================
// MOUSE WHEEL NAVIGATION
// ============================================================
function bindWheelNavigation() {
  let wheelTimeout = null;
  let wheelDelta = 0;
  const THRESHOLD = 80;

  document.addEventListener('wheel', (e) => {
    // Allow scroll inside scrollable containers
    const scrollable = e.target.closest('.page-inner, .features-list, .variants-grid, .options-grid, .applications-grid');
    if (scrollable) {
      const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = scrollable;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 5;
      const atTop = scrollTop <= 5;
      const atRight = scrollLeft + clientWidth >= scrollWidth - 5;
      const atLeft = scrollLeft <= 5;

      if (e.deltaY > 0 && !atBottom) return;
      if (e.deltaY < 0 && !atTop) return;
      if (e.deltaX > 0 && !atRight) return;
      if (e.deltaX < 0 && !atLeft) return;
    }

    e.preventDefault();
    wheelDelta += e.deltaY;

    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => { wheelDelta = 0; }, 300);

    if (Math.abs(wheelDelta) >= THRESHOLD) {
      if (wheelDelta > 0 && currentPage < totalPages - 1) {
        goToPage(currentPage + 1);
      } else if (wheelDelta < 0 && currentPage > 0) {
        goToPage(currentPage - 1);
      }
      wheelDelta = 0;
    }
  }, { passive: false });
}

// ============================================================
// TOUCH SWIPE NAVIGATION
// ============================================================
function bindTouchNavigation() {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    const dt = Date.now() - touchStartTime;

    const minSwipe = 60;
    const maxTime = 400;

    if (dt > maxTime) return;

    // Check if inside scrollable
    const target = e.target.closest('.page-inner, .features-list, .variants-grid, .options-grid');
    if (target) return;

    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal swipe
      if (Math.abs(dx) > minSwipe) {
        if (dx < 0 && currentPage < totalPages - 1) goToPage(currentPage + 1);
        else if (dx > 0 && currentPage > 0) goToPage(currentPage - 1);
      }
    } else {
      // Vertical swipe
      if (Math.abs(dy) > minSwipe) {
        if (dy < 0 && currentPage < totalPages - 1) goToPage(currentPage + 1);
        else if (dy > 0 && currentPage > 0) goToPage(currentPage - 1);
      }
    }
  }, { passive: true });
}

// ============================================================
// HAMBURGER / MOBILE MENU
// ============================================================
function bindHamburger() {
  hamburger?.addEventListener('click', toggleMobileMenu);
  menuClose?.addEventListener('click', closeMobileMenu);

  // Close on overlay backdrop click
  menuOverlay?.addEventListener('click', (e) => {
    if (e.target === menuOverlay) closeMobileMenu();
  });
}

function toggleMobileMenu() {
  menuOpen ? closeMobileMenu() : openMobileMenu();
}

function openMobileMenu() {
  menuOpen = true;
  menuOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Animate hamburger to X
  const spans = hamburger?.querySelectorAll('span');
  if (spans) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  }
}

function closeMobileMenu() {
  menuOpen = false;
  menuOverlay?.classList.remove('open');
  document.body.style.overflow = '';
  // Reset hamburger
  const spans = hamburger?.querySelectorAll('span');
  if (spans) {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
}

// ============================================================
// VIDEO MODAL
// ============================================================
function bindVideoModal() {
  const videoPlayBtn = document.getElementById('videoPlayBtn');

  videoPlayBtn?.addEventListener('click', openVideoModal);
  videoModalClose?.addEventListener('click', closeVideoModal);

  videoModal?.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideoModal();
  });
}

function openVideoModal() {
  videoModal?.classList.add('open');
  modalVideo?.play().catch(() => {});
}

function closeVideoModal() {
  videoModal?.classList.remove('open');
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }
}

// ============================================================
// HOTSPOTS
// ============================================================
function bindHotspots() {
  const hotspots = document.querySelectorAll('.hotspot');
  hotspots.forEach(hotspot => {
    hotspot.addEventListener('mouseenter', () => {
      hotspot.classList.add('active');
    });
    hotspot.addEventListener('mouseleave', () => {
      hotspot.classList.remove('active');
    });
    hotspot.addEventListener('click', () => {
      const tip = hotspot.getAttribute('data-tip');
      if (tip) {
        showTooltip(hotspot, tip);
      }
    });
  });
}

function showTooltip(el, text) {
  // Remove existing tooltips
  document.querySelectorAll('.tooltip-popup').forEach(t => t.remove());

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip-popup';
  tooltip.textContent = text;
  tooltip.style.cssText = `
    position: absolute;
    background: rgba(80,52,19,0.97);
    color: #ede9d4;
    font-size: 12px;
    padding: 8px 14px;
    border-left: 2px solid #c37224;
    white-space: nowrap;
    z-index: 100;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 0.05em;
    pointer-events: none;
    animation: fadeInUp 0.2s ease forwards;
  `;

  const rect = el.getBoundingClientRect();
  const parentRect = el.parentElement.getBoundingClientRect();

  tooltip.style.left = (rect.right - parentRect.left + 12) + 'px';
  tooltip.style.top = (rect.top - parentRect.top - 4) + 'px';

  el.parentElement.style.position = 'relative';
  el.parentElement.appendChild(tooltip);

  setTimeout(() => tooltip.remove(), 3000);
}

// ============================================================
// NAV SCROLL TRANSPARENCY
// ============================================================
function updateNavStyle() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  if (currentPage === 0) {
    nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)';
  } else {
    nav.style.background = 'rgba(80,52,19,0.92)';
  }
}

// ============================================================
// PAGE COUNTER
// ============================================================
function addPageCounter() {
  const counter = document.createElement('div');
  counter.id = 'page-counter';
  counter.style.cssText = [
    'position:fixed',
    'bottom:28px',
    'left:50%',
    'transform:translateX(-50%)',
    'font-size:11px',
    'letter-spacing:0.2em',
    'color:rgba(237,233,212,0.3)',
    'font-family:Outfit,sans-serif',
    'z-index:200',
    'pointer-events:none'
  ].join(';');
  counter.textContent = `01 / ${String(totalPages).padStart(2,'0')}`;
  document.body.appendChild(counter);
}

// ============================================================
// VIDEO FALLBACK
// ============================================================
const heroPage = document.getElementById('page-0');
const heroVideo = document.getElementById('heroVideo');
heroVideo?.addEventListener('error', () => {
  if (heroPage) heroPage.style.background = 'linear-gradient(135deg, #1a0a00 0%, #503413 40%, #2a1500 100%)';
});

// Preload machine image silently
const _preload = new Image();
_preload.src = 'https://www.level-east.ch/transfer/trikno/assets/images/item_891.png';
