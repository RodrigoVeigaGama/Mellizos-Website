import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { htmlVars } from './src/config/site.js';

// Substitui {{chave}} nos arquivos HTML pelos dados de src/config/site.js,
// para que contatos e dados da empresa fiquem num lugar só.
function siteVars() {
  return {
    name: 'site-vars',
    transformIndexHtml(html) {
      return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, key) => {
        if (!(key in htmlVars)) throw new Error(`Placeholder desconhecido no HTML: ${match}`);
        return htmlVars[key];
      });
    }
  };
}

const pages = ['index', 'perguntas-frequentes', 'politica-de-privacidade', 'termos-de-uso'];

export default defineConfig({
  plugins: [siteVars()],
  server: {
    port: 3000,
    strictPort: false
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((page) => [page, resolve(import.meta.dirname, `${page}.html`)]))
    }
  }
});
