window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер с темами
    if (document.querySelector('#theme-slider')) {
      let themeSlider = new Splide('#theme-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'var(--gap-slider)',
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

    // Слайдер для ЛК
    if (document.querySelector('#theme-lk-slider')) {
      let themeLkSlider = new Splide('#theme-lk-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'var(--gap-slider)',
        autoWidth: true,
        padding: 'var(--section-inline-start)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            arrows: true,
          },
        },
      });
      themeLkSlider.mount();
    }

    // Слайдер для ЛК инвайтов
    if (document.querySelector('#theme-lk-invite-slider')) {
      let themeLkInviteSlider = new Splide('#theme-lk-invite-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'var(--gap-slider)',
        autoWidth: true,
        padding: 'var(--section-inline-start)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            arrows: true,
          },
        },
      });
      themeLkInviteSlider.mount();
    }

    // Слайдер для ЛК сертификатов
    if (document.querySelector('#theme-lk-certificate-slider')) {
      let themeLkCertificateSlider = new Splide(
        '#theme-lk-certificate-slider',
        {
          type: 'slide',
          arrows: false,
          pagination: false,
          perPage: 3,
          gap: 'var(--gap-slider)',
          padding: 'var(--section-inline-start)',
          mediaQuery: 'min',
          breakpoints: {
            768: {
              arrows: true,
            },
          },
        }
      );
      themeLkCertificateSlider.mount();
    }

    // Слайдер для резюме сертификатов
    if (document.querySelector('#resume-certificate-slider')) {
      let resumeCertificateSlider = new Splide('#resume-certificate-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: '.375em',
      });
      resumeCertificateSlider.mount();
    }

    // Слайдер для фото при создании публикаций
    if (document.querySelector('#add-article-image-slider')) {
      let addArticleImageSlider = new Splide('#add-article-image-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: 'var(--gap-slider)',
      });
      addArticleImageSlider.mount();
    }

    // Слайдер для фото при модерации публикаций
    if (document.querySelector('#moderation-article-image-slider')) {
      let addArticleImageSlider = new Splide('#moderation-article-image-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: 'var(--gap-slider)',
      });
      addArticleImageSlider.mount();
    }
  }
});
