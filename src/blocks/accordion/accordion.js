window.addEventListener('DOMContentLoaded', () => {
  // Аккордеоны
  if (document.querySelector('.accordion')) {
    const accordionsButtons =
      document.getElementsByClassName('accordion__button');

    for (i = 0; i < accordionsButtons.length; i++) {
      accordionsButtons[i].addEventListener('click', function () {
        this.closest('.accordion').classList.toggle('accordion--actived');
        let icon = this.querySelector('.accordion__icon');
        let container = this.nextElementSibling;
        if (container.style.maxHeight) {
          this.setAttribute('aria-label', 'Развернуть');
          container.style.maxHeight = null;
          icon.classList.add('icon--type-plus');
          icon.classList.remove('icon--type-minus');
        } else {
          this.setAttribute('aria-label', 'Свернуть');
          container.style.maxHeight = container.scrollHeight + 'px';
          icon.classList.add('icon--type-minus');
          icon.classList.remove('icon--type-plus');
        }
      });
    }
  }
});
