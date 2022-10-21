import './styles/index.scss';


const hamburgerBtn = document.querySelector('.header__hamburger-btn');

function toggleActiveClass(target) {
	target.classList.toggle('active')
}

function openMenu(e) {
	const { currentTarget } = e;
	const hamburgerMenu = document.querySelector('.header__menu-hamburger');

	toggleActiveClass(currentTarget)
	toggleActiveClass(hamburgerMenu)
}

hamburgerBtn.addEventListener('click', openMenu);