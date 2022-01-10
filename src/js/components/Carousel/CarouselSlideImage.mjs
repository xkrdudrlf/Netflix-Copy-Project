import * as config from "../../config";

import Component from "../Component/Component.mjs";

export default class CarouselSlideImage extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("img");
    this.$currElement.className = "carousel__image";
    this.$currElement.dataset.src = `${config.THE_MOVIE_DB_IMAGE_URL}/${this.$state.data.slideImage}`;
    this.$currElement.alt = "poster-img";
    this.$currElement.style.display = "none";

    this.render();
  }

  render() {
    this.$parentElement.appendChild(this.$currElement);
  }

  async loadImage() {
    this.$currElement.src = this.$currElement.dataset.src;
    await this.$currElement.decode();
    this.$currElement.style.display = "block";
  }
}
