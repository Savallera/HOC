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
        gap: 'clamp(.9375em, 2vw, 1.25em)',
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
  }
});
