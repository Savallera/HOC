window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер тестов на главной странице
    if (document.querySelector('#tests-slider')) {
      let testsSlider = new Splide('#tests-slider', {
        type: 'slide',
        autoplay: false,
        arrows: false,
        pagination: false,
        gap: '.9375em',
        autoWidth: true,
        padding: 'var(--section-padding)',
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
        gap: 'clamp(.9375em, 2vw, 1.25em)',
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
