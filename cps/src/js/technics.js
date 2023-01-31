const technics = document.querySelector('.technics__wrapper')
const technicsButton = document.querySelector('.technics__button')

technicsButton.addEventListener('click', function () {
  technics.classList.toggle('technics__wrapper--hidden')
  technicsButton.classList.toggle('technics__button--open')
  if (technics.classList.contains('technics__wrapper--hidden')) {
    technicsButton.textContent = 'Показать все';
  } else{
    technicsButton.textContent = 'Скрыть';
  }
})