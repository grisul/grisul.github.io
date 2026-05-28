// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observerNav.observe(s));

// Fade-in animation on scroll
const fadeEls = document.querySelectorAll(
  '.section-label, .section-title, .sobre-text p, .sobre-card, .sobre-stats, .linha-card, .membro-card, .membro-tag, .membros-cat, .pub-placeholder, .contato-item, .contato-mapa-wrap'
);
fadeEls.forEach(el => el.classList.add('fade-in'));
const observerFade = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80);
      observerFade.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observerFade.observe(el));

// Staggered fade for grids
document.querySelectorAll('.linhas-grid, .membros-grid').forEach(grid => {
  grid.querySelectorAll('.linha-card, .membro-card, .membro-tag').forEach((child, i) => {
    child.style.transitionDelay = `${i * 60}ms`;
  });
});

// ---- CARROSSEL DE NOTÍCIAS ----
const carrossel = document.getElementById('noticiasCarrossel');
const btnPrev = document.getElementById('noticiaPrev');
const btnNext = document.getElementById('noticiaNext');

if (carrossel && btnPrev && btnNext) {
  const cards = carrossel.querySelectorAll('.noticia-card');
  const total = cards.length;
  const visible = 3;
  let current = 0;

  function getCardWidth() {
    const wrap = carrossel.parentElement;
    const gap = 24;
    return (wrap.offsetWidth - gap * (visible - 1)) / visible + gap;
  }

  function update() {
    carrossel.style.transform = `translateX(-${current * getCardWidth()}px)`;
    btnPrev.disabled = current === 0;
    btnNext.disabled = current >= total - visible;
  }

  btnPrev.addEventListener('click', () => { if (current > 0) { current--; update(); } });
  btnNext.addEventListener('click', () => { if (current < total - visible) { current++; update(); } });

  window.addEventListener('resize', update);
  update();
}
