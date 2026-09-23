import { renderNavbar } from './navbar.js';
import { renderFooter } from './footer.js';
import { siteConfig } from './site-config.js';
import { initCookieBanner } from './cookie-banner.js';

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

document.querySelector('[data-component="navbar"]').innerHTML = renderNavbar();
document.querySelector('[data-component="footer"]').innerHTML = renderFooter();
document.body.insertAdjacentHTML('beforeend', '<a class="back-home-button" href="index.html#top">← Voltar para a página principal</a>');
document.querySelectorAll('[data-config]').forEach((element) => {
  element.textContent = siteConfig[element.dataset.config] || '';
});
document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
initCookieBanner();

document.body.dataset.theme = localStorage.getItem('mellizos-theme') || 'dark';
const themeToggle = document.querySelector('.theme-toggle');
const setTheme = (theme) => {
  const isLight = theme === 'light';
  document.body.dataset.theme = isLight ? 'light' : 'dark';
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
  localStorage.setItem('mellizos-theme', isLight ? 'light' : 'dark');
};
setTheme(document.body.dataset.theme);
themeToggle.addEventListener('click', () => setTheme(document.body.dataset.theme === 'light' ? 'dark' : 'light'));
