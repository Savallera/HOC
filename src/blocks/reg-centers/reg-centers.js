// Переключение карты региона по клику на список регионов
if (document.querySelector('.reg-centers')) {
  const regCentersButton = document.querySelector('.reg-centers__button');
  const regCentersMapContainer = document.querySelector(
    '.reg-centers__container--content-map'
  );
  const regCentersListContainer = document.querySelector(
    '.reg-centers__container--content-list'
  );
  const openRegCentersListContainer = function () {
    regCentersMapContainer.classList.add('visually-hidden');
    regCentersListContainer.classList.remove('visually-hidden');
  };
  const openRegCentersMapContainer = function () {
    regCentersListContainer.classList.add('visually-hidden');
    regCentersMapContainer.classList.remove('visually-hidden');
  };
  const toggleRegCenters = function () {
    if (regCentersListContainer.classList.contains('visually-hidden')) {
      openRegCentersListContainer();
      regCentersButton.querySelector('.button__text').textContent =
        'Показать на карте';
    } else {
      openRegCentersMapContainer();
      regCentersButton.querySelector('.button__text').textContent =
        'Показать списком';
    }
  };

  regCentersButton.addEventListener('click', toggleRegCenters);
}
