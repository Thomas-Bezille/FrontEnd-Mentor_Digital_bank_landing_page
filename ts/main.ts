// ============================================================
//  DIGITALBANK – interactive behaviour
//  Mobile navigation toggle
// ============================================================

const toggle = document.querySelector<HTMLButtonElement>(".header__toggle");
const menu = document.querySelector<HTMLElement>("#mobile-menu");

if (toggle && menu) {
  const openMenu = (): void => {
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden"; // lock background scroll
  };

  const closeMenu = (): void => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  };

  const toggleMenu = (): void => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  };

  toggle.addEventListener("click", toggleMenu);

  // Close the menu after tapping a navigation link
  menu
    .querySelectorAll<HTMLAnchorElement>(".mobile-menu__link")
    .forEach((link) => link.addEventListener("click", closeMenu));

  // Close the menu with the Escape key
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape") closeMenu();
  });

  // Reset state when the viewport grows to the desktop layout,
  // where the overlay menu is hidden by CSS anyway
  const desktopQuery = window.matchMedia("(min-width: 64rem)");
  desktopQuery.addEventListener("change", (event: MediaQueryListEvent) => {
    if (event.matches) closeMenu();
  });
}
