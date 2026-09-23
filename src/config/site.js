// Fonte única dos dados da empresa. Usada pelos módulos JS e, via plugin do
// Vite (vite.config.js), pelos placeholders {{chave}} dentro dos arquivos HTML.
export const site = {
  name: 'Mellizos Developer',
  responsible: 'Reginaldo Gama Junior',
  cnpj: '62.529.924/0001-37',
  address: 'Rua Maria Ilda Pinto dos Santos, nº 1, lote 5/6',
  email: 'MellizosDeveloper@gmail.com',
  whatsappNumber: '5521997059829',
  whatsappDisplay: '(21) 99705-9829',
  lastUpdated: '23/09/2026'
};

export function whatsappUrl(message) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const quoteMessage = `Olá! Vim pelo site da ${site.name} e gostaria de um orçamento.`;

// Valores disponíveis como {{chave}} no HTML
export const htmlVars = {
  name: site.name,
  responsible: site.responsible,
  cnpj: site.cnpj,
  address: site.address,
  email: site.email,
  whatsapp: site.whatsappDisplay,
  whatsappUrl: whatsappUrl(),
  whatsappQuoteUrl: whatsappUrl(quoteMessage),
  lastUpdated: site.lastUpdated
};
