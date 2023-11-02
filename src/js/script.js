const hamburgerIcon = document.querySelector('.navbar__btn');
const navWindow = document.querySelector('.nav');
const burgerBox = document.querySelector('.navbar__box');

hamburgerIcon.addEventListener('click', () => {
	navWindow.classList.toggle('activeNavWindow');
	burgerBox.classList.toggle('activeBurgerIcon');
});
