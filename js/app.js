// Plugin matchMedia, usado para identificar tamanho de tela
const mediaQueryCelularSelect = window.matchMedia("(max-width: 1024px)");
const mediaQueryCelular = mediaQueryCelularSelect.matches;

const mediaQueryTabletSelect = window.matchMedia("(min-width: 1024px) and (max-width: 1728px)");
const mediaQueryTablet = mediaQueryTabletSelect.matches;

const mediaQueryDesktopSelect = window.matchMedia("(min-width: 1728px)");
const mediaQueryDesktop = mediaQueryDesktopSelect.matches;

// Seletores
const menuHamburguer = document.getElementById('menu-hamburguer');
const listaMenuCelular = document.getElementById('lista-menu-celular');

const categorias = document.getElementById('categorias');
const listaMenuTabletDesktop = document.getElementById('lista-menu-tablet-desktop');

if (mediaQueryCelular) {
    let swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    // Evento para abrir e fechar menu hamburguer (Tela Celular)
    function abrirFecharMenuHamburguer(){
        if (displayAtualCelular() === "none") {
            styleCelularOpen();
        } else {
            styleCelularClosed();
        };
    };

    menuHamburguer.addEventListener('click', abrirFecharMenuHamburguer);   
};


if (mediaQueryTablet) {
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

    // Evento  para abrir e fechar menu categorias (Tela Tablet)
    function categoriasTabletClick() {
        if (displayAtualTabletDesktop() === 'none') {
            styleTabletDesktopOpen();
        } else {
            styleTabletDesktopClosed();
        }
    };
    
    categorias.addEventListener('click', categoriasTabletClick);
};

if (mediaQueryDesktop) {
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
        
    // Evento para exibir e ocultar o menu categorias (Tela Desktop)
    categorias.addEventListener('mouseover', styleTabletDesktopOpen);

    function fecharMenuCategorias(event){
        if (!listaMenuTabletDesktop.contains(event.relatedTarget) && !categorias.contains(event.relatedTarget)) {
            fecharMenu();
        };
    };

    categorias.addEventListener('mouseleave', fecharMenuCategorias);
    listaMenuTabletDesktop.addEventListener('mouseleave', fecharMenuCategorias);
};

// Função para selecionar display atual do Celular
function displayAtualCelular(){
    let displayAtualCelular = window.getComputedStyle(listaMenuCelular).display;
    return displayAtualCelular;
}

// Função para selecionar display atual do Tablet + Desktop
function displayAtualTabletDesktop(){
    let displayAtualTabletDesktop = window.getComputedStyle(listaMenuTabletDesktop).display;
    return displayAtualTabletDesktop;
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

// Função de definição de estilos tablet + desktop menu aberto
function styleTabletDesktopOpen(){
    listaMenuTabletDesktop.style.display = "block";
    categorias.style.background = 'var(--azul-degrade)'
    categorias.style.color = 'var(--branco)';
}

// Função de definição de estilos tablet + desktop menu fechado
function styleTabletDesktopClosed(){
    listaMenuTabletDesktop.style.display = "none";
    categorias.style.background = 'var(--branco)'
    categorias.style.color = 'var(--preto)';
}

// Função para fechar o menu (Tela Celular + Tablet + Desktop)
function fecharMenu() {
    if (displayAtualCelular() === "block") {
        styleCelularClosed();
    }
    if (displayAtualTabletDesktop() === "block") {
        styleTabletDesktopClosed();
    }
};

// Função para identificar clique fora da lista (Tela Celular + Tablet + Desktop)
function clickFora(event){
    if(displayAtualCelular() === "block"){
        if (!listaMenuCelular.contains(event.target) && !menuHamburguer.contains(event.target)) {
            fecharMenu();
        }    
    }
    if(displayAtualTabletDesktop() === "block"){
        if (!listaMenuTabletDesktop.contains(event.target) && !categorias.contains(event.target)) {
            fecharMenu();
        }    
    };
};

document.addEventListener('click', clickFora);

// Função de rolagem de página para fechar menu (Tela Celular + Tablet + Desktop)
function scrollPagina(){
    if(displayAtualCelular() === "block"){
        fecharMenu();
    }
    if(displayAtualTabletDesktop() === "block"){
        fecharMenu();
    };
};

window.addEventListener('scroll', scrollPagina);
