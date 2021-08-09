let add_shoppingCarts = document.querySelectorAll('.add-shoppingCart');
let check = document.querySelectorAll('.fa-check');
let orderBuy = document.querySelectorAll('.order-status')


add_shoppingCarts.forEach((shoppingCart,index)=>{
    shoppingCart.addEventListener('click',function(e){
        if(eval(shoppingCart.dataset.bool)){
            shoppingCart.dataset.bool = false;
            cartClick(index);
            
            let promise = new Promise((resolve)=>{
                window.setTimeout(function(){
                cartUnclick(index);
                return resolve();
                },500)    
            })
        
            promise.then(()=>{
                window.setTimeout(function(){
                cartDelete(index);
                },250)       
            });
        }      
    });
});

function cartClick(index){
    add_shoppingCarts[index].classList.add( 'active' );
    everyStyle('','block','active',index);
};

function cartUnclick(index){  
    if( orderBuy[index].classList.contains('active')){
        everyStyle('加入購物車','none','active2',index);
        add_shoppingCarts[index].classList.remove('active');
    }
};
function cartDelete(index){          
    orderBuy[index].classList.remove('active');
    orderBuy[index].classList.remove('active2');    
    add_shoppingCarts[index].dataset.bool = true;    
}

function everyStyle(data,display,className,index){
    add_shoppingCarts[index].firstChild.data = data;
    check[index].style.display = display ;
    orderBuy[index].classList.add( className );
}