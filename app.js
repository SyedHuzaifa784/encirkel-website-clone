const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-item');
const navbar = document.querySelector('.header-area');

burger.addEventListener('click', () => {
    navList.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-res');
});
