//聯絡客服的顯示
let chat_button = document.querySelector('.chat-icon');
let close_btn = document.querySelector('.close');
let chatbox = document.querySelector('.chatbox');   
chat_button.addEventListener('click',function(){
    if(chatbox.style.display=="none"){
        chatbox.style.display="flex";
    }else{
        chatbox.style.display="none";
    }    
});
close_btn.addEventListener('click',function(){
    if(chatbox.style.display=="flex"){
        chatbox.style.display="none";
    }
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