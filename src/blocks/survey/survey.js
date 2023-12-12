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
});
