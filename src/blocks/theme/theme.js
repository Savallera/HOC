window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер с темами
    if (document.querySelector('#theme-slider')) {
      let themeSlider = new Splide('#theme-slider', {
        type: 'slide',
        // autoplay: true,
        arrows: false,
        pagination: false,
        gap: 'clamp(.9375em, 2vw, 1.25em)',
        perPage: 1.1,
        perMove: 1,
        padding: 'var(--section-inline-start)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            arrows: true,
            perPage: 1.5,
          },
          1024: {
            arrows: true,
            perPage: 2.5,
          },
        },
      });
      themeSlider.mount();
    }
  }
});
