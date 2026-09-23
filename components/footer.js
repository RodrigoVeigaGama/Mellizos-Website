import { siteConfig } from './site-config.js';

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-inner reveal reveal-delay-1">
        <img class="footer-logo" src="public/images/MellizosLogo.png" alt="Mellizos Developer">
        <div class="footer-legal"><p>© 2026 ${siteConfig.name}</p><p>${siteConfig.responsible} — CPF ${siteConfig.cpf}</p><p><a href="mailto:${siteConfig.email}">${siteConfig.email}</a> · <a href="${siteConfig.whatsappUrl}" target="_blank" rel="noopener noreferrer">${siteConfig.whatsapp}</a></p></div>
        <div class="footer-mark"><i></i><span>SITES · PROJETOS</span><i></i></div>
        <nav class="footer-links" aria-label="Links legais"><a href="politica-de-privacidade.html">Política de Privacidade</a><a href="termos-de-uso.html">Termos de Uso</a></nav>
      </div>
    </footer>`;
}
