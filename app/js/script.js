const buttonOpen = document.querySelector(".header__nav--menu");
const mobileMenu = document.querySelector(".mobileMenu");
const buttonClose = document.querySelector(".mobileMenu__nav--menu");

buttonOpen.addEventListener("click", () => {
	mobileMenu.classList.add("mobileMenu__open");
});

buttonClose.addEventListener("click", () => {
	mobileMenu.classList.remove("mobileMenu__open");
});