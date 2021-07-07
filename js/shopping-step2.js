//商品清單收合
let order_total = document.querySelector('.order-total');
// let order_commodity = document.querySelector('.order-commodity');
// let commodity_content = document.querySelector('.commodity-content');

function order_totalHandler(){
    order_total.classList.toggle('active');    
}
order_total.addEventListener('click',order_totalHandler);

//input 取值
let input_name = document.querySelector('#orderer-name');
let input_phone = document.querySelector('#orderer-phone');
let addressee_name = document.getElementById('addressee-name');
let addressee_phone = document.getElementById('addressee-phone');
let same_check = document.getElementById('addressee-check');

function copyInformation(){
    if(same_check.checked == true){
        if(input_name.value == "" || input_phone.value == ""){
            alert("請填入訂購人資訊");
            same_check.checked = false;
        }else{
            let copyName = input_name.value;
            let copyPhone = input_phone.value; 
            addressee_name.setAttribute("placeholder",copyName);
            addressee_phone.setAttribute("placeholder",copyPhone);
        }
           
    }else {
        addressee_name.placeholder="林土木";
        addressee_phone.placeholder="0900 - 123456";
    } 
}


