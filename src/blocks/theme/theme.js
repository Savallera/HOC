window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер с темами
    if (document.querySelector('#theme-slider')) {
      let themeSlider = new Splide('#theme-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'clamp(.9375em, 2vw, 1.25em)',
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
        gap: 'clamp(.9375em, 2vw, 1.25em)',
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
        gap: 'clamp(.9375em, 2vw, 1.25em)',
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
          gap: 'clamp(.625em, 2vw, 1.25em)',
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
        mediaQuery: 'min',
        breakpoints: {
          768: {},
        },
      });
      resumeCertificateSlider.mount();
    }
  }
});
