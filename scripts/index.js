
window.addEventListener('DOMContentLoaded', () => {
  // Аккордеоны
  if (document.querySelector('.accordion')) {
    const accordionsButtons =
      document.getElementsByClassName('accordion__button');

    for (i = 0; i < accordionsButtons.length; i++) {
      accordionsButtons[i].addEventListener('click', function () {
        this.closest('.accordion').classList.toggle('accordion--actived');
        let icon = this.querySelector('.accordion__icon');
        let container = this.nextElementSibling;
        if (container.style.maxHeight) {
          this.setAttribute('aria-label', 'Развернуть');
          container.style.maxHeight = null;
          icon.classList.add('icon--type-plus');
          icon.classList.remove('icon--type-minus');
        } else {
          this.setAttribute('aria-label', 'Свернуть');
          container.style.maxHeight = container.scrollHeight + 'px';
          icon.classList.add('icon--type-minus');
          icon.classList.remove('icon--type-plus');
        }
      });
    }
  }
});

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

    // Слайдер на детальной странице базы знаний
    if (document.querySelector('#knowledge-base-article-slider')) {
      let knowledgeBaseSlider = new Splide('#knowledge-base-article-slider', {
        type: 'slide',
        autoplay: false,
        arrows: false,
        pagination: false,
        gap: '.9375em',
        autoWidth: true,
        padding: 'var(--section-padding)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            destroy: 'completely',
          },
        },
      });
      knowledgeBaseSlider.mount();
    }

    // Карточки авторов на странице Блог студСМИ
    if (document.querySelector('#authors-slider')) {
      let authorsSlider = new Splide('#authors-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'clamp(.9375em, 2vw, 1.25em)',
        autoWidth: true,
        padding: 'var(--section-padding)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            perPage: 4,
            autoWidth: false,
            pagination: true,
            padding: 0,
          },
        },
      });
      authorsSlider.mount();
    }
  }
});

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
        autoWidth: true,
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
  if (
    numOfVisibleItems === numberOfItems &&
    mobileMenuList.childElementCount === 0
  )
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
        autoWidth: true,
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
        autoWidth: true,
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

// Модальное окно с формой присоединиться к проекту
if (document.querySelector('.sign-up')) {
  const signUpButton = document.querySelector('.sign-up__button');
  const signUpModal = document.querySelector('.modal--content-sign-up');
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
}

// Модальное окно с формой принять участие в конкурсе
if (document.querySelector('.contests__button')) {
  const contestButton = document.querySelector('.contests__button');
  const contestModal = document.querySelector('.modal--content-contest');
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

// Модальное окно с формой поиска, открытие выбора региона
if (document.querySelector('.search__region-button--content-all')) {
  const regionsButton = document.querySelector(
    '.search__region-button--content-all'
  );
  const regionsModal = document.querySelector('.modal--content-regions');
  const openRegionsModal = function () {
    regionsModal.classList.add('modal--opened');
  };
  const closeRegionsModal = function () {
    regionsModal.classList.remove('modal--opened');
  };

  regionsButton.addEventListener('click', openRegionsModal);
  regionsModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-regions') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeRegionsModal();
    }
  });
}

// Модальное окно с формой поиска, открытие выбора фильтров
if (document.querySelector('.search__filter-button')) {
  const filtersButtons = document.querySelectorAll('.search__filter-button');
  const filtersModal = document.querySelector('.modal--content-filters');
  const openFiltersModal = function () {
    filtersModal.classList.add('modal--opened');
  };
  const closeFiltersModal = function () {
    filtersModal.classList.remove('modal--opened');
  };

  for (i = 0; i < filtersButtons.length; i++) {
    filtersButtons[i].addEventListener('click', openFiltersModal);
  }
  filtersModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-filters') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeFiltersModal();
    }
  });
}

// Модальное окно для просмотра трансляции
if (document.querySelector('.card--role-preview-button')) {
  const broadcastsButton = document.querySelector('.card--role-preview-button');
  const broadcastsModal = document.querySelector('.modal--content-broadcasts');
  const openBroadcastsModal = function () {
    broadcastsModal.classList.add('modal--opened');
  };
  const closeBroadcastsModal = function () {
    broadcastsModal.classList.remove('modal--opened');
  };

  broadcastsButton.addEventListener('click', openBroadcastsModal);
  broadcastsModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-broadcasts') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeBroadcastsModal();
    }
  });
}

// Модальное окно для редактирования профиля
if (document.querySelector('.account__icon-button--role-edit-profile')) {
  const editProfileButton = document.querySelector(
    '.account__icon-button--role-edit-profile'
  );
  const editProfileModal = document.querySelector(
    '.modal--content-edit-profile'
  );
  const openEditProfileModal = function () {
    editProfileModal.classList.add('modal--opened');
  };
  const closeEditProfileModal = function () {
    editProfileModal.classList.remove('modal--opened');
  };

  editProfileButton.addEventListener('click', openEditProfileModal);
  editProfileModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-edit-profile') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeEditProfileModal();
    }
  });
}

