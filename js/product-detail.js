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
  if(newQty > input.max){
    input.value = input.max;
  }else if(newQty < 1){
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
let size_key = document.querySelector('.size-eu');
let size_radios = document.querySelectorAll('.size-checkbox');
size_radios.forEach(radio=>{
  radio.addEventListener('click',()=>{
    size_key.textContent = radio.checked ? radio.dataset.key : 0;
  })
});


//加入購物車效果
let putcart = document.querySelector('.putcart');
let check = document.querySelector('.fa-check');
let orderBuy = document.querySelector('.order-buy')
let cartText = window.getComputedStyle(orderBuy,'::after');
let min = true;

putcart.addEventListener('click',function(e){
  if(eval(putcart.dataset.boolin)){
    if(min){
      min = false;
      cartClick();
      
      let promise = new Promise((resolve)=>{
        window.setTimeout(function(){
          cartUnclick();
          return resolve();
        },500)    
      })
  
      promise.then(()=>{
        window.setTimeout(function(){
          cartDelete();
        },250)       
      });
    }
  }else{
    if(min){
      min = false;
      subscription();
      
      let promise = new Promise((resolve)=>{
        window.setTimeout(function(){
          subscriptionUnclick();
          return resolve();
        },500)    
      })
  
      promise.then(()=>{
        window.setTimeout(function(){
          subscriptionDelete();
        },250)       
      });
    }
  }
});
function subscription(){
  everyStyle('','block','#6ba2f2','subscription');
}
function subscriptionUnclick(){  
  if( orderBuy.classList.contains('subscription')){
    everyStyle('加入購物車','none','unset','subscription2');
  }  
};
function subscriptionDelete(){       
  AllDelete('subscription','subscription2');
}

function cartClick(){  
  everyStyle('','block','#6ba2f2','active');
};
function cartUnclick(){  
  if( orderBuy.className == 'order-buy active'){
    everyStyle('加入購物車','none','unset','active2');
  }  
};
function cartDelete(){
  AllDelete('active','active2');    
}

function AllDelete(class1,class2){
  orderBuy.classList.remove(class1);
  orderBuy.classList.remove(class2);
  min = true;
}
function everyStyle(data,display,background,className){
  putcart.firstChild.data = data;
  check.style.display = display ;
  putcart.style.background = background;
  orderBuy.classList.add( className );
}

//navbar
//When the user scrolls the page, execute myFunction
window.onscroll = function(){myFunction()};
//取得螢幕的高度
var  screenHeight = screen.height;

let backTopBtn = document.querySelector('.back-top');
let commodityOpt = document.querySelector('.all-commodity');
function myFunction() {
  if(window.pageYOffset >= screenHeight/2){
    commodityOpt.classList.add("sticky");
  }else{
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
