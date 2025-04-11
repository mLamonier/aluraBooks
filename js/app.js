// Plugin matchMedia, usado para identificar tamanho de tela
const mediaQueryTablet = window.matchMedia("(min-width: 1024px)");
const mediaQuery = mediaQueryTablet.matches;

// Seletores
const menuHamburguer = document.getElementById('menu-hamburguer');
const listaMenuCelular = document.getElementById('lista-menu-celular');
const categoriasTablet = document.getElementById('categorias-tablet');
const listaMenuTablet = document.getElementById('lista-menu-tablet');

if (mediaQuery) {
    let swiper = new Swiper('.swiper', {
        spaceBetween: 60,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    // Evento para exibir e ocultar o menu-hamburguer (Tela Celular)
    categoriasTablet.addEventListener('click', function() {
        if (displayAtualTablet() === 'none'){
            styleTabletOpen();
        } else {
            styleTabletClosed();
        }
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

    // Evento para exibir menu de categorias (Tela Tablet)
    menuHamburguer.addEventListener('click', function() {
        if (displayAtualCelular() === "none") {
            styleCelularOpen();
        } else {
            styleCelularClosed();
        }
    });    
};

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

// Função de definição de estilos celular menu aberto
function styleCelularOpen(){
    listaMenuCelular.style.display = "block";
    menuHamburguer.style.background = 'var(--azul-degrade)';
    menuHamburguer.src = 'img/Menu-Aberto.svg';
}

// Função de definição de estilos celular menu fechado
function styleCelularClosed(){
    listaMenuCelular.style.display = "none";
    menuHamburguer.style.background = 'var(--branco)';
    menuHamburguer.src = 'img/Menu.svg';
}

// Função de definição de estilos tablet menu aberto
function styleTabletOpen(){
    listaMenuTablet.style.display = "block";
    categoriasTablet.style.background = 'var(--azul-degrade)'
    categoriasTablet.style.color = 'var(--branco)';
}

// Função de definição de estilos tablet menu fechado
function styleTabletClosed(){
    listaMenuTablet.style.display = "none";
    categoriasTablet.style.background = 'var(--branco)'
    categoriasTablet.style.color = 'var(--preto)';
}

// Função para fechar o menu (Tela Celular + Tablet)
function fecharMenu() {
    if (displayAtualCelular() === "block") {
        styleCelularClosed();
    }
    if (displayAtualTablet() === "block") {
        styleTabletClosed();
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