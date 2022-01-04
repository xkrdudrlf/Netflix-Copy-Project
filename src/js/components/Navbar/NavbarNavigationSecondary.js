import Component from "../Component/Component";

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

    const search = document.createElement("i");
    search.className = "navbar__element fas fa-search";
    navbarElements.push(search);

    const kids = document.createElement("li");
    kids.className = "navbar__element show-kids";
    kids.textContent = "Kids";
    navbarElements.push(kids);

    const notification = document.createElement("i");
    notification.className = "navbar__element fas fa-bell";
    navbarElements.push(notification);

    const user = document.createElement("i");
    user.className = "navbar__element fas fa-user";
    navbarElements.push(user);

    return navbarElements;
  }
}
