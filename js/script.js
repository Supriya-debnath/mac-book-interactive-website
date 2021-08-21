function amount(product,memory,value){
    const memoryCost = document.getElementById(memory);
    const memoryText =memoryCost.innerText
    memoryCost.innerText = value;

}

function updateTotal(update){
    const total = document.getElementById(update);
    const totalPrice = parseInt(total.innerText);
    total.innerText = totalPrice;
    return totalPrice;
}
// calculate total price
function finalUpdate(){
    const bestPrice = document.getElementById('best-price');
    const bestAmount = parseFloat(bestPrice.innerText);

    const finalPrice = updateTotal('memory-cost')
    const storageCost = updateTotal('storage-cost');
    const deliveryCost = updateTotal('delivery-cost');
    const finalTotal = bestAmount + finalPrice + storageCost + deliveryCost;

    const totalA = document.getElementById('total-price');
   const TotalAmount = totalA.innerText;
   totalA.innerText = finalTotal;

   const total = document.getElementById('total');
   const TotalAmountPrice = total.innerText;
   total.innerText = finalTotal;
     
}
// promo code
const totalPrice1 = document.getElementById('total-price');
const totalPrice2 = document.getElementById('total');
const promoInput = document.getElementById('promo-input');

function applyPromoCode(){
        const twentyPerCent = parseFloat(totalPrice1.innerText) * 0.2;
        const discount = parseFloat(totalPrice1.innerText) - twentyPerCent;
        totalPrice2.innerText = discount;
    }

    document.getElementById('apply-button').addEventListener('click', function(){
        if(promoInput.value === "stevekaku"){
            applyPromoCode();
            promoInput.value = '';
        }
});




// //update Extra memory cost 
document.getElementById('memory-button').addEventListener('click',function(){
    amount('memory-button', 'memory-cost', 0);
    finalUpdate();
    
});

 document.getElementById('input-btn').addEventListener('click',function(){
    amount('input-btn', 'memory-cost', 180);
    finalUpdate();   
});


// // update Extra storage cost
document.getElementById('storage256-btn').addEventListener('click',function(){
    amount('storage256-btn', 'storage-cost', 0);
    finalUpdate();
   
});

document.getElementById('storage512-btn').addEventListener('click',function(){
    amount('storage512-btn', 'storage-cost', 100);
    finalUpdate();
});

document.getElementById('storage1TB-btn').addEventListener('click',function(){
    amount('storage1TB-btn', 'storage-cost', 180);
    finalUpdate();
});


// // update delivery option

document.getElementById('prime-delivery').addEventListener('click',function(){
    amount('prime-delivery', 'delivery-cost', 0);
    finalUpdate();
});

document.getElementById('delivery-express').addEventListener('click',function(){
    amount('delivery-express', 'delivery-cost', 20);
    finalUpdate();

});












