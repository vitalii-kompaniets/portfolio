// Mobile Menu
const mobileMenuToggle = document.querySelector('.toggle-menu');
const mobMenu = document.querySelector('.header-menu');
const overlay = document.querySelector('#overlay');
const bodyElement = document.body;

mobileMenuToggle.addEventListener('click', function(){
    mobMenu.classList.toggle('active');
    this.classList.toggle('active');
    overlay.classList.toggle('active');
    bodyElement.classList.toggle('active');
});

window.addEventListener('resize', function(){
    mobMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    overlay.classList.remove('active');
    bodyElement.classList.remove('active');
});

mobMenu.addEventListener('click', function(){
    this.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    overlay.classList.remove('active');
    bodyElement.classList.remove('active');
});
