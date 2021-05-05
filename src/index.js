import './styles.css';
import itemsTemlate from './templates/menu-items.hbs';
import card from './menu.json';

const checkboxEl = document.querySelector("#theme-switch-toggle");
const bodyEl = document.querySelector("body");
const menuEl = document.querySelector(".js-menu");

// шаблон

const markup = itemsTemlate(card);
menuEl.insertAdjacentHTML('beforeend', markup);


// local storage
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (!localStorage.getItem('theme')) {
    bodyEl.classList.add('light-theme');
    localStorage.setItem('theme', Theme.LIGHT);
}

if (localStorage.getItem('theme') === Theme.LIGHT) {
    bodyEl.classList.remove('dark-theme');
    bodyEl.classList.add('light-theme');
    checkboxEl.checked = false;
}

if (localStorage.getItem('theme') === Theme.DARK) {
    bodyEl.classList.add('dark-theme');
    bodyEl.classList.remove('light-theme');
    checkboxEl.checked = true;
}

// change theme

checkboxEl.addEventListener("change", onChangeTheme);

function onChangeTheme() {
    if (checkboxEl.checked) {
        bodyEl.classList.remove("light-theme");
        bodyEl.classList.add("dark-theme");
        localStorage.setItem('theme', Theme.DARK);
        return;
    }
    if (!checkboxEl.checked) {
        bodyEl.classList.add("light-theme");
        bodyEl.classList.remove("dark-theme");
        localStorage.setItem('theme', Theme.LIGHT);
    }
}
