window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер с темами
    if (document.querySelector('#theme-slider')) {
      let themeSlider = new Splide('#theme-slider', {
        type: 'slide',
        autoplay: false,
        arrows: false,
        pagination: false,
        gap: '.9375em',
        perPage: 1.1,
        // padding: 'var(--section-padding)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            arrows: true,
            perPage: 3,
          },
        },
      });
      themeSlider.mount();
    }
  }
});
