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