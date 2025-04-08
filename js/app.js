const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    loop: true,
});

function statusMenu(){
    let menu = document.getElementById('imagem-menu');
    let listaMenu = document.getElementById('lista-menu');

    menu.addEventListener("click", function() {
        if (listaMenu.style.display === "block") {
            listaMenu.style.display = "none";
            menu.style.background = 'var(--branco)';
            menu.src = 'img/Menu.svg';
        } else {
            listaMenu.style.display = "block";
            menu.style.background = 'var(--azul-degrade)';
            menu.src = 'img/Menu-Aberto.svg';
        }
    });
}