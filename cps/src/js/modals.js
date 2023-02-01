const body = document.body

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
const callSubmit = document.querySelector('.modal-call__send')

// Переменные фидбэка //
const feedbackButtons = document.querySelectorAll('.feedback')
const modalFeedback = document.querySelector('.modal-fb')
const feedbackClose = document.querySelector('.fb-close')
const feedbackFog = document.querySelector('.modal-fb__fog')
const feedbackSubmit = document.querySelector('.modal-fb__send')


// Функционал звонка //
for (let callButton of callButtons) {
  callButton.addEventListener('click', function () {
    modalCall.classList.toggle('modal-call--open')
    body.classList.add('opened')
  })
}

modalClose.addEventListener('click', function () {
  modalCall.classList.toggle('modal-call--open')
  if(leftMenu.classList.contains('left-menu--open')){
    body.classList.add('opened')
  } else {
    body.classList.remove('opened')
  }
})

callFog.addEventListener('click', function () {
  modalCall.classList.toggle('modal-call--open')
  if(leftMenu.classList.contains('left-menu--open')){
    body.classList.add('opened')
  } else {
    body.classList.remove('opened')
  }
})

callSubmit.addEventListener('click', function(e) {
  e.preventDefault()
})


// Функционал фидбэка //
for (let feedbackButton of feedbackButtons) {
  feedbackButton.addEventListener('click', function () {
    modalFeedback.classList.toggle('modal-fb--open')
    body.classList.add('opened')
  })
}

feedbackClose.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-fb--open')
  if(leftMenu.classList.contains('left-menu--open')){
    body.classList.add('opened')
  } else {
    body.classList.remove('opened')
  }
})



feedbackFog.addEventListener('click', function () {
  modalFeedback.classList.toggle('modal-fb--open')
  if(leftMenu.classList.contains('left-menu--open')){
    body.classList.add('opened')
  } else {
    body.classList.remove('opened')
  }
})

feedbackSubmit.addEventListener('click', function(e){
  e.preventDefault()
})



// Функционал бокового меню //
menuButton.addEventListener('click', function () {
  leftMenu.classList.toggle('left-menu--open')
  body.classList.add('opened')
})

menuClose.addEventListener('click', function () {
  leftMenu.classList.toggle('left-menu--open')
  body.classList.remove('opened')
})

menuFog.addEventListener('click', function () {
  leftMenu.classList.toggle('left-menu--open')
  body.classList.remove('opened')
})

