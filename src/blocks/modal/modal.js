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

// Модальное окно для просмотра уведомлений
if (document.querySelector('.article__count-button--role-notifications')) {
  const notificationsButton = document.querySelector(
    '.article__count-button--role-notifications'
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
