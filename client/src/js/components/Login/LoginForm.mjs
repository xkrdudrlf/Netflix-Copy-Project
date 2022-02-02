import Component from "../Component/Component.mjs";

import { SERVER_URL } from "../../config.mjs";

export default class LoginForm extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("form");
    this.$currElement.className = "login-form";

    this.render();
    this.addHandlerFormSubmit();
  }

  render() {
    const title = document.createElement("div");
    title.className = "login-title";
    title.textContent = "Sign in";

    const emailInput = document.createElement("input");
    emailInput.className = "login-field-container login-input-email";
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Please enter email";
    emailInput.autocomplete = true;

    const passwordInput = document.createElement("input");
    passwordInput.className = "login-field-container login-input-password";
    passwordInput.type = "password";
    passwordInput.name = "password";
    passwordInput.placeholder = "Please enter password";
    passwordInput.autocomplete = true;

    const submitButton = document.createElement("button");
    submitButton.className = "login-submit-button";
    submitButton.textContent = "Sign in";

    const signupMessage = document.createElement("div");
    signupMessage.className = "login-signup-message";
    signupMessage.textContent = "New to Takflix? ";

    const signupLink = document.createElement("a");
    signupLink.className = "login-signup-link";
    signupLink.href = "/signup";
    signupLink.textContent = "Sign up now";
    signupMessage.appendChild(signupLink);

    [title, emailInput, passwordInput, submitButton, signupMessage].forEach(
      (el) => {
        this.$currElement.appendChild(el);
      }
    );

    this.$parentElement.appendChild(this.$currElement);
  }

  addHandlerFormSubmit() {
    this.$currElement.addEventListener("submit", (e) => {
      e.preventDefault();
      const userInfo = {};
      const inputs = e.target.querySelectorAll("input");
      inputs.forEach((input) => {
        userInfo[input.name] = input.value;
      });
      fetch(
        `${SERVER_URL}/auth?email=${userInfo["email"]}&password=${userInfo["password"]}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        });
    });
  }
}
