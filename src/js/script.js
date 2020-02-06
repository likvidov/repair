
let button = document.querySelector('#button')
let close = document.querySelector('#close')
let modalWindow = document.querySelector('#modal')

new WOW().init();

button.addEventListener('click', () => {
    modal.classList.add('modal_active');
});

close.addEventListener('click', () => {
    modal.classList.remove('modal_active');
});

$(document).ready(function() {
    $('#brif-form').validate({
      rules: {
        username: {
          required: true,
          minlength: 2
        },
        phone: {
          required: true
        }
      },
      messages: {
        username: {
          required: "Укажите имя",
          minlength: jQuery.validator.format("Осталось смиволов: {0} ")
        },
        phone: "Введите ваш телефон"
      }
    });

    $('.phone').mask("+7 (999) 999-9999");

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});