
const headerJoinButton = document.querySelector('.header__join-button');
const feebackModal = document.querySelector('.feedback-modal');
const feebackModalCloseButton = document.querySelector(
  '.feedback-modal__close-button'
);
const openFeedbackModal = function () {
  feebackModal.classList.add('feedback-modal--opened');
};
const closeFeedbackModal = function () {
  feebackModal.classList.remove('feedback-modal--opened');
};

headerJoinButton.addEventListener('click', openFeedbackModal);
feebackModalCloseButton.addEventListener('click', closeFeedbackModal);
