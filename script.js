'use strict';

const menuToggle = document.querySelector('.toggle');
const overlay = document.getElementById('overlay');
const parentElement = document.querySelector('.overlay__ul');
const firstOverlay = document.querySelector('.first__overlay__div');
const firstOverlayLi = document.querySelector('.first__overlay__li');
const secondOverlayDiv = document.querySelector('.second__overlay');
const secondOverlay = document.querySelector(
  '.second__overlay__content__links'
);

// Event listener for the overlay/Hamburger menu
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  overlay.classList.toggle('open');
});
// Event listener for clicking on the parent of the arrow
parentElement.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.closest('.first__overlay__li')) {
    const arrowIcon = e.target
      .closest('.first__overlay__li')
      .querySelector('.fas');
    arrowIcon.classList.toggle('rotate');
    firstOverlay.classList.toggle('show');
    firstOverlayLi.classList.toggle('show');
  }
});
// Event listener for clicking on the parent of the arrow
parentElement.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.closest('.second__overlay')) {
    const arrowIcon = e.target
      .closest('.second__overlay')
      .querySelector('.fas');
    arrowIcon.classList.toggle('rotate');
    secondOverlay.classList.toggle('show');
    secondOverlayDiv.classList.toggle('show');
  }
});
