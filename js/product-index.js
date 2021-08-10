let clickables = document.querySelectorAll('.clickable');
let anim = document.querySelectorAll('.anim');
clickables.forEach((clickable,index) =>{
    clickable.addEventListener('click',()=>{
        anim[index].classList.toggle('active');
    });
});

//navbar
//When the user scrolls the page, execute myFunction
window.onscroll = function(){myFunction()};
//取得螢幕的高度
var  screenHeight = screen.height;

let backTopBtn = document.querySelector('.back-top');
let left_menu = document.querySelector('.commodity-menu');
let commodityOpt = document.querySelector('.all-commodity');
let left_menu_top = left_menu.offsetTop + 100;
function myFunction() {  
  if(window.pageYOffset >= left_menu_top){
    commodityOpt.classList.add("sticky");
  } else{
    commodityOpt.classList.remove("sticky");
  }
  if (window.pageYOffset >= screenHeight) {
    backTopBtn.classList.add("sticky");
  } else {
    backTopBtn.classList.remove("sticky");
  }
}

//回到上層按鈕
let anchor = document.querySelector('.a-anchor');
console.log(anchor);
anchor.addEventListener('click',function(){
  window.scrollTo(0, top); 
})