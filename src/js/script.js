let button = document.querySelector('#button')
let close = document.querySelector('#close')
let modalWindow = document.querySelector('#modal')


button.addEventListener('click', () => {
    modal.classList.add('modal_active');
});

close.addEventListener('click', () => {
    modal.classList.remove('modal_active');
});