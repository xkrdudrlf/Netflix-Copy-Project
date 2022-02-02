import Component from "../Component/Component.mjs";
import LoginForm from "./LoginForm.mjs";

export default class LoginBody extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = "login__body";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    const loginForm = new LoginForm({
      parentElement: this.$currElement,
    });

    this.$parentElement.appendChild(this.$currElement);
  }
}
