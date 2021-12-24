import View from "./View";

export default class NavbarNavigationSecondaryView extends View {
  _generateElement() {
    const navbarNavigationSecondary = document.createElement("div");
    navbarNavigationSecondary.className = "navbar__navigation__secondary";

    return navbarNavigationSecondary;
  }
}
