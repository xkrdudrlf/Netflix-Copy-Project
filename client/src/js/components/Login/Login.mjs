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

/*
  <div class="login">
    <div class="login__header">
      <div class="logo"></div>
    </div>
    <div class="login__body">
      <div class="login-form">
        <div class="login-title">Sign in</div>
        <input
          class="login-field-container login-input-email"
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <input
          class="login-field-container login-input-password"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        <button class="login-submit-button">Sign in</button>
        <div class="login-signup-message">
          New to Takflix?
          <a class="login-signup-link" href="/signup">Sign up now</a>
        </div>
      </div>
    </div>
  </div>
*/
