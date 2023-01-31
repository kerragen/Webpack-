// Переменные бокового меню //
const leftMenu = document.querySelector('.left-menu')
const menuButton = document.querySelector('.burger')
const menuClose = document.querySelector('.menu-close')
const menuFog = document.querySelector('.left-menu__fog')


// Переменные звонка //
const callButtons = document.querySelectorAll('.call')
const modalCall = document.querySelector('.modal-call')
const modalClose = document.querySelector('.call-close')
const callFog = document.querySelector('.modal-call__fog')

// Переменные фидбэка //
const feedbackButtons = document.querySelectorAll('.feedback')
const modalFeedback = document.querySelector('.modal-fb')
const feedbackClose = document.querySelector('.fb-close')
const feedbackFog = document.querySelector('.modal-fb__fog')



// Функционал звонка //
for (let callButton of callButtons) {
  callButton.addEventListener('click', function () {
    modalCall.classList.toggle('modal-call--open')
    document.body.style.overflow = 'hidden'
  })
}

modalClose.addEventListener('click', function () {
  modalCall.classList.toggle('modal-call--open')
  if (leftMenu.classList.contains('left-menu--open')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

callFog.addEventListener('click', function () {
  modalCall.classList.toggle('modal-call--open')
  if (leftMenu.classList.contains('left-menu--open')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})


// Функционал фидбэка //
for (let feedbackButton of feedbackButtons) {
  feedbackButton.addEventListener('click', function () {
    modalFeedback.classList.toggle('modal-fb--open')
    document.body.style.overflow = 'hidden'
  })
}

feedbackClose.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-fb--open')
  if (leftMenu.classList.contains('left-menu--open')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

feedbackFog.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-fb--open')
  if (leftMenu.classList.contains('left-menu--open')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})


// Функционал бокового меню //
menuButton.addEventListener('click', function () {
  leftMenu.classList.toggle('left-menu--open')
  document.body.style.overflow = 'hidden'
})

menuClose.addEventListener('click', function () {
  leftMenu.classList.toggle('left-menu--open')
  document.body.style.overflow = ''
})

menuFog.addEventListener('click', function () {
  leftMenu.classList.toggle('left-menu--open')
  document.body.style.overflow = ''
})