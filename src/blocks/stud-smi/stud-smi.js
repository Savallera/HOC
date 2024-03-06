window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер карточек на странице студСМИ
    if (document.querySelector('#stud-smi-cards-slider')) {
      let studSmiCardsSlider = new Splide('#stud-smi-cards-slider', {
        type: 'slide',
        autoplay: false,
        arrows: false,
        pagination: false,
        gap: 'var(--gap-slider)',
        autoWidth: true,
        padding: 'var(--section-padding)',
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
