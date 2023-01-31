const brands = document.querySelector('.brands__wrapper')
const brandsButton = document.querySelector('.brands__button')

brandsButton.addEventListener('click', function () {
  brands.classList.toggle('brands__wrapper--hidden')
  brandsButton.classList.toggle('brands__button--open')
  if (brands.classList.contains('brands__wrapper--hidden')) {
    brandsButton.textContent = 'Показать все';
  } else {
    brandsButton.textContent = 'Скрыть';
  }
})