window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер с темами
    if (document.querySelector('#theme-slider')) {
      let themeSlider = new Splide('#theme-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'clamp(.9375em, 2vw, 1.25em)',
        autoWidth: true,
        padding: 'var(--section-inline-start)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            arrows: true,
          },
        },
      });
      themeSlider.mount();
    }
  }
});
