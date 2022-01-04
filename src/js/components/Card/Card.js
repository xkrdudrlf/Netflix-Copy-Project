import Component from "../Component/Component";

export default class Card extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = `card ${this.$state.className}`;

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    this.renderImageSection();
    this.renderContentSection();

    this.$parentElement.appendChild(this.$currElement);
  }

  renderImageSection() {
    const markup = `
      <section class="card__image-container">
        <img class="card__image" src="${this.$state.image}" alt="card-image" />
      </section>
    `;

    this.$currElement.insertAdjacentHTML("beforeend", markup);
  }

  renderContentSection() {
    const markup = `
      <section class="card__content">
        <header class="card__content__header">
          ${this.$state.header}
        </header>
        ${this.$state.subHeaders
          .map((subHeader) => {
            return `
            <div class="card__content__sub-header">
              <p class="header">${subHeader.title}: </p>
              <p class="content">${subHeader.content}</p>
            </div>
          `;
          })
          .join(" ")}
        <div class="card__content__body">
          ${this.$state.body}
        </div>
      </section>
    `;

    this.$currElement.insertAdjacentHTML("beforeend", markup);
  }
}
