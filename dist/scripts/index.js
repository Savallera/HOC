
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
feebackModal.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('feedback-modal') ||
    evt.target.classList.contains('feedback-modal__close-button')
  ) {
    closeFeedbackModal();
  }
});

// Header menu for mobile
const menuList = document.querySelector('.header__menu-list');
const mobileMenu = document.querySelector('.header__drop-down-menu');
const mobileMenuList = document.querySelector('.header__drop-down-menu-list');

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
  // Get instant state
  availableSpace = menuList.getBoundingClientRect().width;
  numOfVisibleItems = menuList.children.length;
  requiredSpace = breakWidths[numOfVisibleItems - 1];

  // There is not enought space
  if (requiredSpace > availableSpace) {
    mobileMenuList.prepend(menuList.children[menuList.children.length - 1]);
    mobileMenuList.firstElementChild
      .querySelector('a')
      .classList.remove('header__menu-link');
    mobileMenuList.firstElementChild
      .querySelector('a')
      .classList.add('header__drop-down-menu-link');
    numOfVisibleItems -= 1;
    checkMenuSize();
    // There is more than enough space
  } else if (availableSpace > breakWidths[numOfVisibleItems]) {
    menuList.append(mobileMenuList.children[0]);
    menuList.lastElementChild
      .querySelector('a')
      .classList.remove('header__drop-down-menu-link');
    menuList.lastElementChild
      .querySelector('a')
      .classList.add('header__menu-link');
    numOfVisibleItems += 1;
  }

  // Update the button accordingly
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
