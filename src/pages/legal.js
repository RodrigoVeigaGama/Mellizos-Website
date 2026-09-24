// Páginas de texto: Perguntas Frequentes, Política de Privacidade e Termos de Uso.
import { mountLayout } from '../modules/layout.js';
import { revealAll } from '../modules/reveal.js';
import { renderBackHomeButton } from '../components/back-home-button.js';

document.body.insertAdjacentHTML('beforeend', renderBackHomeButton());
mountLayout();
revealAll();
