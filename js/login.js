let data_block2 = document.querySelector('.data-block2');

let btn_groups = document.querySelector('.btn-groups');

let cancel = document.querySelector('.cancel');

let content_edits = [...document.querySelectorAll('.content-edit')];

// 編輯
data_block2.addEventListener('click', function () {    
    judgment('flex',false);
});
// 取消
cancel.addEventListener('click', function () {
    judgment('none',true);
});
function judgment(display,readOnly){
    btn_groups.style.display = display;

    content_edits.forEach(edit=>{
        edit.readOnly = readOnly;
    });
    
}

let click_toggles = [...document.querySelectorAll('.click-toggle')];
let squares = [...document.querySelectorAll('.square')];
// + icon
let pluss = [...document.querySelectorAll('.plus')];
// - icon
let minuss = [...document.querySelectorAll('.minus')];

// let clickTime = 0;

// 訂單明細按鈕
click_toggles.forEach((click_toggle,index)=>{
    click_toggle.addEventListener('click',()=>{        
        pluss[index].classList.toggle('active');
        minuss[index].classList.toggle('active');
        squares[index].classList.toggle('active');
    });
});

// click_first.onclick = function () {
//     clickTime++;

//     if (clickTime % 2 == 0) {
//         plus_1.style.display = 'block'

//         minus_1.style.display ='none';

//         square1.style.display = 'none';
//     }

//     else {
//         minus_1.style.display = 'block';

//         plus_1.style.display = 'none';

//         square1.style.display = 'block';
//     }
// }

// click_second.onclick = function () {
//     clickTime++;

//     if (clickTime % 2 == 0) {
//         plus_2.style.display = 'block'

//         minus_2.style.display ='none';

//         square2.style.display = 'none';
//     }

//     else {
//         minus_2.style.display = 'block';

//         plus_2.style.display = 'none';

//         square2.style.display = 'block';
//     }
// }

// click_third.onclick = function () {
//     clickTime++;

//     if (clickTime % 2 == 0) {
//         plus_3.style.display = 'block'

//         minus_3.style.display ='none';

//         square3.style.display = 'none';
//     }

//     else {
//         minus_3.style.display = 'block';

//         plus_3.style.display = 'none';

//         square3.style.display = 'block';
//     }
// }

// click_fourth.onclick = function () {
//     clickTime++;

//     if (clickTime % 2 == 0) {
//         plus_4.style.display = 'block'

//         minus_4.style.display ='none';

//         square4.style.display = 'none';
//     }

//     else {
//         minus_4.style.display = 'block';

//         plus_4.style.display = 'none';

//         square4.style.display = 'block';
//     }
// }

// click_fifth.onclick = function () {
//     clickTime++;

//     if (clickTime % 2 == 0) {
//         plus_5.style.display = 'block'

//         minus_5.style.display ='none';

//         square5.style.display = 'none';
//     }

//     else {
//         minus_5.style.display = 'block';

//         plus_5.style.display = 'none';

//         square5.style.display = 'block';
//     }
// }