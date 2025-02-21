const menuBtns = document.querySelectorAll('.menu-btn');

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        menuBtns.forEach(btn => btn.classList.remove('active'));

        btn.classList.add('active');
    });
});