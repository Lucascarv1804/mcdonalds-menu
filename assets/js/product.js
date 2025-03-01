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

// Adicionar item ao carrinho e abrir/fechar o carrinho
const cartContainer = document.querySelector('.shadow');
const addToCartBtn = document.querySelector('.add-to-cart');
const closeCartBtn = document.querySelector('.close-cart');

addToCartBtn.addEventListener('click', () => {
    cartContainer.classList.add('active');
});

closeCartBtn.addEventListener('click', (e) => {
    cartContainer.classList.remove('active');
});

cartContainer.addEventListener('click', (e) => {
    if (e.target === cartContainer) {
        cartContainer.classList.remove('active');
    }
});

// funcionamento dos botoes
const actionBtns = document.querySelectorAll('.btn');
const quantity = document.querySelector('.quantity');

let counter = 1;

actionBtns.forEach((btn) => {

    btn.addEventListener('click', (e) => {

        if(btn.classList.contains('increase')) {
            counter++;
            quantity.textContent = counter;
        } else if(btn.classList.contains('decrease')) {
            if(counter <= 1) {
                return
            } else {
                counter--;
                quantity.textContent = counter;
            }

        }
    });

});
