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
