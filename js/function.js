let bestPrice = 1249;
let memoryCost = 0;
let storageCost = 0;
let deliveryCost = 0;

function updateTotal (memoryCost, storageCost , costElementId, costELementValue)
{
    let totalPrice = bestPrice + memoryCost + storageCost + deliveryCost ;

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('discounted-price').innerText = totalPrice;
    document.getElementById(costElementId).innerText = costELementValue;
}

document.getElementById('danger').addEventListener('click',function(event)
{
    switch(event.target.id)
    {
        case 'memory-button8GB':
            updateTotal(memoryCost = 0,storageCost, 'memory-cost' , memoryCost);
            break;
        case 'memory-button16GB':
            updateTotal(memoryCost = 100,storageCost, 'memory-cost' , memoryCost);
            break;
        case 'storage-button256GB':
            updateTotal(memoryCost,storageCost =0, 'storage-cost' , storageCost);
            break;
        case 'storage-button512GB' :
            updateTotal(memoryCost,storageCost = 100, 'storage-cost' , storageCost);
            break;        
        case 'storage-button1TB' :
            updateTotal(memoryCost,storageCost =100, 'storage-cost' ,storageCost);
            break;
        case 'delivery-buttonfree' :
            updateTotal(memoryCost,storageCost, 'delivery-cost' , deliveryCost=0);
            break;    
         case 'delivery-buttonCharge' :
            updateTotal(memoryCost,storageCost, 'delivery-cost' , deliveryCost=20);
            break;   
         case 'promo-button' :
             updatedDiscountPrice();   
    }
})

function updatedDiscountPrice()
{
    const promoInputText = document.getElementById('promo-input').nodeValue;
    if(promoInputText='stevekaku')
    {
        const discountedPriceText = document.getElementById('discounted-price').innerText;
        const discountedAmount = parseFloat(discountedPriceText);
        let calcDiscountedPrice = discountedAmount - (discountedAmount * 20/100);
        document.getElementById('discounted-price').innerText=calcDiscountedPrice;
        promoInputText.value='';
    }
}
