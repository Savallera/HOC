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
