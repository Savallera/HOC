// import tippy from "tippy.js";

const cardLikeButton = document.querySelector('.card__like-button');

cardLikeButton.onclick = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    console.log('Нажата кнопка лайка');
    // Добавить скрипт, чтобы на каждой картоке с классом .card внутри по щелчку на кнопку лайка с классом .card__like-button ей добавлялся класс нажатого .card__like-button--actived и при повторном нажатии удалялся

    // Не срабатывает событие, т.к. в файле tooltip.js повешено событие на клик, возможно перебивает.
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
