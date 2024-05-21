window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер карточек на странице студСМИ
    if (document.querySelector('#stud-smi-cards-slider')) {
      let studSmiCardsSlider = new Splide('#stud-smi-cards-slider', {
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
      studSmiCardsSlider.mount();
    }

    // Слайдер новостей на странице студСМИ
    if (document.querySelector('#stud-smi-news-slider')) {
      let studSmiNewsSlider = new Splide('#stud-smi-news-slider', {
        type: 'fade',
        rewind: true,
        autoplay: true,
        arrows: false,
      });
      studSmiNewsSlider.mount();
    }
  }
});
