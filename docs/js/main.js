$(document).ready(function () {
    let containerEl = document.querySelector('#portfolio-projects');
    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    }
)

    // Mobile Menu
    const mobileMenuToggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector('.header-menu');
    const overlay = document.querySelector('#overlay');

    mobileMenuToggle.addEventListener('click', function(){
        mobMenu.classList.toggle('active');
        this.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    window.addEventListener('resize', function(){
        mobMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        overlay.classList.remove('active');
    })

});

// Fake-placeholder
const formInputs = document.querySelectorAll('.form-field');

for (let item of formInputs) {

    const inputPlaceholder = item.nextElementSibling;

    item.addEventListener('click', function(){
        inputPlaceholder.classList.add('active');
    });

    item.addEventListener('blur', function() {
        if(this.value == '') {
        inputPlaceholder.classList.remove('active');
        }
    })
}

// Back top button
$('#backTop').hide();
$(window).scroll(function () {
    
    if($(this).scrollTop() > 200) {
        $('#backTop').fadeIn();
    }

    else {
        $('#backTop').fadeOut();
    }
})