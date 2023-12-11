window.addEventListener('DOMContentLoaded', () => {

  // Аккордеоны
  if (document.querySelector('.accordion')) {
    let accordionsButtons =
      document.getElementsByClassName('accordion__button');
    let i;

    for (i = 0; i < accordionsButtons.length; i++) {
      accordionsButtons[i].addEventListener('click', function () {
        this.closest('.accordion').classList.toggle('accordion--actived');
        let icon = this.querySelector('.accordion__icon');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          this.setAttribute('aria-label', 'Развернуть');
          panel.style.maxHeight = null;
          icon.classList.add('icon--type-plus');
          icon.classList.remove('icon--type-minus');
        } else {
          this.setAttribute('aria-label', 'Свернуть');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          icon.classList.add('icon--type-minus');
          icon.classList.remove('icon--type-plus');
        }
      });
    }
  }
});
