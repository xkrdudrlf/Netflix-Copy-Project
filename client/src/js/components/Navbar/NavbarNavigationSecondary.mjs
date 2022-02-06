import Component from "../Component/Component.mjs";

export default class NavbarSecondary extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = "navbar__navigation__secondary";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    const navbarElements = this.createNavbarElements();
    navbarElements.forEach((el) => this.$currElement.appendChild(el));

    this.$parentElement.appendChild(this.$currElement);
  }

  createNavbarElements() {
    const navbarElements = [];

    const logout = document.createElement("i");
    logout.className = "navbar__element signout fas fa-sign-out-alt";
    navbarElements.push(logout);

    return navbarElements;
  }
}
