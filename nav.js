const toggleButton = document.getElementsByClassName("toggle-button")[0]
const links = document.getElementsByClassName("links")[0]
const rightMenu = document.getElementsByClassName("tags")
toggleButton.addEventListener("click", () => {
  links.classList.toggle("active")
})
toggleButton.addEventListener("click", () => {
  rightMenu.classList.toggle("added")
})
