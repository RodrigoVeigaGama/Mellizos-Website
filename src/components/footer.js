import { site, whatsappUrl } from '../config/site.js';

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-inner reveal reveal-delay-1">
        <img class="footer-logo" src="/images/MellizosLogo.webp" alt="Mellizos Developer">
        <div class="footer-legal"><p>© ${new Date().getFullYear()} ${site.name}</p><p>${site.responsible} — CPF ${site.cpf}</p><p><a href="mailto:${site.email}">${site.email}</a> · <a href="${whatsappUrl()}" target="_blank" rel="noopener noreferrer">${site.whatsappDisplay}</a></p></div>
        <div class="footer-mark"><i></i><span>SITES · SISTEMAS · SOFTWARES</span><i></i></div>
        <nav class="footer-links" aria-label="Links úteis"><a href="perguntas-frequentes.html">Perguntas Frequentes</a><a href="politica-de-privacidade.html">Política de Privacidade</a><a href="termos-de-uso.html">Termos de Uso</a></nav>
      </div>
    </footer>`;
}
