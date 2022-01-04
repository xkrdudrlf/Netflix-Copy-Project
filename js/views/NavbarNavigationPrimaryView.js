import View from "./View";
import MainView from "./MainView";

/*
  1. activeTab needs to be managed by a model
  2. link it with logo click
  3. start working on the secondary Navigation
  4. detailed css effects
  5. add different pages to each link
*/
export default class NavbarNavigationPrimaryView extends View {
  addHandlerClickNavigationTab(handler) {
    this._currentElement.addEventListener("click", (e) => {
      if (!e.target.classList.contains("navbar__tab")) return;

      const currActiveTab = e.target;
      currActiveTab.classList.add("active");

      const prevActiveTab = handler(currActiveTab);
      if (prevActiveTab === currActiveTab) return;
      prevActiveTab.classList.remove("active");
    });
  }

  addTab(name, active = false) {
    const tab = this._generateElementTab(name, active);
    this._currentElement.insertAdjacentElement("beforeend", tab);
    return tab;
  }

  _generateElement() {
    const navbarNavigationPrimary = document.createElement("ul");
    navbarNavigationPrimary.className = "navbar__navigation__primary";

    return navbarNavigationPrimary;
  }

  _generateElementTab(name, active) {
    const tab = document.createElement("li");
    tab.className = `navbar__tab ${active ? "active" : ""}`;
    tab.textContent = name;

    return tab;
  }
}
