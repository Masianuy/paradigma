'use strict';

let offerBtns = document.querySelectorAll('.hamer__left-btn');
offerBtns.forEach(function(offerBtn, index) {
  offerBtn.addEventListener('click', function() {
    let currentBtnData = this.getAttribute('data-offer');
    let currentContentData = document.querySelector('.hamer__right-box[data-offer="' + currentBtnData + '"]');
    document.querySelector('.hamer__right-box.hamer__box-active').classList.remove('hamer__box-active');
    document.querySelector('.hamer__left-btn.hamer__btn-active').classList.remove('hamer__btn-active');

    currentContentData.classList.add('hamer__box-active');
    this.classList.add('hamer__btn-active');
  })
});

let imgs = document.querySelectorAll('.img__pop-up');
imgs.forEach(function(img) {
  img.addEventListener('click', function() {
    let imgAttr = this.getAttribute('src');
    let divPopUp = document.createElement('div');
    let imgPopUp = document.createElement('img');
    document.body.appendChild(divPopUp).classList.add('modal-img');
    divPopUp.appendChild(imgPopUp);
    imgPopUp.setAttribute('src', imgAttr);
    let closeImgPopUp = document.createElement('span');
    divPopUp.appendChild(closeImgPopUp).classList.add('modal__img-close');

    closeImgPopUp.addEventListener('click', function() {
      document.body.removeChild(divPopUp);
    })
  })
});

const socialLinks = document.querySelectorAll('.main-right__form-input');
socialLinks.forEach(function(socialLink, ind) {
  socialLink.addEventListener('click', function() {
    let currentLink = this.getAttribute('placeholder');
    let currentInput = document.querySelector('.main-right__form-phone');
    currentInput.setAttribute('placeholder', currentLink);
  })
});

const dateBox = document.querySelector('span.price__box-date');
let date = new Date();
let day = date.getDate();
let month = date.getUTCMonth() + 1;
let year = date.getUTCFullYear();
dateBox.innerHTML = day + '. ' + month + '. ' + year;

const gamburgerMenu = document.querySelector('.header__menu');
gamburgerMenu.addEventListener('click', function() {
  const mobilMenu = document.querySelector('.gamburger__menu');
  mobilMenu.classList.add('menu-open');
  const gamburgerMenuClose = document.querySelector('.gamburger__close-btn');
  gamburgerMenuClose.addEventListener('click', function() {
    mobilMenu.classList.remove('menu-open');
  })
});

const modalCalls = document.querySelectorAll('.recall--btn');
modalCalls.forEach(function(modalCall) {
  modalCall.addEventListener('click', function() {
    const modalCallPopUp = document.querySelector('.modal-call');
    modalCallPopUp.classList.add('modal-call__open');
    const modalCallPopUpClose = document.querySelector('.modal-call__close');
    modalCallPopUpClose.addEventListener('click', function() {
      modalCallPopUp.classList.remove('modal-call__open');
    })
  })
});