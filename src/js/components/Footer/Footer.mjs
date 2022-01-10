import Component from "../Component/Component.mjs";
import logoImage from "../../../img/attributionLogo.jpg";

export default class Footer extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("footer");
    this.$currElement.className = "footer";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    this.renderStaticContent();

    this.$parentElement.appendChild(this.$currElement);
  }

  renderStaticContent() {
    const contentMarkup = `
      <div class="attribution-container">
        <p>
          Data from 
          <img
              class="attribution-logo"
              src="${logoImage}"
              alt=""
          />
        </p>
      </div>
      <p>© 2022 Younggil Tak</p>
    `;

    this.$currElement.insertAdjacentHTML("beforeend", contentMarkup);
  }
}
