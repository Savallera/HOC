window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Главный баннер на главной странице
    if (document.querySelector('#top-banner-slider')) {
      let topBannerSlider = new Splide('#top-banner-slider', {
        type: 'fade',
        rewind: true,
        autoplay: true,
        arrows: false,
      });
      topBannerSlider.mount();
    }

    // Слайдер новостей на главной странице
    if (document.querySelector('#news-slider')) {
      let newsSlider = new Splide('#news-slider', {
        type: 'slide',
        autoplay: false,
        arrows: false,
        pagination: false,
        gap: '.9375em',
        perPage: 1.1,
        padding: 'var(--section-padding)',
        mediaQuery: 'min',
        breakpoints: {
          1024: {
            destroy: 'completely',
          },
        },
      });
      newsSlider.mount();
    }

    // Слайдер с событиями на главной странице
    if (document.querySelector('#events-slider')) {
      let eventsSlider = new Splide('#events-slider', {
        type: 'fade',
        rewind: true,
        autoplay: true,
        arrows: false,
      });
      eventsSlider.mount();
    }

    // Слайдер тестов на главной странице
    if (document.querySelector('#tests-slider')) {
      let testsSlider = new Splide('#tests-slider', {
        type: 'slide',
        autoplay: false,
        arrows: false,
        pagination: false,
        gap: '.9375em',
        perPage: 1.2,
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

    // if (document.querySelector('#article-slider')) {
    //   let articleSlider = new Splide('#article-slider', {
    //     type: 'fade',
    //     rewind: true,
    //     autoplay: true,
    //     arrows: false,
    //   });
    //   articleSlider.mount();
    // }

    // if (document.querySelector('#lessons-slider')) {
    //   let lessonsSlider = new Splide('#lessons-slider', {
    //     type: 'fade',
    //     rewind: true,
    //     autoplay: true,
    //     arrows: false,
    //   });
    //   lessonsSlider.mount();
    // }

    // if (document.querySelector('#common-slider')) {
    //   let commonSlider = new Splide('#common-slider', {
    //     type: 'fade',
    //     rewind: true,
    //     autoplay: true,
    //     arrows: false,
    //   });
    //   commonSlider.mount();
    // }

    // if (document.querySelector('#festival-slider')) {
    //   let festivalSlider = new Splide('#festival-slider', {
    //     type: 'fade',
    //     rewind: true,
    //     autoplay: true,
    //     arrows: false,
    //   });
    //   festivalSlider.mount();
    // }
  }
});
