window.addEventListener('DOMContentLoaded', () => {
    if (Splide) {
        // Слайдер новостей на главной странице
        if (document.querySelector('#news-slider')) {
            let newsSlider = new Splide('#news-slider', {
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
            newsSlider.mount();
        }
    }
});
