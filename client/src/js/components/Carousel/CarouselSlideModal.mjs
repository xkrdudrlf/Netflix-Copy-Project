import * as config from "../../config.mjs";

import Component from "../Component/Component.mjs";

export default class CarouselSlideModal extends Component {
  constructor(componenetInfo) {
    super(componenetInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = "carousel__slide__modal";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    this.renderSlideModalImage();
    this.renderSlideModalBody();

    this.$parentElement.appendChild(this.$currElement);
  }

  renderSlideModalImage() {
    const modalImageMarkup = `
      <div class="carousel__slide__modal__image-container">
        <img
          class="carousel__slide__modal__image"
          src=""
          data-src="${config.THE_MOVIE_DB_IMAGE_URL}/${this.$state.data.slideImage}"
          alt="poster-img"
        />
      </div>
    `;

    this.$currElement.insertAdjacentHTML("beforeend", modalImageMarkup);
  }

  renderSlideModalBody() {
    const modalBodyMarkup = `
      <div class="carousel__slide__modal__body">
        ${this.$state.data.slideModalContentHTML}
      </div>
    `;

    this.$currElement.insertAdjacentHTML("beforeend", modalBodyMarkup);
  }

  async loadImage() {
    const image = this.$currElement.querySelector(
      ".carousel__slide__modal__image"
    );
    image.src = image.dataset.src;
    await image.decode();
  }
}
