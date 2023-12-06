const tooltipButton = document.querySelector('.card__like-button');
const tooltipModal = document.querySelector('.tooltip');
const openToolTipModal = function () {
  tooltipModal.classList.add('tooltip--opened');
};
tooltipButton.onclick = () => {
  openToolTipModal();
  // Добавить расчет координат для отображения окна с подсказкой https://yadi.sk/d/gapHXYDdtsfEUw сейчас оно появляется в верхнем правом углу вьюпорта.
};
