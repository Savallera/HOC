window.addEventListener('DOMContentLoaded', () => {
  // Квиз
  if (document.querySelector('.survey__form')) {
    const surveyLabels = document.querySelectorAll('.survey__label');

    for (i = 0; i < surveyLabels.length; i++) {
      surveyLabels[i].addEventListener('click', function () {
        this.classList.add('survey__label--current');
        this.closest('.survey__form').classList.add(
          'survey__form--show-result'
        );
      });
    }
  }

  if (Splide) {
    // Слайдер с квизами на главной странице
    if (document.querySelector('#survey-slider')) {
      let eventsSlider = new Splide('#survey-slider', {
        rewind: true,
        autoplay: true,
        arrows: false,
        gap: 'var(--gap-slider)',
      });
      eventsSlider.mount();
    }
  }
});
