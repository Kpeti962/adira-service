const arrowUp = document.querySelector(".arrowUp");
const extraRows = document.querySelectorAll(".extraRows");
const toggleRows = document.querySelector(".toggleRows");


arrowUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
}); 

toggleRows.addEventListener("click", () => {
    extraRows.forEach(row => row.classList.remove("hidden"));
    toggleRows.classList.add("hidden");
});
    
    
  
