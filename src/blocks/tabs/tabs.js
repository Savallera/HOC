window.addEventListener('DOMContentLoaded', () => {
  // Вкладки
  if (document.querySelector('.tabs')) {
    const tabContainer = document.querySelector('.tabs');
    const tabButtons = tabContainer.querySelectorAll('.tabs__button');
    const tabSections = tabContainer.querySelectorAll('.tabs__section');
    const openTabSection = function (element) {
      removeActiveClass();
      element.classList.add('tabs__button--actived');
      element.dataset.tabIndex;
      element
        .closest('.tabs')
        .querySelector(
          `.tabs__section[data-tab-index="${element.dataset.tabIndex}"]`
        )
        .classList.add('tabs__section--opened');
    };

    const removeActiveClass = function () {
      for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('tabs__button--actived');
        tabSections[i].classList.remove('tabs__section--opened');
      }
    };

    tabButtons.forEach((button) =>
      button.addEventListener('click', () => {
        openTabSection(button);
      })
    );
  }
});
