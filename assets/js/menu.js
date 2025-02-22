const menu = [
    {
        id: 1,
        category: 'combos',
        title: 'McOferta média Big Mac Duplo',
        desc: 'Quatro hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergelim, acompanhamento e bebida.',
        price: 39.90,
        image: '../images/bigmac-duplo.png',
    },
    {
        id: 2,
        category: 'combos',
        title: 'Novo Brabo Melt Onion Rings',
        desc: 'Hambúrguer (100% carne bovina), queijo sabor cheddar derretido, molho cremoso, onion rings crocantes e pão tipo brioche levemente tostado.',
        price: 34.90,
        image: '../images/novo-brabo-melt-onion-rings.png',
    },
    {
        id: 3,
        category: 'combos',
        title: 'McCrispy Chicken Elite',
        desc: 'Filé de peito de frango temperado e empanado, queijo sabor cheddar, bacon crispy, maionese e pão tipo brioche.',
        price: 36.90,
        image: '../images/mccrispy-chicken-elite.png',
    },
    {
        id: 4,
        category: 'combos',
        title: 'Duplo Cheddar McMelt',
        desc: 'Dois hambúrgueres (100% carne bovina), queijo sabor cheddar derretido e molho especial do Cheddar McMelt no pão escuro com gergelim.',
        price: 33.90,
        image: '../images/duplo-cheddar-mcmelt.png',
    }
];


const menuContainer = document.getElementById('menu-items');

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `
            <div class="item">
                <div class="details">
                    <p class="item-title">${item.title}</h3>
                    <p class="item-desc">${item.desc}</p>
                    <span class="price">R$ ${item.price.toFixed(2)}</span>
                </div>

                <img class="item-pic" src="${item.image}">
            </div>
        `;
    });

    displayMenu = displayMenu.join('');
    
    menuContainer.innerHTML = displayMenu;
}

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
});

// filtro
const menuBtns = document.querySelectorAll('.menu-btn');

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        menuBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        const dataId = btn.dataset.id;

        let filterMenu = menu.filter(item => item.category === dataId);
        displayMenuItems(filterMenu);
    });
});

