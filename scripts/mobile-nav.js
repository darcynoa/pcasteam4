//
// Elements
//
const overlay = document.querySelector(".mobile-nav-overlay");
const btnMenu = document.querySelector(".menu");
const btnMenuLines = document.querySelectorAll(".menu__line");

//
// Classes
//
const menuLinesClose = "menu__line__close";

/**
 * Opening and closing the navigation
 */
btnMenu.addEventListener("click", () => {
  btnMenuLines.forEach((menuLine) => {
    menuLine.classList.toggle(menuLinesClose);
  });
  if (btnMenuLines[0].classList.contains(menuLinesClose)) {
    overlay.style.display = "grid";
    document.body.style.overflow = "hidden";
  } else {
    overlay.style.display = "none";
    document.body.style.overflow = "initial";
  }
});