// Модальное окно резюме
if (document.querySelector('.account__button--role-resume')) {
  const resumeButton = document.querySelector('.account__button--role-resume');
  const resumeModal = document.querySelector('.modal--content-resume');
  const openResumeModal = function () {
    resumeModal.classList.add('modal--opened');
  };
  const closeResumeModal = function () {
    resumeModal.classList.remove('modal--opened');
  };

  resumeButton.addEventListener('click', openResumeModal);
  resumeModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-resume') ||
      evt.target.classList.contains('modal__close-button') ||
      evt.target.classList.contains('account__icon-button--role-close-button')
    ) {
      closeResumeModal();
    }
  });
}

// Модальное окно редактирования резюме
if (document.querySelector('.account__icon-button--role-edit-resume')) {
  const editResumeButtons = document.querySelectorAll(
    '.account__icon-button--role-edit-resume'
  );
  const editResumeModal = document.querySelector('.modal--content-edit-resume');
  const openEditResumeModal = function () {
    editResumeModal.classList.add('modal--opened');
  };
  const closeEditResumeModal = function () {
    editResumeModal.classList.remove('modal--opened');
  };

  editResumeButtons.forEach((button) =>
    button.addEventListener('click', openEditResumeModal)
  );
  editResumeModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-edit-resume') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeEditResumeModal();
    }
  });
}

// Модальное окно создания публикации
if (document.querySelector('.search__icon-button--role-add-article')) {
  const addArticleButton = document.querySelector(
    '.search__icon-button--role-add-article'
  );
  const addArticleModal = document.querySelector('.modal--content-add-article');
  const openAddArticleModal = function () {
    addArticleModal.classList.add('modal--opened');
  };
  const closeAddArticleModal = function () {
    addArticleModal.classList.remove('modal--opened');
  };

  addArticleButton.addEventListener('click', openAddArticleModal);
  addArticleModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-add-article') ||
      evt.target.classList.contains('form__icon-button--role-close-button')
    ) {
      closeAddArticleModal();
    }
  });
}

// Модальное окно модерации публикации
if (document.querySelector('.search__icon-button--role-moderation-article')) {
  const moderationArticleButton = document.querySelector(
    '.search__icon-button--role-moderation-article'
  );
  const moderationArticleModal = document.querySelector(
    '.modal--content-moderation-article'
  );
  const openModerationArticleModal = function () {
    moderationArticleModal.classList.add('modal--opened');
  };
  const closeModerationArticleModal = function () {
    moderationArticleModal.classList.remove('modal--opened');
  };

  moderationArticleButton.addEventListener('click', openModerationArticleModal);
  moderationArticleModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-moderation-article') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeModerationArticleModal();
    }
  });
}

// Открытия просмотра публикации в окне модерации
if (document.querySelector('.field__control-icon--role-view-article')) {
  const viewArticleButton = document.querySelector(
    '.field__control-icon--role-view-article'
  );
  const articleCard = document.querySelector('.form--view-article');
  const closeArticleButton = articleCard.querySelector(
    '.form__icon-button--role-close-button'
  );
  const openArticleCard = function () {
    articleCard.classList.remove('visually-hidden');
  };
  const closeArticleCard = function () {
    articleCard.classList.add('visually-hidden');
  };

  viewArticleButton.addEventListener('click', openArticleCard);
  closeArticleButton.addEventListener('click', closeArticleCard);
}

// Модальное окно для просмотра уведомлений
if (document.querySelector('.search__icon-button--role-notifications')) {
  const notificationsButton = document.querySelector(
    '.search__icon-button--role-notifications'
  );
  const notificationsModal = document.querySelector(
    '.modal--content-notifications'
  );
  const openNotificationsModal = function () {
    notificationsModal.classList.add('modal--opened');
  };
  const closeNotificationsModal = function () {
    notificationsModal.classList.remove('modal--opened');
  };

  notificationsButton.addEventListener('click', openNotificationsModal);
  notificationsModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-notifications') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeNotificationsModal();
    }
  });
}

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

/* Прелодер на страницы */
const preloaderTmp = document.querySelector('.preloader-template');
const page = document.querySelector('.page');
function showPreloader(tmp, parent) {
  const node = tmp.content.cloneNode(true);
  parent.append(node);
}
function removePreloader(parent, preloaderSelector) {
  const preloader = parent.querySelector(preloaderSelector);
  if (preloader) {
    preloader.remove();
  }
}

showPreloader(preloaderTmp, page);
setTimeout(() => {
  removePreloader(page, '.preloader');
}, 1200);

