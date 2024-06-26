window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер тестов на главной странице
    if (document.querySelector('#tests-slider')) {
      let testsSlider = new Splide('#tests-slider', {
        type: 'slide',
        autoplay: false,
        arrows: false,
        pagination: false,
        gap: 'var(--gap-slider,clamp(0.5em, 1.5vi, 0.9375em))',
        autoWidth: true,
        padding: 'var(--section-padding, clamp(1.25rem, 1.1875rem + 0.3125vw, 1.5625rem))',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            destroy: 'completely',
          },
        },
      });
      testsSlider.mount();
    }

    // Фотографии в тестах
    if (document.querySelector('#tests-image-slider')) {
      let testsImageSlider = new Splide('#tests-image-slider', {
        type: 'slide',
        arrows: false,
        gap: 'var(--gap-slider,clamp(0.5em, 1.5vi, 0.9375em))',
        cover: true,
        heightRatio: 0.56,
        mediaQuery: 'min',
        breakpoints: {
          768: {
            heightRatio: 0.54,
          },
        },
      });
      testsImageSlider.mount();
    }
  }
});
