let top_img = document.querySelector('.top-img');

let top_title = document.querySelector('.top-title');

let top_price = document.querySelector('.top-price')

let top_status = document.querySelector('.top-status');

let top_delete = document.querySelector('.top-delete');


let bottom_img = document.querySelector('.bottom-img');

let bottom_title = document.querySelector('.bottom-title');

let bottom_price = document.querySelector('.bottom-price')

let bottom_status = document.querySelector('.bottom-status');

let bottom_delete = document.querySelector('.bottom-delete');


let all_delete = document.querySelector('.all-delete');

let data_block2 = document.querySelector('.data-block2');

top_delete.addEventListener('click', function () {
    top_img.style.display = 'none'
    top_title.style.display = 'none'
    top_price.style.display = 'none'
    top_status.style.display = 'none'
    top_delete.style.display = 'none'
});

bottom_delete.addEventListener('click', function () {
    bottom_img.style.display = 'none'
    bottom_title.style.display = 'none'
    bottom_price.style.display = 'none'
    bottom_status.style.display = 'none'
    bottom_delete.style.display = 'none'
});

all_delete.addEventListener('click', function () {
    data_block2.style.display = 'none'
});