let data_block2 = document.querySelector('.data-block2');

let btn_groups = document.querySelector('.btn-groups');

let cancel = document.querySelector('.cancel');

let plus_btn1 = document.querySelector('.plus-btn1');
let plus_btn2 = document.querySelector('.plus-btn2');
let plus_btn3 = document.querySelector('.plus-btn3');
let plus_btn4 = document.querySelector('.plus-btn4');
let plus_btn5 = document.querySelector('.plus-btn5');

let square1 = document.querySelector('.square1');
let square2 = document.querySelector('.square2');
let square3 = document.querySelector('.square3');
let square4 = document.querySelector('.square4');
let square5 = document.querySelector('.square5');


data_block2.addEventListener('click', function () {
    btn_groups.style.display = 'flex'
});

cancel.addEventListener('click', function () {
    btn_groups.style.display = 'none'
});

plus_btn1.addEventListener('click', function () {
    square1.style.display = 'block'
});
plus_btn2.addEventListener('click', function () {
    square2.style.display = 'block'
});
plus_btn3.addEventListener('click', function () {
    square3.style.display = 'block'
});
plus_btn4.addEventListener('click', function () {
    square4.style.display = 'block'
});
plus_btn5.addEventListener('click', function () {
    square5.style.display = 'block'
});


