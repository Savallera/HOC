
window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер трансляций на главной странице
    if (document.querySelector('#broadcasts-slider')) {
      let broadcastsSlider = new Splide('#broadcasts-slider', {
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
      broadcastsSlider.mount();
    }
  }
});

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

// Форма принять участие в конкурсе
if (document.querySelector('.contests__button')) {
  const contestButton = document.querySelector('.contests__button');
  const contestModal = document.querySelector('.modal--content-contest');
  const contestModalCloseButton = document.querySelector(
    '.modal__close-button'
  );
  const openContestModal = function () {
    contestModal.classList.add('modal--opened');
  };
  const closeContestModal = function () {
    contestModal.classList.remove('modal--opened');
  };

  contestButton.addEventListener('click', openContestModal);
  contestModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-contest') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeContestModal();
    }
  });
}

// Меню в шапке
const menuList = document.querySelector('.header__menu-list');
const mobileMenu = document.querySelector('.header__mobile-menu');
const mobileMenuList = document.querySelector('.header__mobile-menu-list');

let numberOfItems = 0;
let totalSpace = 0;
let breakWidths = [];
let availableSpace, numOfVisibleItems, requiredSpace;
Array.from(menuList.children).map((children) => {
  totalSpace += children.getBoundingClientRect().width;
  numberOfItems += 1;
  breakWidths.push(totalSpace);
});

function checkMenuSize() {
  availableSpace = menuList.getBoundingClientRect().width;
  numOfVisibleItems = menuList.children.length;
  requiredSpace = breakWidths[numOfVisibleItems - 1];

  if (requiredSpace > availableSpace) {
    mobileMenuList.prepend(menuList.children[menuList.children.length - 1]);
    mobileMenuList.firstElementChild
      .querySelector('a')
      .classList.remove('header__menu-link');
    mobileMenuList.firstElementChild
      .querySelector('a')
      .classList.add('header__mobile-menu-link');
    numOfVisibleItems -= 1;
    checkMenuSize();
  } else if (availableSpace > breakWidths[numOfVisibleItems]) {
    menuList.append(mobileMenuList.children[0]);
    menuList.lastElementChild
      .querySelector('a')
      .classList.remove('header__mobile-menu-link');
    menuList.lastElementChild
      .querySelector('a')
      .classList.add('header__menu-link');
    numOfVisibleItems += 1;
  }

  mobileMenu.setAttribute('count', numberOfItems - numOfVisibleItems);
  if (numOfVisibleItems === numberOfItems)
    mobileMenu.classList.add('visually-hidden');
  else mobileMenu.classList.remove('visually-hidden');
}

window.addEventListener('resize', () => {
  checkMenuSize();
});
window.addEventListener('DOMContentLoaded', () => {
  checkMenuSize();
});

window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер с подкастами
    if (document.querySelector('#media-podcast-slider')) {
      let mediaPodcastSlider = new Splide('#media-podcast-slider', {
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
      mediaPodcastSlider.mount();
    }

    // Слайдер с видео
    if (document.querySelector('#media-video-slider')) {
      let mediaVideoSlider = new Splide('#media-video-slider', {
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
      mediaVideoSlider.mount();
    }
  }
});

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

// Форма присоединиться к проекту
const signUpButton = document.querySelector('.sign-up__button');
const signUpModal = document.querySelector('.modal--content-sign-up');
const signUpModalCloseButton = document.querySelector('.modal__close-button');
const openSignUpModal = function () {
  signUpModal.classList.add('modal--opened');
};
const closeSignUpModal = function () {
  signUpModal.classList.remove('modal--opened');
};

signUpButton.addEventListener('click', openSignUpModal);
signUpModal.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('modal--content-sign-up') ||
    evt.target.classList.contains('modal__close-button')
  ) {
    closeSignUpModal();
  }
});

// Пока не используются
// window.addEventListener('DOMContentLoaded', () => {
  // if (Splide) {
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
  // }
// });

window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
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
  }
});

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
