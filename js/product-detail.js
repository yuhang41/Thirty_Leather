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
// //color
// let colorCheckboxs = document.querySelectorAll(".color-checkbox");
// let colorButtons =document.querySelectorAll('.color-button');
// colorCheckboxs.forEach((colorCheckbox,index) => {colorCheckbox.addEventListener('click',function(){
//   if(colorCheckbox.checked){
//     colorButtons[index].style.background = colorCheckbox.value;    
//   }else{
//     colorButtons[index].style.background = '#fff'; 
//   }
// })});

//size
// let sizeCheckboxs = document.querySelectorAll('.size-checkbox');
// let sizeButtons = document.querySelectorAll('.size-button');
// sizeCheckboxs.forEach((checkbox,index) => {checkbox,addEventListener('click',function(){
//   console.log('123');
//   if(checkbox.checked){
//     sizeButtons[index].style.background = '#9e9e9e';    
//   }else{
//     sizeButtons[index].style.background = 'none'; 
//   }
// })});

