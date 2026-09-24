import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { initCookieBanner } from '../components/cookie-banner.js';
import { initTheme } from './theme.js';

// Monta as partes comuns a todas as páginas: navbar, footer, tema e aviso de cookies.
export function mountLayout() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  document.querySelector('[data-component="navbar"]').innerHTML = renderNavbar();
  document.querySelector('[data-component="footer"]').innerHTML = renderFooter();

  initTheme();
  initCookieBanner();
}
