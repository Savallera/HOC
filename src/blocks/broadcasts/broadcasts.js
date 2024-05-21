window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер трансляций на главной странице
    if (document.querySelector('#broadcasts-slider')) {
      let broadcastsSlider = new Splide('#broadcasts-slider', {
        type: 'slide',
        autoplay: false,
        arrows: false,
        pagination: false,
        gap: 'var(--gap-slider,clamp(0.5em, 1.5vi, 0.9375em))',
        autoWidth: true,
        padding: 'var(--section-padding, clamp(1.25rem, 1.1875rem + 0.3125vw, 1.5625rem))',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            destroy: 'completely',
          },
        },
      });
      broadcastsSlider.mount();
    }
  }
});
