const hamburgerBtn = document.querySelector(".hamburger-btn");
const menuList = document.querySelector(".menu-list");
const closeBtn = document.querySelector(".close-btn");
const menuOverlay = document.querySelector(".menu-overlay");

function openMenu() {
  menuList.classList.add("open");
  menuOverlay.classList.add("open");
  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "block";
}
function closeMenu() {
  menuList.classList.remove("open");
  menuOverlay.classList.remove("open");
  hamburgerBtn.style.display = "block";
  closeBtn.style.display = "none";
}

hamburgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);
