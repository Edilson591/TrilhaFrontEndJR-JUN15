const button = document.querySelector(".header__nav__button");
const links = document.querySelector(".header__nav__links");
const menu = document.querySelector(".header__nav__button__menu");

function handleMenu(e) {
    if (e.type === "touchstart") e.preventDefault();
    
    links.classList.toggle("header__nav__links--is-active");
    menu.classList.toggle("header__nav__button__menu--is-active");

    const active = menu.classList.contains("header__nav__button__menu--is-active");
    button.setAttribute("aria-expanded", active);
    button.setAttribute("aria-label", active ? "Fecha Menu" : "Abrir Menu");
}

// Função para fechar o menu quando um link é clicado
function closeMenu() {
    links.classList.remove("header__nav__links--is-active");
    menu.classList.remove("header__nav__button__menu--is-active");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Abrir Menu");
}

// Função para fechar o menu ao clicar fora
function handleClickOutside() {
    if (links.classList.contains("header__nav__links--is-active")) {
        closeMenu();
        console.log('ola')
    }
}

// Adicionando eventos para click e touchstart
button.addEventListener("click", handleMenu);
button.addEventListener("touchstart", handleMenu);

// Adicionando evento para fechar o menu ao clicar em um link
const navLinks = links.querySelectorAll(".header__nav__link");
navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

// Adicionando evento para fechar o menu ao clicar fora
links.addEventListener("click", handleClickOutside);
