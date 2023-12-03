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
        gap: '.9375em',
        padding: 'clamp(1.5em, 6.4vi, 4em)',
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
