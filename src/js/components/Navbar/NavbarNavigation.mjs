import Component from "../Component/Component.mjs";
import NavbarPrimary from "./NavbarNavigationPrimary.mjs";
import NavbarSecondary from "./NavbarNavigationSecondary.mjs";

export default class NavbarNavigation extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = "navbar__navigation";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    const navbarPrimary = new NavbarPrimary({
      parentElement: this.$currElement,
      state: { activeTab: this.$state.activeTab },
    });
    const navbarSecondary = new NavbarSecondary({
      parentElement: this.$currElement,
      state: { activeTab: this.$state.activeTab },
    });

    this.addChildren([navbarPrimary, navbarSecondary]);

    this.$parentElement.appendChild(this.$currElement);
  }
}
