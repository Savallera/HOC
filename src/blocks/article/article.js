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
        gap: 'var(--gap-slider)',
        autoWidth: true,
        cover: true,
        heightRatio: 0.55,
        padding: 'var(--section-inline-start)',
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
      knowledgeBaseSlider.mount();
    }

    // Карточки авторов на странице Блог студСМИ
    if (document.querySelector('#authors-slider')) {
      let authorsSlider = new Splide('#authors-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'var(--gap-slider)',
        autoWidth: true,
        padding: 'var(--section-padding)',
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
  }
});
