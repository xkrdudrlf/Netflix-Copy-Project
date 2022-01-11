import * as utils from "../../utils.mjs";

import Component from "../Component/Component.mjs";
import NavbarLogo from "./NavbarLogo.mjs";
import NavbarNavigation from "./NavbarNavigation.mjs";

export default class Navbar extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("nav");
    this.$currElement.className = "navbar";

    this.render();

    this.addHandlerNavbarTabClick();
    this.addHandlerTurnoffActiveTab();
  }

  render() {
    this.$currElement.innerHTML = "";

    new NavbarLogo({ parentElement: this.$currElement });
    new NavbarNavigation({ parentElement: this.$currElement });

    this.$parentElement.appendChild(this.$currElement);

    this.toggleNavbarTabActive();
  }

  addHandlerTurnoffActiveTab() {
    this.$currElement.addEventListener("turnoffActiveTab", (e) => {
      this.toggleNavbarTabActive();
      this.setState({ activeTab: undefined });
    });
  }

  setState(newState) {
    this.$state = newState;
  }

  toggleNavbarTabActive() {
    const navbarTabs = this.$currElement.querySelectorAll(".navbar__tab");
    navbarTabs.forEach((navbarTab) => {
      if (navbarTab.textContent === this.$state.activeTab) {
        navbarTab.classList.toggle("active");
      }
    });
  }

  addHandlerNavbarTabClick() {
    this.$currElement.addEventListener("click", (e) => {
      let target = e.target;
      if (target.classList.contains("navbar__logo")) {
        target = this.$currElement.querySelector(".navbar__tab");
      }
      if (!target.classList.contains("navbar__tab")) return;
      if (this.$state.activeTab === target.textContent) return;

      this.toggleNavbarTabActive();

      const nextURL = `/${target.textContent}`;
      const nextTitle = `${target.textContent} - Netflix`;
      const nextState = { additionalInformation: "Updated the URL with JS" };

      utils.pushState(nextState, nextTitle, nextURL, target);
    });
  }
}
