let pricesUpdated = 0;
// onclick the function code in card 
const useCardFunction = (data) => {
    const dates = data.childNodes[3];
    // create the prodack name and create the li tag 
    const name = dates.childNodes[3].innerText;
    const uptadedText = document.querySelector("#updated-text")
    const createLi = document.createElement('li')
    createLi.classList = 'text-2xl font-medium text-blanck ml-3';
    createLi.style.listStyleType = 'decimal'
    createLi.innerText = name;
    uptadedText.appendChild(createLi);
    // to take the crads prices in tag
    const prices = dates.childNodes[5].childNodes[1].innerText;
    const pricesInt = parseInt(prices);
    pricesUpdated += pricesInt;
    const totleTakaText = document.getElementById('totle-taka')
    totleTakaText.innerText = pricesUpdated.toFixed(2);
    // botton enabole to disiabole in gatter than pricesUpdated
    const purchaseId = document.getElementById('purchase')
    if (pricesUpdated > 0) {
        purchaseId.style.backgroundColor = '#E527B2'
        purchaseId.removeAttribute('disabled')
    }
    else {
        purchaseId.setAttribute('disabled', true)

    }
    // button disabled and enabled code 
    const captureBtn = document.getElementById('capture-btn')
    if (pricesUpdated > 200) {
        captureBtn.style.backgroundColor = '#E527B2'
        return captureBtn.removeAttribute('disabled');
    }
    else {
        return captureBtn.setAttribute('disabled', true)
    };

}

document.getElementById('capture-btn').addEventListener('click', () => {
    const discountTakaText = document.getElementById('discount-taka')
    const discountTotleText = document.getElementById('discount-totle')
    // code in button disabled and enabled access the id
    const capture = document.getElementById('capture-input').value;
    if(capture === "SELL200"){
        const discount = (pricesUpdated / 100) * 20;
        const discountTotle = pricesUpdated - discount;
        discountTakaText.innerText = discount.toFixed(2);
        discountTotleText.innerText = discountTotle.toFixed(2);
    }
    else{
        alert('please right the token numper')
    }
});
// go to home page refrehs the pag in home 
document.getElementById('go-to-home').addEventListener('click', () => {
    window.location.href = '../index.html'
})