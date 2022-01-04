import Component from "../Component/Component";

export default class NavbarPrimary extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("ul");
    this.$currElement.className = "navbar__navigation__primary";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    const navbarTabs = this.createNavbarTabs();
    navbarTabs.forEach((tab) => {
      this.$currElement.appendChild(tab);
    });

    this.$parentElement.appendChild(this.$currElement);
  }

  createNavbarTabs() {
    const tabNames = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];
    return tabNames.map((name) => this.createNavbarTab(name));
  }

  createNavbarTab(tabName) {
    const navbarTab = document.createElement("li");
    navbarTab.className = "navbar__tab";
    navbarTab.textContent = tabName;

    return navbarTab;
  }
}
