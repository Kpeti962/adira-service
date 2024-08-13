const tham = document.querySelector('.tham');
const thamnav = document.querySelector('.thamnav');
const body = document.querySelector('.body');
const overlay = document.querySelector('.overlay');
const arrowUp = document.querySelector('.arrowUp');
const nav = document.querySelector('.nav');
const serviceButton = document.querySelector('.serviceButton');
const contactButton = document.querySelector('.contactButton');
const serviceButton2 = document.querySelector('.serviceButton2');
const contactButton2 = document.querySelector('.contactButton2');
const servicePage = document.querySelector('.servicePage');
const contactPage = document.querySelector('.contactPage');


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
contactButton.addEventListener('click', () => {
  contactPage.scrollIntoView({behavior: "smooth"});
  
  
})
serviceButton2.addEventListener('click', () => {
  thamnav.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
  servicePage.scrollIntoView({behavior: "smooth"});
  

})
contactButton2.addEventListener('click', () => {
  thamnav.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
  contactPage.scrollIntoView({behavior: "smooth"});
  

})
arrowUp.addEventListener('click', () => {
window.scrollTo({top: 0, behavior: "smooth"})



}); 