window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер карточек на странице студСМИ
    if (document.querySelector('#stud-smi-cards-slider')) {
      let studSmiCardsSlider = new Splide('#stud-smi-cards-slider', {
        type: 'slide',
        autoplay: false,
        arrows: false,
        pagination: false,
        gap: '.9375em',
        autoWidth: true,
        padding: 'var(--section-padding)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            destroy: 'completely',
          },
        },
      });
      studSmiCardsSlider.mount();
    }

    // Слайдер новостей на странице студСМИ
    if (document.querySelector('#stud-smi-news-slider')) {
      let studSmiNewsSlider = new Splide('#stud-smi-news-slider', {
        type: 'fade',
        rewind: true,
        autoplay: true,
        arrows: false,
      });
      studSmiNewsSlider.mount();
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  // Квиз
  if (document.querySelector('.survey__form')) {
    const surveyLabels = document.querySelectorAll('.survey__label');

    for (i = 0; i < surveyLabels.length; i++) {
      surveyLabels[i].addEventListener('click', function () {
        this.classList.add('survey__label--current');
        this.closest('.survey__form').classList.add(
          'survey__form--show-result'
        );
      });
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  // Вкладки
  if (document.querySelector('.tabs')) {
    const tabContainer = document.querySelector('.tabs');
    const tabButtons = tabContainer.querySelectorAll('.tabs__button');
    const tabSections = tabContainer.querySelectorAll('.tabs__section');
    const openTabSection = function (element) {
      removeActiveClass();
      element.classList.add('tabs__button--actived');
      element.dataset.tabIndex;
      element
        .closest('.tabs')
        .querySelector(
          `.tabs__section[data-tab-index="${element.dataset.tabIndex}"]`
        )
        .classList.add('tabs__section--opened');
    };

    const removeActiveClass = function () {
      for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('tabs__button--actived');
        tabSections[i].classList.remove('tabs__section--opened');
      }
    };

    tabButtons.forEach((button) =>
      button.addEventListener('click', () => {
        openTabSection(button);
      })
    );
  }
});

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
        autoWidth: true,
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

    // Фотографии в тестах
    if (document.querySelector('#tests-image-slider')) {
      let testsImageSlider = new Splide('#tests-image-slider', {
        type: 'slide',
        arrows: false,
        gap: 'clamp(.9375em, 2vw, 1.25em)',
        cover: true,
        heightRatio: 0.56,
        mediaQuery: 'min',
        breakpoints: {
          768: {
            heightRatio: 0.54,
          },
        },
      });
      testsImageSlider.mount();
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (Splide) {
    // Слайдер с темами
    if (document.querySelector('#theme-slider')) {
      let themeSlider = new Splide('#theme-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'clamp(.9375em, 2vw, 1.25em)',
        autoWidth: true,
        padding: 'var(--section-inline-start)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            arrows: true,
          },
        },
      });
      themeSlider.mount();
    }

    // Слайдер для ЛК
    if (document.querySelector('#theme-lk-slider')) {
      let themeLkSlider = new Splide('#theme-lk-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'clamp(.9375em, 2vw, 1.25em)',
        autoWidth: true,
        padding: 'var(--section-inline-start)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            arrows: true,
          },
        },
      });
      themeLkSlider.mount();
    }

    // Слайдер для ЛК инвайтов
    if (document.querySelector('#theme-lk-invite-slider')) {
      let themeLkInviteSlider = new Splide('#theme-lk-invite-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        gap: 'clamp(.9375em, 2vw, 1.25em)',
        autoWidth: true,
        padding: 'var(--section-inline-start)',
        mediaQuery: 'min',
        breakpoints: {
          768: {
            arrows: true,
          },
        },
      });
      themeLkInviteSlider.mount();
    }

    // Слайдер для ЛК сертификатов
    if (document.querySelector('#theme-lk-certificate-slider')) {
      let themeLkCertificateSlider = new Splide(
        '#theme-lk-certificate-slider',
        {
          type: 'slide',
          arrows: false,
          pagination: false,
          perPage: 3,
          gap: 'clamp(.625em, 2vw, 1.25em)',
          padding: 'var(--section-inline-start)',
          mediaQuery: 'min',
          breakpoints: {
            768: {
              arrows: true,
            },
          },
        }
      );
      themeLkCertificateSlider.mount();
    }

    // Слайдер для резюме сертификатов
    if (document.querySelector('#resume-certificate-slider')) {
      let resumeCertificateSlider = new Splide('#resume-certificate-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: '.375em',
      });
      resumeCertificateSlider.mount();
    }

    // Слайдер для фото при создании публикаций
    if (document.querySelector('#add-article-image-slider')) {
      let addArticleImageSlider = new Splide('#add-article-image-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: 'clamp(.625em, 2vw, 1.25em)',
      });
      addArticleImageSlider.mount();
    }

    // Слайдер для фото при модерации публикаций
    if (document.querySelector('#moderation-article-image-slider')) {
      let addArticleImageSlider = new Splide('#moderation-article-image-slider', {
        type: 'slide',
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: 'clamp(.625em, 2vw, 1.25em)',
      });
      addArticleImageSlider.mount();
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
