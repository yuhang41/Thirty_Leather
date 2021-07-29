let data_block2 = document.querySelector('.data-block2');

let btn_groups = document.querySelector('.btn-groups');

let cancel = document.querySelector('.cancel');

// 編輯
data_block2.addEventListener('click', function () {
    btn_groups.style.display = 'flex'

    document.querySelector(".content1").readOnly = false;
    document.querySelector(".content2").readOnly = false;
    document.querySelector(".content3").readOnly = false;
    document.querySelector(".content4").readOnly = false;
    document.querySelector(".content5").readOnly = false;
});

// 取消
cancel.addEventListener('click', function () {
    btn_groups.style.display = 'none'

    document.querySelector(".content1").readOnly = true;
    document.querySelector(".content2").readOnly = true;
    document.querySelector(".content3").readOnly = true;
    document.querySelector(".content4").readOnly = true;
    document.querySelector(".content5").readOnly = true;
});


let click_first = document.querySelector('.click-first');
let click_second = document.querySelector('.click-second');
let click_third = document.querySelector('.click-third');
let click_fourth = document.querySelector('.click-fourth');
let click_fifth = document.querySelector('.click-fifth');


let square1 = document.querySelector('.square1');
let square2 = document.querySelector('.square2');
let square3 = document.querySelector('.square3');
let square4 = document.querySelector('.square4');
let square5 = document.querySelector('.square5');

// + icon
let plus_1 = document.querySelector('.plus-1');
let plus_2 = document.querySelector('.plus-2');
let plus_3 = document.querySelector('.plus-3');
let plus_4 = document.querySelector('.plus-4');
let plus_5 = document.querySelector('.plus-5');

// - icon
let minus_1 = document.querySelector('.minus-1');
let minus_2 = document.querySelector('.minus-2');
let minus_3 = document.querySelector('.minus-3');
let minus_4 = document.querySelector('.minus-4');
let minus_5 = document.querySelector('.minus-5');

let clickTime = 0;

// 訂單明細按鈕
click_first.onclick = function () {
    clickTime++;

    if (clickTime % 2 == 0) {
        plus_1.style.display = 'block'

        minus_1.style.display ='none';

        square1.style.display = 'none';
    }

    else {
        minus_1.style.display = 'block';

        plus_1.style.display = 'none';

        square1.style.display = 'block';
    }
}

click_second.onclick = function () {
    clickTime++;

    if (clickTime % 2 == 0) {
        plus_2.style.display = 'block'

        minus_2.style.display ='none';

        square2.style.display = 'none';
    }

    else {
        minus_2.style.display = 'block';

        plus_2.style.display = 'none';

        square2.style.display = 'block';
    }
}

click_third.onclick = function () {
    clickTime++;

    if (clickTime % 2 == 0) {
        plus_3.style.display = 'block'

        minus_3.style.display ='none';

        square3.style.display = 'none';
    }

    else {
        minus_3.style.display = 'block';

        plus_3.style.display = 'none';

        square3.style.display = 'block';
    }
}

click_fourth.onclick = function () {
    clickTime++;

    if (clickTime % 2 == 0) {
        plus_4.style.display = 'block'

        minus_4.style.display ='none';

        square4.style.display = 'none';
    }

    else {
        minus_4.style.display = 'block';

        plus_4.style.display = 'none';

        square4.style.display = 'block';
    }
}

click_fifth.onclick = function () {
    clickTime++;

    if (clickTime % 2 == 0) {
        plus_5.style.display = 'block'

        minus_5.style.display ='none';

        square5.style.display = 'none';
    }

    else {
        minus_5.style.display = 'block';

        plus_5.style.display = 'none';

        square5.style.display = 'block';
    }
}