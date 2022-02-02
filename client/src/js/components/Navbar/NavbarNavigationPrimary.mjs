import Component from "../Component/Component.mjs";

export default class NavbarPrimary extends Component {
  $navbarTabs;

  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("ul");
    this.$currElement.className = "navbar__navigation__primary";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    this.$navbarTabs = this.createNavbarTabs();

    this.$navbarTabs.forEach((tab) => {
      this.$currElement.appendChild(tab);
    });

    this.$parentElement.appendChild(this.$currElement);
  }

  update() {
    this.$navbarTabs.forEach((tab) => {
      if (tab.textContent === this.$state.activeTab) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  }

  createNavbarTabs() {
    const tabNames = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];
    return tabNames.map((name) => this.createNavbarTab(name));
  }

  createNavbarTab(tabName) {
    const navbarTab = document.createElement("li");
    navbarTab.className = `navbar__tab ${
      this.$state.activeTab === tabName ? "active" : ""
    }`;
    navbarTab.textContent = tabName;
    return navbarTab;
  }
}
