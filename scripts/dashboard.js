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

/**
 * Past Meetings Widget in the Meetings Section
 *
 * Functionality to add the agenda of the past meetings
 */
