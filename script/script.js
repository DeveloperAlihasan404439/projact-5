const myProductBtn = (id, inputId) =>{
    const myPurchaseId = document.getElementById(id)
    document.getElementById(inputId).addEventListener('keyup', event => {
        const valueString = event.target.value;
        const value = parseInt(valueString);
        if (typeof value === 'number') {
            if (value > 0) {
                myPurchaseId.style.backgroundColor = 'black'
                // myPurchaseId.style.backgroundColor = '#E527B2'
                myPurchaseId.removeAttribute('disabled')
            }
            else {
                myPurchaseId.setAttribute('disabled', true)
        
            }
        }
    })

}




let prodack = 0;
const myProdackSum = (name, items, inputFiled, price) => {
    // set name in totle mamo 
    const nameItems = document.getElementById(name).innerText;
    const uptadedTextItems = document.querySelector("#my-text")
    const createLiList = document.createElement('li')
    createLiList.classList = 'text-2xl font-medium text-blanck ml-3 pb-2 product-item';
    createLiList.style.listStyleType = 'decimal'
    createLiList.innerText = nameItems;
    uptadedTextItems.appendChild(createLiList);
    // items 
    const prodackItems = document.getElementById(items);
    // stap input filt value assecc 
    const inputFiledValue = document.getElementById(inputFiled).value;
    const prodackIpuitNumber = parseInt(inputFiledValue)
    prodack += prodackIpuitNumber;
    // stap set items in the input tag in number
    prodackItems.innerText = prodack;
    // stap price innerText access 
    const prodackPrice = document.getElementById(price).innerText;
    const prodackPricesNumber = parseInt(prodackPrice)
    const totleProdackPrices = prodackPricesNumber * prodack;
    const uptadedMyPrices = document.querySelector("#proces-taka")
    uptadedMyPrices.innerText = totleProdackPrices;
    const totleProdack = document.querySelector("#totle-prodack")
    totleProdack.innerText = prodack
    const myPurchaseId = document.getElementById('mypurchase')
    if (prodack > 0) {
        myPurchaseId.style.backgroundColor = 'black'
        myPurchaseId.removeAttribute('disabled')
    }
    else {
        myPurchaseId.setAttribute('disabled', true)

    }

}
// go to home page refrehs the pag in home 
document.getElementById('go-to-home2').addEventListener('click', () => {
    window.location.href = '../index.html'
})