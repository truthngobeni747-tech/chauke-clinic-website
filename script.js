const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
  });
});

// Smoothly reveal a small confirmation when a visitor chooses a directions link.
// The destination opens in a new tab; this is only a lightweight UI enhancement.
document.querySelectorAll('a[href*="maps.app.goo.gl"]').forEach((link) => {
  link.addEventListener('click', () => {
    const toast = document.querySelector('.toast');
    if (!toast) return;
    toast.textContent = 'Opening directions in Google Maps…';
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2200);
  });
});
