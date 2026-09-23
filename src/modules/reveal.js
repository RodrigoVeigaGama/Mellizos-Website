// Mostra os elementos .reveal com animação quando entram na tela.
export function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
}

// Mostra tudo de uma vez, sem animação (usado nas páginas de texto).
export function revealAll() {
  document.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'));
}
