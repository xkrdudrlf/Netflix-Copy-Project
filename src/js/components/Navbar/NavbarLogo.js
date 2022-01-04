import Component from "../Component/Component";

export default class NavbarLogo extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = "navbar__logo";

    this.render();
  }

  render() {
    this.$parentElement.appendChild(this.$currElement);
  }
}
