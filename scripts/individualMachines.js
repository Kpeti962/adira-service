const extraRows = document.querySelectorAll(".extraRows");
const toggleRows = document.querySelector(".toggleRows");


toggleRows.addEventListener("click", () => {
    extraRows.forEach(row => row.classList.remove("hidden"));
    toggleRows.classList.add("hidden");
});
    
    
  
arrowUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
}); 
