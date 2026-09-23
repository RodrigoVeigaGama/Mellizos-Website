const storageKey = 'mellizos-cookie-consent';

function getConsent() {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function saveConsent(value) {
  try {
    localStorage.setItem(storageKey, value);
  } catch {}
}

export function initCookieBanner() {
  if (getConsent()) return;

  document.body.insertAdjacentHTML('beforeend', `
    <div class="cookie-banner" role="region" aria-label="Aviso de cookies">
      <div class="cookie-text">
        <strong>Sua privacidade importa</strong>
        <p>Usamos apenas recursos essenciais para o site funcionar e lembrar suas preferências, como o tema claro ou escuro. Não usamos cookies de rastreamento ou publicidade. Saiba mais na nossa <a href="politica-de-privacidade.html#cookies">Política de Privacidade</a>.</p>
      </div>
      <div class="cookie-actions">
        <button class="button button-small cookie-decline" type="button" data-cookie="recusado">Recusar</button>
        <button class="button button-small cookie-accept" type="button" data-cookie="aceito">Aceitar</button>
      </div>
    </div>`);

  const banner = document.querySelector('.cookie-banner');
  requestAnimationFrame(() => banner.classList.add('is-visible'));
  banner.querySelectorAll('[data-cookie]').forEach((button) => {
    button.addEventListener('click', () => {
      saveConsent(button.dataset.cookie);
      banner.classList.remove('is-visible');
      setTimeout(() => banner.remove(), 400);
    });
  });
}
