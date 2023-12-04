// Форма присоединиться к проекту
const headerJoinButton = document.querySelector('.header__join-button');
const joinModal = document.querySelector('.modal--content-join');
const joinModalCloseButton = document.querySelector('.modal__close-button');
const openJoinModal = function () {
  joinModal.classList.add('modal--opened');
};
const closeJoinModal = function () {
  joinModal.classList.remove('modal--opened');
};

headerJoinButton.addEventListener('click', openJoinModal);
joinModal.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('modal--content-join') ||
    evt.target.classList.contains('modal__close-button')
  ) {
    closeJoinModal();
  }
});

// Форма принять участие в конкурсе
const bannerContestButton = document.querySelector('.section-banner__button');
const contestModal = document.querySelector('.modal--content-contest');
const contestModalCloseButton = document.querySelector('.modal__close-button');
const openContestModal = function () {
  contestModal.classList.add('modal--opened');
};
const closeContestModal = function () {
  contestModal.classList.remove('modal--opened');
};

bannerContestButton.addEventListener('click', openContestModal);
contestModal.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('modal--content-contest') ||
    evt.target.classList.contains('modal__close-button')
  ) {
    closeContestModal();
  }
});
