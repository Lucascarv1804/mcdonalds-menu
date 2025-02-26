const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const quantity = document.querySelector('.quantity');
const price = document.querySelector('.price');

let count = 1;
let priceNum = parseFloat(price.textContent);
console.log(priceNum)
let actualPrice = priceNum;
console.log(actualPrice);

increaseBtn.addEventListener('click', () => {
    count++;
    quantity.innerHTML = count;

    actualPrice += priceNum;
    price.textContent = actualPrice.toFixed(2);
});

decreaseBtn.addEventListener('click', () => {
    count--;
    if (count < 1) {
        count = 1;
        return;
    }
    quantity.innerHTML = count;

    actualPrice -= priceNum;
    price.textContent = actualPrice.toFixed(2);
});

document.addEventListener('DOMContentLoaded', () => {
    const productInfo = JSON.parse(localStorage.getItem('selectedProduct'));

    if (productInfo) {
        document.querySelector('.product-title').textContent = productInfo.title;
        document.querySelector('.price').textContent = `R$ ${productInfo.price.toFixed(2)}`;
        document.querySelector('.product-description').textContent = productInfo.desc;

        const productImg = document.querySelector('.product-img');

        productImg.setAttribute('src', productInfo.image);
        console.log('Imagem carregada:', productInfo.image);

    } else {
        console.log('Nenhum produto selecionado!');
    }
});
