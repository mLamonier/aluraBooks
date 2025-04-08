const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

const menu = document.getElementById('imagem-menu');
const listaMenu = document.getElementById('lista-menu');

// Evento para exibir e ocultar o menu-hamburguer
menu.addEventListener('click', function() {
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

// Função para fechar o menu
function fecharMenu() {
    let displayAtual = window.getComputedStyle(listaMenu).display;
    
    if (displayAtual === "block") {
        listaMenu.style.display = "none";
        menu.style.background = 'var(--branco)';
        menu.src = 'img/Menu.svg';
    }
};

// Evento para identificar clique fora da lista
document.addEventListener('click', function(event) {
    let displayAtual = window.getComputedStyle(listaMenu).display;

    if(displayAtual === "block"){
        if (!listaMenu.contains(event.target) && !menu.contains(event.target)) {
            fecharMenu();
            console.log("Acionado!")
        }    
    }
});

// Evento de rolagem de página para fechar menu
window.addEventListener('scroll', function() {
    let displayAtual = window.getComputedStyle(listaMenu).display    
    if(displayAtual === "block"){
        fecharMenu();
        console.log("Acionado!")
    }
});