const hamburgerIcon = document.querySelector('.navbar__btn');
const navWindow = document.querySelector('.nav');
const burgerBox = document.querySelector('.navbar__box');
const windwo = document.querySelector('.windwo');
const allNavLinks = document.querySelectorAll('.nav__item')
const footerYear = document.querySelector('.year')

hamburgerIcon.addEventListener('click', () => {

	
	windwo.classList.toggle('activeWinwdo');
	setTimeout(() => {
		navWindow.classList.toggle('activeNavWindow');
		burgerBox.classList.toggle('activeBurgerIcon');
	}, 1);
});

allNavLinks.forEach(link => link.addEventListener('click', ()=>{
	windwo.classList.toggle('activeWinwdo');
	setTimeout(() => {
		navWindow.classList.toggle('activeNavWindow');
		burgerBox.classList.toggle('activeBurgerIcon');
	}, 1);
}))



window.addEventListener('DOMContentLoaded', ()=>{
	const prevBtn = document.querySelector('.slick-prev')
	const nextBtn = document.querySelector('.slick-next')
	prevBtn.textContent = '<'
	nextBtn.textContent = '>'
	footerYear.textContent = new Date().getFullYear()


	
})


