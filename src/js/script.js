
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