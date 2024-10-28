const tham = document.querySelector('.tham');
const thamnav = document.querySelector('.thamnav');
const body = document.querySelector('.body');
const overlay = document.querySelector('.overlay');

const nav = document.querySelector('.nav');
const contactButton = document.querySelector('.contactButton');
const contactButton2 = document.querySelector('.contactButton2');
const contactPage = document.querySelector('.contactPage');
// Kiválasztjuk az összes elemet, amelyik be fog úszni



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



contactButton.addEventListener('click', () => {
  contactPage.scrollIntoView({ behavior: "smooth" });


})
contactButton2.addEventListener('click', () => {
  thamnav.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
  contactPage.scrollIntoView({ behavior: "smooth" });


})


