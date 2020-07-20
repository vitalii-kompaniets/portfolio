$(document).ready(function () {
    let containerEl = document.querySelector('#portfolio-projects');
        let mixer = mixitup(containerEl, {
            classNames: {
                block: ""
            }
        }
    );

    // Fix-menu
    window.addEventListener('scroll', function(){
        const fixMenu = document.querySelector('.fix-menu');

        if(this.pageYOffset > 50){
            fixMenu.classList.add('active');
        }
        else {
            fixMenu.classList.remove('active');
        }
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
    };

    // Form send
    $('#contacts-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            theme: {
                required: true
            },
            message: {
                required: true
            }
        },

        messages: {
            email: {
                required: 'Введите Email',
                email: 'Некорректный Email'
            },
            theme: {
                required: 'Введите тему сообщения'
            },
            message: {
                required: 'Введите текст сообщения'
            }
        }
    });

    // Back top button
    $('#backTop').hide();
    $(window).scroll(function () {
        
        if($(this).scrollTop() > 200) {
            $('#backTop').fadeIn();
        }

        else {
            $('#backTop').fadeOut();
        }
    });

    // Page Nav pagination
    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    })
});
