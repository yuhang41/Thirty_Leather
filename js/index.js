AOS.init({
  duration: 1200,
})

//聯絡客服的顯示
document.querySelector('.more-button').addEventListener('click', function () {
    document.querySelector('.chatbot').classList.toggle('active');
});


//Pagination Swiper
var myswiper1 = new Swiper('.myswiper1', {
  loop:true,
  autoplay: {
    delay: 3000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
});

// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    // slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 1350px
      1351:{
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1352:{
        slidesPerView: 'auto',
      },
      1350:{
        slidesPerView: 'auto',
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },      
    }
  });
let photo_Button = document.querySelector('.photo-button');
let closes = document.querySelector('.studio-photo-close');
let studio_Photo = document.querySelector('.studio-photo');
closes.addEventListener('click',function(){  
  studio_Photo.classList.remove('active');
  
},false);
photo_Button.addEventListener('click',function(){
  studio_Photo.classList.add('active');
});


