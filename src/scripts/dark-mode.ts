function getTheme(): 'light' | 'dark' {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function applyTheme(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const toggle = document.getElementById('dark-mode-toggle');
  if (toggle) {
    const isDark = theme === 'dark';
    const lightLabel = toggle.dataset.lightLabel ?? 'Ativar modo claro';
    const darkLabel = toggle.dataset.darkLabel ?? 'Ativar modo escuro';
    toggle.setAttribute('aria-label', isDark ? lightLabel : darkLabel);
    toggle.setAttribute('aria-pressed', String(isDark));
  }
}

function initDarkMode() {
  applyTheme(getTheme());

  const toggle = document.getElementById('dark-mode-toggle');
  toggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

let savedScrollY = 0;
let isMobileNavOpen = false;

function lockBodyScroll() {
  savedScrollY = window.scrollY;
  document.body.classList.add('nav-open');
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.documentElement.style.overflow = 'hidden';
}

function unlockBodyScroll() {
  document.body.classList.remove('nav-open');
  document.body.style.top = '';
  document.body.style.position = '';
  document.body.style.width = '';
  document.documentElement.style.overflow = '';
  window.scrollTo(0, savedScrollY);
}

function setMobileNavOpen(isOpen: boolean) {
  if (isOpen === isMobileNavOpen) return;

  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  const backdrop = document.getElementById('nav-backdrop');

  isMobileNavOpen = isOpen;
  nav?.classList.toggle('is-open', isOpen);
  toggle?.setAttribute('aria-expanded', String(isOpen));
  const openLabel = nav?.dataset.openLabel ?? 'Abrir menu de navegação';
  const closeLabel = nav?.dataset.closeLabel ?? 'Fechar menu de navegação';
  toggle?.setAttribute('aria-label', isOpen ? closeLabel : openLabel);

  if (backdrop) {
    backdrop.hidden = !isOpen;
    backdrop.setAttribute('aria-hidden', String(!isOpen));
  }

  if (isOpen) {
    lockBodyScroll();
  } else {
    unlockBodyScroll();
  }
}

function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  const backdrop = document.getElementById('nav-backdrop');

  toggle?.addEventListener('click', () => {
    const isOpen = !nav?.classList.contains('is-open');
    setMobileNavOpen(isOpen);
  });

  backdrop?.addEventListener('click', () => {
    setMobileNavOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
      setMobileNavOpen(false);
    }
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMobileNavOpen(false);
    });
  });

  window.matchMedia('(min-width: 769px)').addEventListener('change', (event) => {
    if (event.matches) {
      setMobileNavOpen(false);
    }
  });
}

initDarkMode();
initMobileNav();
