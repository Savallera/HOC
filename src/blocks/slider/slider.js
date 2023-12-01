window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    if (document.querySelector('#top-banner-slider')) {
      let topBannerSlider = new Splide('#top-banner-slider', {
        type: 'fade',
        rewind: true,
        autoplay: true,
        arrows: false,
        // pagination: false,
        // padding: 15,
        // perPage: 1,
        // perMove: 1,
        // gap: '1.25em',
      });
      topBannerSlider.mount();
    }
  }
});
