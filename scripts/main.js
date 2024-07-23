const tham = document.querySelector('.tham');
const thamnav = document.querySelector('.thamnav');
const body = document.querySelector('.body');
const overlay = document.querySelector('.overlay');
const arrowUp = document.querySelector('.arrowUp');


tham.addEventListener('click', () => {
  thamnav.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
});

overlay.addEventListener('click', () => {
  thamnav.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
});

arrowUp.addEventListener('click', () => {
window.scrollTo({top: 0, behavior: "smooth"})




});

