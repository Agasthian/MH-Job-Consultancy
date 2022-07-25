// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', ()=>{
    navUL.classList.toggle('show');
})

// Animate on Scroll - library - config
AOS.init();