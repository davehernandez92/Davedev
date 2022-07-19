document.addEventListener('DOMContentLoaded', () => {
    VANTA.NET({
        el: "#container",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      })
});

// Variables 

const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.nav__container');
const title = document.querySelector('.title');
const cta = document.querySelector('.cta');

// Hamburger menu on click 
hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('is-active');
    menu.classList.toggle('display')
    menu.classList.toggle('active')
    title.classList.toggle('display')
    cta.classList.toggle('display')
});

