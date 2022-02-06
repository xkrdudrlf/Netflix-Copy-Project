import Component from "../Component/Component.mjs";
import LoginHeader from "./LoginHeader.mjs";
import LoginBody from "./LoginBody.mjs";

export default class Login extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = "login";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    const loginHeader = new LoginHeader({
      parentElement: this.$currElement,
    });

    const loginBody = new LoginBody({
      parentElement: this.$currElement,
    });

    this.$parentElement.appendChild(this.$currElement);
  }
}
