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
    this.addHandlerLogout();
  }

  render() {
    this.$currElement.innerHTML = "";

    const navbarLogo = new NavbarLogo({ parentElement: this.$currElement });

    const navbarNavigation = new NavbarNavigation({
      parentElement: this.$currElement,
      state: {
        activeTab: this.$state.activeTab,
      },
    });

    this.addChildren([navbarLogo, navbarNavigation]);

    this.$parentElement.appendChild(this.$currElement);
  }

  addHandlerNavbarTabClick() {
    this.$currElement.addEventListener("click", (e) => {
      let target = e.target;
      if (target.classList.contains("navbar__logo")) {
        target = this.$currElement.querySelector(".navbar__tab");
      }
      if (!target.classList.contains("navbar__tab")) return;
      if (this.$state.activeTab === target.textContent) return;

      const nextURL = `/${target.textContent}`;
      const nextTitle = `${target.textContent} - Netflix`;
      const nextState = { additionalInformation: "Updated the URL with JS" };

      utils.pushState(nextState, nextTitle, nextURL, target);
    });
  }

  addHandlerLogout() {
    this.$currElement.addEventListener("click", (e) => {
      if (!e.target.classList.contains("signout")) return;

      localStorage.removeItem("access-token");
      Component.context.user = undefined;

      window.location.replace("/Login");
    });
  }
}
