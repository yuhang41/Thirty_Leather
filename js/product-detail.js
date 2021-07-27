AOS.init({
    duration: 1200,
  })
// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

//tab切換分頁
$(".tab").each(function (index) {
    $(this).click(function (e) {
        triggletab();
        triigletabcontent();
        $(this).toggleClass("active");
        $(".tab-c")
            .eq(index)
            .toggleClass("active");
    });
});
//to remove all tab headers
function triggletab() {
    $(".tab").each(function () {
        $(this).removeClass("active");
    });
}
//triggle the tab content
function triigletabcontent() {
    $(".tab-c").each(function () {
        $(this).removeClass("active");
    });
}

//shoes parallax
document.addEventListener("mousemove",parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer=>{
        const speed = layer.getAttribute('data-speed');

        const x =(window.innerWidth - e.pageX*speed)/100
        const y =(window.innerHeight - e.pageY*speed)/100
        layer.style.transform =`translateX(${x}px) translateY(${y}px)`

    })
}

//shoes 點擊效果
$(".click-button").each(function (index) {
  $(this).click(function (e) {
      // removeClick();
      $(".click-button")
          .eq(index)
          .toggleClass("active");
  });
});
 
//development-process-swiper
 let development_steps=['初登場','開發','合作廠商','結語']
 var swiper3 = new Swiper(".mySwiper3", {
   slidesPerView: 'auto',
   spaceBetween: 30, 
   watchSlidesVisibility: true,
    watchSlidesProgress: true,   
   navigation: {
     nextEl: ".button-next",      
   },
   pagination: {
     el: ".pagination-next",
     clickable: true,
     renderBullet: function (index, className) {
       return '<span class="' + className + '">' + '<p>' +development_steps[index]+ '</p>'+ "</span>";
     },
   },
   thumbs: {
    swiper: swiper4,
  },  
 });
 var swiper4 = new Swiper(".mySwiper4", {
   loop:true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: ".button-next",      
  },
  pagination: {
    el: ".pagination-next",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '<p>' +development_steps[index]+ '</p>'+ "</span>";
    },
  },
  thumbs: {
    swiper: swiper3,
  },
});

function updateQty(element,number){
  var qtyArea = element.parentElement;
  var input = qtyArea.querySelector('input');
  var qty = Number(input.value);
  var newQty = qty + number;
  if(newQty < 1){
    input.value = 1;
  }else{
    input.value= newQty;
}
}

//加法計算
var plusBtns = document.querySelectorAll('.plus-btn');
plusBtns.forEach(function(plusBtn){
    plusBtn.addEventListener('click',function(){
        updateQty(this,1);
    });
});
//減法計算
var minusBtns = document.querySelectorAll('.minus-btn');
minusBtns.forEach(function(minusBtn){
    minusBtn.addEventListener('click',function(){
        updateQty(this,-1);
    });
});

//size-key
let size_key = document.querySelector('.size-key');
let size_radios = document.querySelectorAll('.size-checkbox');
size_radios.forEach(radio=>{
  radio.addEventListener('click',()=>{
    size_key.textContent = radio.checked ? radio.dataset.key : 0;
  })
});

//加入購物車效果
// let clickables = document.querySelectorAll('.clickable');
// let anim = document.querySelectorAll('.anim');
// clickables.forEach((clickable,index) =>{
//     clickable.addEventListener('click',()=>{
//         anim[index].classList.toggle('active');
//     });
// });

//加入購物車效果
let putcart = document.querySelector('.putcart');
let check = document.querySelector('.fa-check');
let orderBuy = document.querySelector('.order-buy')
let cartText = window.getComputedStyle(orderBuy,'::after');
let min = false;
console.log(cartText);

putcart.addEventListener('click',function(e){
  cartClick();
  window.setTimeout(function(){
    cartUnclick();
  },500)
  cartDelete();
    
});

function cartClick(){
  putcart.firstChild.data='';
  check.style.display='block';
  putcart.style.background='#6ba2f2';
  orderBuy.classList.add('active');
};

function cartUnclick(){
  if( orderBuy.className == 'order-buy active'){
    putcart.firstChild.data='加入購物車';
    check.style.display='none';
    putcart.style.background='unset';
    orderBuy.classList.add('active2');
    min = true;
  }
  
};
function cartDelete(){
  if(min){
    putcart.firstChild.data='加入購物車';
    check.style.display='none';
    putcart.style.background='unset';
    orderBuy.classList.remove('active');
    orderBuy.classList.remove('active2');
    min = false;
  }
}
