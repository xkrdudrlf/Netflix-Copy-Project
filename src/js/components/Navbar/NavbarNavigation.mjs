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

    new NavbarPrimary({ parentElement: this.$currElement });
    new NavbarSecondary({ parentElement: this.$currElement });

    this.$parentElement.appendChild(this.$currElement);
  }
}
