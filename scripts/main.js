const tham = document.querySelector('.tham');
const thamnav = document.querySelector('.thamnav');
const body = document.querySelector('.body');
const overlay = document.querySelector('.overlay');
const arrowUp = document.querySelector('.arrowUp');
const serviceButton = document.querySelector('.serviceButton');
const serviceButton2 = document.querySelector('.serviceButton2');
const servicePage = document.querySelector('.servicePage');


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

serviceButton.addEventListener('click', () => {
  servicePage.scrollIntoView({behavior: "smooth"});
  console.log("siker");
  
})
serviceButton2.addEventListener('click', () => {
  thamnav.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
  servicePage.scrollIntoView({behavior: "smooth"});
  console.log("siker");
  
})
arrowUp.addEventListener('click', () => {
window.scrollTo({top: 0, behavior: "smooth"})



}); 

