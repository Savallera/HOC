window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Фотографии на странице детальной новости
    if (document.querySelector('#article-image-slider')) {
      let articleImageSlider = new Splide('#article-image-slider', {
        type: 'fade',
        rewind: true,
        autoplay: true,
        arrows: false,
      });
      articleImageSlider.mount();
    }

    // Фотографии в описании на странице детальной новости
    if (document.querySelector('#article-slider')) {
      let articleSlider = new Splide('#article-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'var(--gap-slider,clamp(0.5em, 1.5vi, 0.9375em))',
        autoWidth: true,
        cover: true,
        heightRatio: 0.55,
        padding:
          'var(--section-inline-start, clamp(1.25rem, 1.1875rem + 0.3125vw, 1.5625rem))',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            heightRatio: 0.275,
          },
        },
      });
      articleSlider.mount();
    }

    // Слайдер на детальной странице базы знаний
    if (document.querySelector('#knowledge-base-article-slider')) {
      let knowledgeBaseSlider = new Splide('#knowledge-base-article-slider', {
        type: 'slide',
        autoplay: false,
        arrows: false,
        pagination: false,
        gap: 'var(--gap-slider,clamp(0.5em, 1.5vi, 0.9375em))',
        autoWidth: true,
        padding:
          'var(--section-padding, clamp(1.25rem, 1.1875rem + 0.3125vw, 1.5625rem))',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            destroy: 'completely',
          },
        },
      });
      knowledgeBaseSlider.mount();
    }

    // Карточки авторов на странице Блог студСМИ
    if (document.querySelector('#authors-slider')) {
      let authorsSlider = new Splide('#authors-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'var(--gap-slider,clamp(0.5em, 1.5vi, 0.9375em))',
        autoWidth: true,
        padding:
          'var(--section-padding, clamp(1.25rem, 1.1875rem + 0.3125vw, 1.5625rem))',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            perPage: 4,
            autoWidth: false,
            pagination: true,
            padding: 0,
          },
        },
      });
      authorsSlider.mount();
    }

    // Слайдер на странице Журнал НОС
    if (document.querySelector('#journal-nos-slider')) {
      let journalNosSlider = new Splide('#journal-nos-slider', {
        type: 'slide',
        autoplay: false,
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: 'var(--gap-slider, clamp(0.5em, 1.5vi, 0.9375em))',
        padding:
          'var(--section-padding, clamp(1.25rem, 1.1875rem + 0.3125vw, 1.5625rem))',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            destroy: 'completely',
          },
        },
      });
      journalNosSlider.mount();
    }
  }
});
