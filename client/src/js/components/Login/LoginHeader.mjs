import Component from "../Component/Component.mjs";

export default class LoginHeader extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = "login__header";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    const logo = document.createElement("div");
    logo.className = "logo";

    this.$currElement.appendChild(logo);
    this.$parentElement.appendChild(this.$currElement);
  }
}
