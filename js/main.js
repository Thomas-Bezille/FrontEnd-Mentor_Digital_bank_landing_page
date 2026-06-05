"use strict";
const toggle = document.querySelector(".header__toggle");
const menu = document.querySelector("#mobile-menu");
if (toggle && menu) {
    const openMenu = () => {
        menu.hidden = false;
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Close menu");
        document.body.style.overflow = "hidden";
    };
    const closeMenu = () => {
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        document.body.style.overflow = "";
    };
    const toggleMenu = () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        isOpen ? closeMenu() : openMenu();
    };
    toggle.addEventListener("click", toggleMenu);
    menu
        .querySelectorAll(".mobile-menu__link")
        .forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape")
            closeMenu();
    });
    const desktopQuery = window.matchMedia("(min-width: 64rem)");
    desktopQuery.addEventListener("change", (event) => {
        if (event.matches)
            closeMenu();
    });
}
