const menu = [
    {
        id: 1,
        category: 'combos',
        title: 'McOferta média Big Mac Duplo',
        desc: 'Quatro hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergelim, acompanhamento e bebida.',
        price: 39.90,
        image: '../images/burgers/combo-bigmac-duplo.png',
    },
    {
        id: 2,
        category: 'combos',
        title: 'Novo Brabo Melt Onion Rings',
        desc: 'Hambúrguer (100% carne bovina), queijo sabor cheddar derretido, molho cremoso, onion rings crocantes e pão tipo brioche levemente tostado, acompanhamento e bebida.',
        price: 34.90,
        image: '../images/burgers/combo-brabo-melt-onion-rings.png',
    },
    {
        id: 3,
        category: 'combos',
        title: 'McCrispy Chicken Elite',
        desc: 'Filé de peito de frango temperado e empanado, queijo sabor cheddar, bacon crispy, maionese e pão tipo brioche, acompanhamento e bebida.',
        price: 36.90,
        image: '../images/burgers/combo-mccrispy-chicken-elite.png',
    },
    {
        id: 4,
        category: 'combos',
        title: 'Duplo Cheddar McMelt',
        desc: 'Dois hambúrgueres (100% carne bovina), queijo sabor cheddar derretido e molho especial do Cheddar McMelt no pão escuro com gergelim, acompanhamento e bebida.',
        price: 33.90,
        image: '../images/burgers/combo-duplo-cheddar-mcmelt.png',
    },
    // Sanduiches
    {
        id: 5,
        category: 'lanches',
        title: 'Cheddar McMelt',
        desc: 'Hambúrguer (100% carne bovina), queijo sabor cheddar derretido e molho especial do Cheddar McMelt no pão escuro com gergelim.',
        price: 19.90,
        image: '../images/burgers/cheddar-mcmelt.png',
    },
    {
        id: 6,
        category: 'lanches',
        title: 'McNífico Bacon',
        desc: 'Hambúrguer (100% carne bovina), duas fatias de queijo sabor cheddar, bacon crocante, alface, tomate e maionese no pão com gergelim.',
        price: 24.90,
        image: '../images/burgers/mcnifico-bacon.png',
    },
    {
        id: 7,
        category: 'lanches',
        title: 'Big Mac',
        desc: 'Dois hambúrgueres (100% carne bovina), alface americana, queijo sabor cheddar, molho especial, cebola, picles e pão com gergelim.',
        price: 21.90,
        image: '../images/burgers/bigmac.png',
    },
    {
        id: 8,
        category: 'lanches',
        title: 'Duplo Quarterão',
        desc: 'Dois hambúrgueres (100% carne bovina), duas fatias de queijo sabor cheddar, cebola, picles, ketchup e mostarda no pão com gergelim.',
        price: 27.90,
        image: '../images/burgers/duplo-quarterao.png',
    },
    {
        id: 9,
        category: 'lanches',
        title: 'Duplo Cheddar McMelt',
        desc: 'Dois hambúrgueres (100% carne bovina), queijo sabor cheddar derretido e molho especial do Cheddar McMelt no pão escuro com gergelim.',
        price: 25.90,
        image: '../images/burgers/duplo-cheddar-mcmelt.png',
    },
    {
        id: 10,
        category: 'fritas',
        title: 'Batata frita pequena',
        desc: 'Porção de batata frita crocante e deliciosa, ideal para um lanche rápido.',
        price: 8.99,
        image: '../images/fries/small-fries.png',
    },
    {
        id: 11,
        category: 'fritas',
        title: 'Batata frita média',
        desc: 'Porção generosa de batata frita, crocante por fora e macia por dentro, perfeita para compartilhar.',
        price: 12.99,
        image: '../images/fries/medium-fries.png',
    },
    {
        id: 12,
        category: 'fritas',
        title: 'Batata frita grande',
        desc: 'A maior porção de batata frita, ideal para grupos ou aqueles com muita fome. Sabor irresistível!',
        price: 16.99,
        image: '../images/fries/large-fries.png',
    },
    {
        id: 13,
        category: 'bebidas',
        title: 'Coca-Cola',
        desc: 'Refrigerante clássico com sabor inconfundível, perfeito para refrescar.',
        price: 6.99,
        image: '../images/drinks/coca-cola.png',
    },
    {
        id: 14,
        category: 'bebidas',
        title: 'Fanta',
        desc: 'Refrigerante de sabor cítrico, refrescante e com um toque de laranja.',
        price: 6.99,
        image: '../images/drinks/fanta.png',
    },
    {
        id: 15,
        category: 'bebidas',
        title: 'Água',
        desc: 'Água mineral pura e refrescante, essencial para manter-se hidratado.',
        price: 2.99,
        image: '../images/drinks/water.png',
    },
    {
        id: 16,
        category: 'sobremesas',
        title: 'Casquinha de baunilha',
        desc: 'Deliciosa casquinha com sorvete de baunilha.',
        price: 3.99,
        image: '../images/desserts/vanilla.png',
    },
    {
        id: 17,
        category: 'sobremesas',
        title: 'Casquinha de chocolate',
        desc: 'Deliciosa casquinha com sorvete de chocolate.',
        price: 3.099,
        image: '../images/desserts/chocolate.png',
    },
    {
        id: 18,
        category: 'sobremesas',
        title: 'Casquinha Twist',
        desc: 'Deliciosa casquinha com sorvete de sabor twist.',
        price: 3.99,
        image: '../images/desserts/twist.png',
    }
];


const menuContainer = document.getElementById('menu-items');

function displayMenuItems(menuItems) {
    let categoryTitle = `<span class="menu-title">${menuItems[0].category}</span>`;

    let displayMenu = menuItems.map((item) => {
        return `
            <div class="item">
                <div class="details">
                    <p class="item-title">${item.title}</p>
                    <p class="item-desc">${item.desc}</p>
                    <span class="price">R$ ${item.price.toFixed(2)}</span>
                </div>

                <img class="item-pic" src="${item.image}">
            </div>
        `;
    }).join('');

    menuContainer.innerHTML = categoryTitle + displayMenu;
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
        console.log('Data ID:', dataId);  // Adicionando um log para verificar o valor de data-id
        let filterMenu;

        if (dataId === 'all') {
            filterMenu = menu; // Se 'all', mostra todos os itens
        } else {
            filterMenu = menu.filter(item => item.category === dataId);
        }

        displayMenuItems(filterMenu);
    });
});
