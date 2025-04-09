// Plugin matchMedia, usado para identificar tamanho de tela
const mediaQuery = window.matchMedia("(min-width: 1024px)");

if (mediaQuery.matches) {
    let swiper = new Swiper('.swiper', {
        spaceBetween: 60,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
} else {
    let swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
};

// Seletores
const menuHamburguer = document.getElementById('menu-hamburguer');
const listaMenuCelular = document.getElementById('lista-menu-celular');
const categoriasTablet = document.getElementById('categorias-tablet');
const listaMenuTablet = document.getElementById('lista-menu-tablet');

// Evento para exibir menu de categorias (Tela Tablet)
categoriasTablet.addEventListener('click', function() {
    let displayAtual = window.getComputedStyle(listaMenuTablet).display;

    if (displayAtual === 'none'){
        listaMenuTablet.style.display = "block";
    } else {
        listaMenuTablet.style.display = "none";
    }
});

// Evento para exibir e ocultar o menu-hamburguer (Tela Celular)
menuHamburguer.addEventListener('click', function() {
    let displayAtual = window.getComputedStyle(listaMenuCelular).display;

    if (displayAtual === "none") {
        listaMenuCelular.style.display = "block";
        menuHamburguer.style.background = 'var(--azul-degrade)';
        menuHamburguer.src = 'img/Menu-Aberto.svg';
    } else {
        listaMenuCelular.style.display = "none";
        menuHamburguer.style.background = 'var(--branco)';
        menuHamburguer.src = 'img/Menu.svg';
    }
});

// Função para selecionar display atual do Celular
function displayAtualCelular(){
    let displayAtualCelular = window.getComputedStyle(listaMenuCelular).display;
    return displayAtualCelular;
}

// Função para selecionar display atual do Tablet
function displayAtualTablet(){
    let displayAtualTablet = window.getComputedStyle(listaMenuTablet).display;
    return displayAtualTablet;
}

// Função para fechar o menu (Tela Celular + Tablet)
function fecharMenu() {
    if (displayAtualCelular() === "block") {
        listaMenuCelular.style.display = "none";
        menuHamburguer.style.background = 'var(--branco)';
        menuHamburguer.src = 'img/Menu.svg';
        console.log("Acionado - Celular!")
    }
    if (displayAtualTablet() === "block") {
        listaMenuTablet.style.display = "none";
        console.log("Acionado - Tablet!")
    }
};

// Evento para identificar clique fora da lista (Tela Celular + Tablet)
document.addEventListener('click', function(event) {
    if(displayAtualCelular() === "block"){
        if (!listaMenuCelular.contains(event.target) && !menuHamburguer.contains(event.target)) {
            fecharMenu();
        }    
    }
    if(displayAtualTablet() === "block"){
        if (!listaMenuTablet.contains(event.target) && !categoriasTablet.contains(event.target)) {
            fecharMenu();
        }    
    }
});

// Evento de rolagem de página para fechar menu (Tela Celular + Tablet)
window.addEventListener('scroll', function() {
    if(displayAtualCelular() === "block"){
        fecharMenu();
    }
    if(displayAtualTablet() === "block"){
        fecharMenu();
    }
});