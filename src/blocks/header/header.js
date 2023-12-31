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
