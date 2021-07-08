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

let tab = document.querySelectorAll('.tab');
let tab_c = document.querySelectorAll('.tab-c');

tab[index].addEventListener('click',function(){
    alert('有按到');
    removeTab();
    removeTabContent();
    tab[index].classList.add('active');
    tab_c[index].classList.add('active');
})

function removeTab(){
    tab.classList.remove("active");
}

function removeTabContent(){
    tab_c.classList.remove("active");
}