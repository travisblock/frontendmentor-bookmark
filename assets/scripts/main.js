const menuToggle = document.querySelector('#menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
const menuClose = document.querySelector('#menu-close');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('mobile-nav--open');
})

menuClose.addEventListener('click', () => {
    mobileNav.classList.remove('mobile-nav--open');
})
