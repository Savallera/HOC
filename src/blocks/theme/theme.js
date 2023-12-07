window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер с темами
    if (document.querySelector('#theme-slider')) {
      let themeSlider = new Splide('#theme-slider', {
        type: 'slide',
        // autoplay: true,
        arrows: false,
        pagination: false,
        gap: '.9375em',
        perPage: 1.1,
        perMove: 1,
        padding: 'var(--section-padding)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            arrows: true,
            perPage: 1.5,
            gap: '1.25em',
            padding: 'clamp(1.25rem, -3.1875rem + 22.1875vw, 23.4375rem)',
          },
          1024: {
            arrows: true,
            perPage: 2.5,
            gap: '1.25em',
            padding: 'clamp(1.25rem, -3.1875rem + 22.1875vw, 23.4375rem)',
          },
        },
      });
      themeSlider.mount();
    }
  }
});
