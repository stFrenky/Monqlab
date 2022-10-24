import { getAttributeValue } from 'domutils';
import './styles/index.scss';


//switch theme
const form = document.querySelector('.preferences__form');

const serializeForm = ({ elements }) => Array.from(elements).map(({ name, type, value, checked }) => {

	if (type === 'radio' && !checked) return false;

	return { name, value };
}).filter((item) => !!item.name);

function saveItem({ name, value }) {
	localStorage.setItem(name, value);
}

const getItem = name => localStorage.getItem(name);

function saveData(data) {
	data.forEach(item => {
		saveItem(item);
	});
}

function setTheme() {
	const html = document.querySelector('html');

	const theme = getItem('theme') ?? 'light';

	html.dataset.theme = theme;
}

function setData(e) {
	e.preventDefault();

	const data = serializeForm(e.target);

	saveData(data);

	setTheme();
}

function getData() {
	const names = ['companyTitle', 'indentSize', 'personalCode1', 'personalCode2', 'personalCode3', 'theme'];

	return names.reduce((data, name) => {
		const item = { name, value: getItem(name) };

		data.push(item);

		return data;
	}, []);
}

function fillForm(data) {
	data.forEach(({ name, value }) => {

		const item = name === 'theme' ? document.querySelector(`[value = ${value}]`) : document.querySelector(`[name = ${name}]`);

		if (item.type === 'radio') {

			item.checked = true;
		} else {
			item.value = value;
		}
	});
}

function load() {
	const data = getData();

	setTheme();
	fillForm(data);
}


form.addEventListener('submit', setData);
document.addEventListener('DOMContentLoaded', load);







//custom dropDown

document.querySelectorAll('.preferences__dropdown').forEach(function (dropDownWrapper) {

	const dropDownBtn = dropDownWrapper.querySelector('.preferences__dropdown-btn');
	const dropDownList = dropDownWrapper.querySelector('.preferences__dropdown-list');
	const dropDownItems = dropDownWrapper.querySelectorAll('.preferences__dropdown-item');
	const dropDownArrow = dropDownWrapper.querySelector('.preferences__form-arrow');



	function toggleClass(item) {
		item.classList.toggle('active');
	}

	function removeClass(item) {
		item.classList.remove('active');
	}

	function removeClassColl() {
		removeClass(dropDownBtn);
		removeClass(dropDownList);
		removeClass(dropDownArrow);
	}

	dropDownBtn.addEventListener('click', function () {
		toggleClass(dropDownList);
		toggleClass(dropDownArrow);
		this.classList.toggle('active');
	});

	dropDownItems.forEach(function (itemList) {
		itemList.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			removeClassColl();

		});
	});

	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			removeClassColl();
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			removeClassColl();
		}
	});
});