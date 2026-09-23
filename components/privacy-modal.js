export function renderPrivacyModal() {
  return `
    <dialog class="privacy-modal" id="privacy-modal">
      <div class="modal-inner">
        <button class="modal-close" type="button" data-close-privacy aria-label="Fechar">×</button>
        <span class="eyebrow"><span>PRIVACIDADE</span></span>
        <h2>Política de Privacidade</h2>
        <p>Este site usa apenas os dados enviados voluntariamente no formulário para responder ao seu contato. Não vendemos nem compartilhamos suas informações.</p>
      </div>
    </dialog>`;
}
