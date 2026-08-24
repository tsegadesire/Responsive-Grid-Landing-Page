const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});