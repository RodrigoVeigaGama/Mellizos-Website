const whatsappUrl = 'https://wa.me/5521997059829?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Mellizos%20Developer%20e%20gostaria%20de%20um%20or%C3%A7amento.';

export function renderNavbar() {
  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="index.html#top" aria-label="Mellizos Developer, início">
          <span class="brand-wordmark" aria-label="Mellizos">M <b>E</b> L L <b>I</b> Z O S</span>
        </a>
        <nav class="main-nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
          <div class="nav-actions">
            <button class="theme-toggle" type="button" aria-label="Ativar tema claro" aria-pressed="false">
              <svg class="theme-icon theme-icon-sun" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              <svg class="theme-icon theme-icon-moon" aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 15.5A8.8 8.8 0 0 1 8.5 3.2 9.2 9.2 0 1 0 20.8 15.5Z"/></svg>
            </button>
            <a class="button button-small button-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 24l6.6-1.7a11.8 11.8 0 0 0 5.3 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.3-6.1-3.5-8.3Z"/></svg>
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </nav>
      </div>
    </header>`;
}
