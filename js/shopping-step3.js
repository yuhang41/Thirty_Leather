let order_total = document.querySelector('.order-total');
let order_commodity = document.querySelector('.order-commodity');
let commodity_content = document.querySelector('.commodity-content');

function order_totalHandler(){
    order_total.classList.toggle('active');
    order_commodity.classList.toggle('active');
    commodity_content.classList.toggle('active');
}
order_total.addEventListener('click',order_totalHandler);