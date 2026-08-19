// ===== CEcult+ · main.js =====
// Header scroll behaviour, mobile drawer, search overlay, scroll-reveal, footer year.

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initSearchOverlay();
  initScrollReveal();
  initFooterYear();
  initRandomMunicipioButton();
});

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMobileDrawer() {
  const toggle = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const close = document.querySelector('.drawer-close');
  if (!toggle || !drawer) return;

  const open = () => {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  };
  const shut = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', open);
  close && close.addEventListener('click', shut);
  backdrop && backdrop.addEventListener('click', shut);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', shut));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') shut(); });
}

function initSearchOverlay() {
  const toggles = document.querySelectorAll('.search-toggle');
  const overlay = document.querySelector('.search-overlay');
  const input = document.querySelector('#global-search-input');
  const closeBtn = document.querySelector('.search-close');
  if (!overlay) return;

  const open = () => {
    overlay.classList.add('open');
    setTimeout(() => input && input.focus(), 100);
  };
  const shut = () => overlay.classList.remove('open');

  toggles.forEach(t => t.addEventListener('click', open));
  closeBtn && closeBtn.addEventListener('click', shut);
  overlay.addEventListener('click', e => { if (e.target === overlay) shut(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') shut();
    if ((e.key === '/' || (e.ctrlKey && e.key.toLowerCase() === 'k')) && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      open();
    }
  });
}

function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

function initFooterYear() {
  const el = document.querySelector('#footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

function initRandomMunicipioButton() {
  const btn = document.querySelector('#surpreenda-me');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const list = (window.CECULT_DATA && window.CECULT_DATA.municipios) || [];
    if (!list.length) return;
    const pick = list[Math.floor(Math.random() * list.length)];
    window.location.href = `mapa.html?municipio=${pick.id}`;
  });
}

// Utility used across pages
function fonteLabel(fonte) {
  const map = {
    oficial: 'Fonte oficial',
    academica: 'Fonte acadêmica',
    bibliografica: 'Fonte bibliográfica',
    acervo: 'Fonte de acervo',
    comunitaria: 'Contribuição comunitária',
    exemplo: 'Dado de exemplo'
  };
  return map[fonte] || 'Fonte não identificada';
}
