import { site, whatsappUrl } from '../config/site.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readForm(form) {
  const data = new FormData(form);
  return {
    nome: data.get('nome').trim(),
    email: data.get('email').trim(),
    mensagem: data.get('mensagem').trim()
  };
}

function validate({ nome, email, mensagem }) {
  if (!nome || !email || !mensagem) return 'Preencha todos os campos para continuar.';
  if (!emailPattern.test(email)) return 'Confira o formato do seu e-mail.';
  return '';
}

function send(channel, { nome, email, mensagem }) {
  const body = `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`;
  if (channel === 'whatsapp') {
    window.open(whatsappUrl(`Olá! Vim pelo site da ${site.name}.\n\n${body}`), '_blank', 'noopener');
  } else {
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Contato pelo site')}&body=${encodeURIComponent(body)}`;
  }
}

// Formulário de contato: valida e abre o e-mail ou o WhatsApp já preenchidos.
export function initContactForm(form = document.querySelector('#contact-form')) {
  if (!form) return;
  const status = form.querySelector('.form-status');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = readForm(form);
    const error = validate(data);

    status.classList.toggle('is-success', !error);
    status.textContent = error;
    if (error) return;

    send(event.submitter?.dataset.channel, data);
    status.textContent = 'Mensagem preparada. Obrigado pelo contato!';
  });
}
