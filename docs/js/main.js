$(document).ready(function () {
    let containerEl = document.querySelector('#portfolio-projects');
    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    }
)});

// fake-placeholder
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