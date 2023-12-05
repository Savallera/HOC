window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
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
  }
});
