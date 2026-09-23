import { readStorage, writeStorage } from './storage.js';

const storageKey = 'mellizos-theme';

export function initTheme() {
  const toggle = document.querySelector('.theme-toggle');

  const setTheme = (theme) => {
    const isLight = theme === 'light';
    document.body.dataset.theme = isLight ? 'light' : 'dark';
    toggle?.setAttribute('aria-pressed', String(isLight));
    toggle?.setAttribute('aria-label', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
    writeStorage(storageKey, document.body.dataset.theme);
  };

  setTheme(readStorage(storageKey) || 'dark');

  toggle?.addEventListener('click', () => {
    // Reinicia a animação de "pop" mesmo em cliques seguidos
    toggle.classList.remove('is-changing');
    void toggle.offsetWidth;
    toggle.classList.add('is-changing');
    setTheme(document.body.dataset.theme === 'light' ? 'dark' : 'light');
  });
}
