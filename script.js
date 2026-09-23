import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderPrivacyModal } from './components/privacy-modal.js';
import { initCookieBanner } from './components/cookie-banner.js';

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

document.querySelector('[data-component="navbar"]').innerHTML = renderNavbar();
document.querySelector('[data-component="footer"]').innerHTML = renderFooter();
document.querySelector('[data-component="privacy-modal"]').innerHTML = renderPrivacyModal();
initCookieBanner();

const phone = '5521997059829';
const email = 'MellizosDeveloper@gmail.com';
const form = document.querySelector('#contact-form');
const statusMessage = document.querySelector('.form-status');
const themeToggle = document.querySelector('.theme-toggle');

function setTheme(theme) {
  const isLight = theme === 'light';
  document.body.dataset.theme = isLight ? 'light' : 'dark';
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
  localStorage.setItem('mellizos-theme', isLight ? 'light' : 'dark');
}

setTheme(localStorage.getItem('mellizos-theme') || 'dark');
themeToggle.addEventListener('click', () => {
  themeToggle.classList.remove('is-changing');
  void themeToggle.offsetWidth;
  themeToggle.classList.add('is-changing');
  setTheme(document.body.dataset.theme === 'light' ? 'dark' : 'light');
});

function getFormData() {
  const data = new FormData(form);
  return {
    nome: data.get('nome').trim(),
    email: data.get('email').trim(),
    mensagem: data.get('mensagem').trim()
  };
}

function validate(data) {
  if (!data.nome || !data.email || !data.mensagem) return 'Preencha todos os campos para continuar.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Confira o formato do seu e-mail.';
  return '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = getFormData();
  const error = validate(data);
  statusMessage.textContent = error;
  if (error) return;

  const body = `Nome: ${data.nome}\nE-mail: ${data.email}\n\nMensagem:\n${data.mensagem}`;
  const channel = event.submitter.dataset.channel;
  if (channel === 'whatsapp') {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(`Olá! Vim pelo site da Mellizos Developer.\n\n${body}`)}`, '_blank', 'noopener');
  } else {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Contato pelo site')}&body=${encodeURIComponent(body)}`;
  }
  statusMessage.style.color = 'var(--blue)';
  statusMessage.textContent = 'Mensagem preparada. Obrigado pelo contato!';
});

const privacyModal = document.querySelector('#privacy-modal');
const openPrivacy = document.querySelector('[data-open-privacy]');
if (privacyModal && openPrivacy) {
  openPrivacy.addEventListener('click', () => privacyModal.showModal());
  document.querySelector('[data-close-privacy]').addEventListener('click', () => privacyModal.close());
  privacyModal.addEventListener('click', (event) => {
    if (event.target === privacyModal) privacyModal.close();
  });
}

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

const portfolioTrack = document.querySelector('.portfolio-track');
const portfolioSlides = document.querySelectorAll('.portfolio-slide');
const carouselDots = document.querySelectorAll('.carousel-dot');
let currentSlide = 0;

function showSlide(index) {
  if (!portfolioTrack || portfolioSlides.length < 2) return;
  currentSlide = (index + portfolioSlides.length) % portfolioSlides.length;
  portfolioTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  carouselDots.forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === currentSlide));
}

document.querySelector('[data-carousel-prev]')?.addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('[data-carousel-next]')?.addEventListener('click', () => showSlide(currentSlide + 1));
carouselDots.forEach((dot) => dot.addEventListener('click', () => showSlide(Number(dot.dataset.carouselDot))));
