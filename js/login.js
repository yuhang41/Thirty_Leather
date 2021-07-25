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

let clickTime = 0;

// 訂單明細按鈕
plus_btn1.onclick = function () {
    clickTime++;

    if (clickTime % 2 == 0) {
        this.innerHTML = '+';

        square1.style.display = 'none';
    }

    else {
        this.innerHTML = '-';

        square1.style.display = 'block';
    }
}

plus_btn2.onclick = function () {
    clickTime++;

    if (clickTime % 2 == 0) {
        this.innerHTML = '+';

        square2.style.display = 'none';
    }

    else {
        this.innerHTML = '-';

        square2.style.display = 'block';
    }
}

plus_btn3.onclick = function () {
    clickTime++;

    if (clickTime % 2 == 0) {
        this.innerHTML = '+';

        square3.style.display = 'none';
    }

    else {
        this.innerHTML = '-';

        square3.style.display = 'block';
    }
}

plus_btn4.onclick = function () {
    clickTime++;

    if (clickTime % 2 == 0) {
        this.innerHTML = '+';

        square4.style.display = 'none';
    }

    else {
        this.innerHTML = '-';

        square4.style.display = 'block';
    }
}

plus_btn5.onclick = function () {
    clickTime++;

    if (clickTime % 2 == 0) {
        this.innerHTML = '+';

        square5.style.display = 'none';
    }

    else {
        this.innerHTML = '-';

        square5.style.display = 'block';
    }
}