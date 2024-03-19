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

// Модальное окно с формой присоединиться к проекту, открытие выбора Направления работы в медиа
if (document.querySelector('.sign-up')) {
  const directionWorkButton = document.querySelector(
    '.field__control-icon--role-direction-work'
  );
  const directionWorkModal = document.querySelector(
    '.modal--content-direction-work'
  );
  const openDirectionWorkModal = function () {
    directionWorkModal.classList.add('modal--opened');
  };
  const closeDirectionWorkModal = function () {
    directionWorkModal.classList.remove('modal--opened');
  };

  directionWorkButton.addEventListener('click', openDirectionWorkModal);
  directionWorkModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-direction-work') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeDirectionWorkModal();
    }
  });
}

// Модальное окно с формой присоединиться к проекту, открытие выбора Сфера интересов
if (document.querySelector('.sign-up')) {
  const areaInterestButton = document.querySelector(
    '.field__control-icon--role-area-interest'
  );
  const areaInterestModal = document.querySelector(
    '.modal--content-area-interest'
  );
  const openAreaInterestModal = function () {
    areaInterestModal.classList.add('modal--opened');
  };
  const closeAreaInterestModal = function () {
    areaInterestModal.classList.remove('modal--opened');
  };

  areaInterestButton.addEventListener('click', openAreaInterestModal);
  areaInterestModal.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains('modal--content-area-interest') ||
      evt.target.classList.contains('modal__close-button')
    ) {
      closeAreaInterestModal();
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
if (document.querySelector('.card--role-broadcast')) {
  const broadcastsButton = document.querySelector('.card--role-broadcast');
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
