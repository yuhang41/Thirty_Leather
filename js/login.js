let data_block2 = document.querySelector('.data-block2');

let btn_groups = document.querySelector('.btn-groups');

let cancel = document.querySelector('.cancel');

data_block2.addEventListener('click', function () {
    btn_groups.style.display = 'flex'
});

cancel.addEventListener('click', function () {
    btn_groups.style.display = 'none'
});
