AOS.init({
  duration: 1200,
})

//聯絡客服的顯示
document.querySelector('.more-button').addEventListener('click', function () {
    document.querySelector('.chatbot').classList.toggle('active');
});


//Pagination Swiper
var myswiper1 = new Swiper('.myswiper1', {
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
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
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
  });