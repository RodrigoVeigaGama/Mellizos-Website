# Mellizos Developer

Site institucional da Mellizos Developer, feito com JavaScript puro, módulos ES e Vite.

## Desenvolvimento

```bash
npm install
npm run dev      # abre em http://localhost:3000
npm run build    # gera a versão de produção em dist/
npm run preview  # testa a versão de produção localmente
```

## Estrutura

```
index.html                      Página principal
perguntas-frequentes.html       Páginas de texto (usam src/pages/legal.js)
politica-de-privacidade.html
termos-de-uso.html

public/                         Arquivos servidos na raiz, sem processamento
  favicon.png                   → /favicon.png
  images/                       → /images/...
  videos/                       → /videos/...

src/
  config/site.js                Dados da empresa (nome, e-mail, WhatsApp, CPF...) — fonte única
  components/                   HTML reaproveitado: navbar, footer, aviso de cookies, botão voltar
  modules/                      Comportamentos: tema, formulário, carrossel, animações, layout
  pages/                        Ponto de entrada de cada tipo de página
    home.js                     index.html
    legal.js                    páginas de texto
  styles/
    main.css                    Importa todos os outros na ordem certa
    base/                       Variáveis de cor/fonte, estilos globais e animações
    components/                 Botões, header, footer, cookies...
    sections/                   Uma folha por seção da página principal
    pages/                      Páginas de texto e perguntas frequentes
```

## Como alterar

- **Contato, nome ou CPF:** edite só `src/config/site.js`. Nos arquivos HTML esses dados
  aparecem como `{{email}}`, `{{whatsapp}}`, `{{whatsappUrl}}` etc. e são preenchidos pelo
  Vite (plugin em `vite.config.js`). Um placeholder com nome errado gera erro no build.
- **Cores e fontes:** `src/styles/base/tokens.css` (tema escuro em `:root`, claro em `[data-theme='light']`).
- **Arquivos em `public/`:** referencie sempre pela raiz, como `/images/foto.webp`, nunca `public/images/...`.
- **Imagens novas:** prefira `.webp`.
