import './styles/index.scss';


// const hamburgerBtn = document.querySelector('.header__hamburger-btn');

// function toggleActiveClass(target) {
// 	target.classList.toggle('active')
// }

// function openMenu(e) {
// 	const { currentTarget } = e;
// 	const hamburgerMenu = document.querySelector('.header__menu-hamburger');

// 	toggleActiveClass(currentTarget)
// 	toggleActiveClass(hamburgerMenu)
// }

// hamburgerBtn.addEventListener('click', openMenu);

//Кастомный dropDown
document.querySelectorAll('.preferences__dropdown').forEach(function (dropDownWrapper) {

	const dropDownBtn = dropDownWrapper.querySelector('.preferences__dropdown-btn');
	const dropDownList = dropDownWrapper.querySelector('.preferences__dropdown-list');
	const dropDownItems = dropDownWrapper.querySelectorAll('.preferences__dropdown-item');
	const dropDownArrow = dropDownWrapper.querySelector('.preferences__form-arrow');

	dropDownBtn.addEventListener('click', function () {
		dropDownList.classList.toggle('active');
		dropDownArrow.classList.toggle('active');
		this.classList.toggle('active');
	});

	dropDownItems.forEach(function (itemList) {
		itemList.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.classList.remove('active');
			dropDownList.classList.remove('active');
			dropDownArrow.classList.remove('active');

		});
	});

	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('active');
			dropDownList.classList.remove('active');
			dropDownArrow.classList.remove('active');

		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('active');
			dropDownList.classList.remove('active');
			dropDownArrow.classList.remove('active');

		}
	});
});

//

const darkChecked = document.getElementById('dark');
const lightChecked = document.getElementById('light');
const htmlAtr = document.body.getAttribute('html');


if (darkChecked.checked) {

}



