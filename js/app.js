const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

// Função para exibir e ocultar menu-hamburguer
document.getElementById('imagem-menu').addEventListener('click', function() {
    let menu = document.getElementById('imagem-menu');
    let listaMenu = document.getElementById('lista-menu');
    let displayAtual = window.getComputedStyle(listaMenu).display;

    if (displayAtual === "none") {
        listaMenu.style.display = "block";
        menu.style.background = 'var(--azul-degrade)';
        menu.src = 'img/Menu-Aberto.svg';
    } else {
        listaMenu.style.display = "none";
        menu.style.background = 'var(--branco)';
        menu.src = 'img/Menu.svg';
    }
});

// Função para fechar menu
function fecharMenu() {
    let menu = document.getElementById('imagem-menu');
    let listaMenu = document.getElementById('lista-menu');
    let displayAtual = window.getComputedStyle(listaMenu).display;
    
    if (displayAtual === "block") {
        listaMenu.style.display = "none";
        menu.style.background = 'var(--branco)';
        menu.src = 'img/Menu.svg';
    }
};

// Função para identificar clique fora da lista
document.addEventListener('click', function(evento) {
    let menu = document.getElementById('imagem-menu');
    let listaMenu = document.getElementById('lista-menu');
    let displayAtual = window.getComputedStyle(listaMenu).display;

    if(displayAtual === "block"){
        if (!listaMenu.contains(evento.target) && !menu.contains(evento.target)) {
            fecharMenu();
            console.log("Acionado!")
        }    
    }
});

// Evento de rolagem de página para fechar menu
window.addEventListener('scroll', function(evento) {
    let listaMenu = document.getElementById('lista-menu');
    let displayAtual = window.getComputedStyle(listaMenu).display    
    if(displayAtual === "block"){
        fecharMenu();
        console.log("Acionado!")
    }
});