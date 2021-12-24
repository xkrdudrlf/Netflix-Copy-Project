import View from "./View";

/*
  1. activeTab needs to be managed by a model
  2. link it with logo click
  3. start working on the secondary Navigation
  4. detailed css effects
  5. add different pages to each link
*/
export default class NavbarNavigationPrimaryView extends View {
  _selectedTab;

  addHandlerClickNavigationTab(handler) {
    this._currentElement.addEventListener("click", (e) => {
      if (!e.target.classList.contains("navbar__tab")) return;
      e.stopPropagation();

      if (this._selectedTab) this._selectedTab.classList.remove("active");
      this._selectedTab = e.target;
      this._selectedTab.classList.add("active");

      handler(this._selectedTab.textContent);
    });
  }

  addTab(name, active = false) {
    const tab = this._generateElementTab(name, active);
    this._currentElement.insertAdjacentElement("beforeend", tab);
    if (active) this._selectedTab = tab;
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
