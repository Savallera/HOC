const cardLikeButton = document.querySelector('.card__like-button');

cardLikeButton.onclick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    tippy(cardLikeButton, {
        trigger: 'click',
        content: `<div class="tooltip__container">
          <p class="tooltip__text">Чтобы добавить в избранное надо создать аккаунт</p>
          <a href="#" class="tooltip__link text-gradient" rel="noopener ugs">Создай его</a>
        </div>`,
        allowHTML: true,
    })
};

window.addEventListener('DOMContentLoaded', () => {
    if (Splide) {
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
                    768: {
                        destroy: 'completely',
                    },
                },
            });
            newsSlider.mount();
        }
    }
});
