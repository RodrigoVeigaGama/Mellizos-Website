// Carrossel do portfólio: botões anterior/próximo e bolinhas de navegação.
export function initCarousel(root = document.querySelector('.portfolio')) {
  if (!root) return;

  const track = root.querySelector('.portfolio-track');
  const slides = root.querySelectorAll('.portfolio-slide');
  const dots = root.querySelectorAll('.carousel-dot');
  if (!track || slides.length < 2) return;

  let current = 0;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === current));
  };

  root.querySelector('[data-carousel-prev]')?.addEventListener('click', () => show(current - 1));
  root.querySelector('[data-carousel-next]')?.addEventListener('click', () => show(current + 1));
  dots.forEach((dot) => dot.addEventListener('click', () => show(Number(dot.dataset.carouselDot))));
}
