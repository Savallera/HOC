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
  }
});
