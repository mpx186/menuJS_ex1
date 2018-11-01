const btn = document.querySelector('.burger');

const menu = document.querySelector('aside');

const burg_ico = document.querySelector('.fa-bars');
const x_ico = document.querySelector('.fa-times');


function showMenu() {
    menu.classList.toggle('active');
    burg_ico.classList.toggle('hide-icon');
    x_ico.classList.toggle('hide-icon');
}

btn.addEventListener('click', showMenu);