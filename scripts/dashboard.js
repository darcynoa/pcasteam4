// Elements
const navListItems = document.querySelectorAll(".dashboard__nav__list__item");
const mainWidgetContainers = document.querySelectorAll(
  ".dashboard__main__widgets__container"
);
const navActiveBar = document.querySelector(".dashboard__nav__active-bar");

// Classes
const mainActive = "dashboard-main-active";
const navActive = "dashboard-nav-active";

// Styles
let navActiveBarStyle = navActiveBar.style;

/**
 * Init
 */
let navActiveBarTop = 135;
let navActiveBarTopShift = 70;
if (window.innerWidth <= 952) {
  navActiveBarTop = 160;
  navActiveBarTopShift = 63;
}
/**
 * Full Navigation Functionality
 *
 * When one nav link is clicked on, it will match the class name of the main
 * dashboard widget and the location of the active bar to the name of the
 * link being clicked on.
 *
 * Once it does, the nav active bar moves the amount of corresponding pixels
 * and the main dashboard changes
 */
for (let i = 0; i < navListItems.length; i++) {
  let navListItem = navListItems[i];
  navListItem.addEventListener("click", () => {
    //
    //  Change Nav Active Bar and List Item Style
    //
    let shift = navActiveBarTop + navActiveBarTopShift * i;
    navActiveBarStyle.top = `${shift}px`;

    for (const navItem of navListItems) {
      if ((navItem.classList.contains = navActive)) {
        navItem.classList.remove(navActive);
      }
    }
    navListItem.classList.add(navActive);

    //
    //  Change main dashboard view
    //
    for (const mainWidgetContainer of mainWidgetContainers) {
      mainWidgetContainer.classList.remove(mainActive);
      if (
        mainWidgetContainer.classList[1] === navListItem.innerHTML.toLowerCase()
      ) {
        mainWidgetContainer.classList.add(mainActive);
      }
    }
  });
}

//
// Mobile nav functionality
//

// Elements //
const overlay = document.querySelector(".mobile-nav-overlay");
const btnMenu = document.querySelector(".dashboard__menu");
const btnMenuLines = document.querySelectorAll(".dashboard__menu__line");
const mobileNavListItems = document.querySelectorAll(
  ".dashboard__nav__list__item__mobile"
);
const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");

// Classes //
const menuLinesClose = "menu__line__close";
// Functionality //
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

mobileNavListItems.forEach((mobileNavListItem) => {
  mobileNavListItem.addEventListener("click", () => {
    console.log(mobileNavListItem.innerHTML.toLowerCase().trim());
    btnMenuLines.forEach((menuLine) => {
      menuLine.classList.toggle(menuLinesClose);
    });
    //
    //  Change main dashboard view
    //
    for (const mainWidgetContainer of mainWidgetContainers) {
      mainWidgetContainer.classList.remove(mainActive);
      if (
        mainWidgetContainer.classList[1] ===
        mobileNavListItem.innerHTML.toLowerCase().trim()
      ) {
        mainWidgetContainer.classList.add(mainActive);
      }
    }

    mobileNavOverlay.style.display = "none";
  });
});

/**
 * Question and Answers Functionality
 *
 * Accordion menu that will expand and narrow when clicking on the icon
 *
 * Also animates the icon from a + to a -
 */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.children[1];
    let accIconLine = this.children[2].children[0];
    if (panel.style.display === "block") {
      panel.style.display = "none";
      accIconLine.style.width = "100%";
    } else {
      panel.style.display = "block";
      accIconLine.style.width = "0";
    }
  });
}
