let AllCommodity = document.querySelector('.AllCommodity');
let Snowshoe = document.querySelector('.Snowshoe');

function AllCommodityHandler(){
    AllCommodity.classList.toggle('active');
}
function SnowshoeHandler(){
    Snowshoe.classList.toggle('active');
}
AllCommodity.addEventListener('click',AllCommodityHandler);
Snowshoe.addEventListener('click',SnowshoeHandler);



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
//取得banner的高度
var  screenHeight = screen.height;
console.log(screenHeight);
let backTopBtn = document.querySelector('.back-top');
function myFunction() {
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