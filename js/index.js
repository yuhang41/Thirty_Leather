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

//swiper
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});