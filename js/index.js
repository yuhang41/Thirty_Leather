let chat_button = document.querySelector('.chatbot');
let close_btn = document.querySelector('.close');
let chatbox = document.querySelector('.chatbox');
const click =0;    
chat_button.addEventListener('click',function(){
    if(click==0){
        chatbox.style.display="flex";
    }    
});
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
