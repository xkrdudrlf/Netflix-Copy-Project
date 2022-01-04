import Component from "../Component/Component";
import CarouselSlideModal from "./CarouselSlideModal";
import * as config from "../../config";
import * as utils from "../../utils";

export default class CarouselSlide extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("li");
    this.$currElement.className = "carousel__slide";
    this.$currElement.setAttribute("data-id", this.$state.data.id);
    const genre = utils.getGenre(this.$state.data);
    this.$currElement.setAttribute("data-genre", genre);

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    new CarouselSlideModal({
      parentElement: this.$currElement,
      state: this.$state,
    });

    this.renderSlideImage();

    this.$parentElement.appendChild(this.$currElement);
  }

  renderSlideImage() {
    const slideImageMarkup = `
      <img
        class="carousel__image"
        src="${config.THE_MOVIE_DB_IMAGE_URL}/${this.$state.data.backdrop_path}"
        alt="poster-img"
      />
    `;

    this.$currElement.insertAdjacentHTML("beforeend", slideImageMarkup);
  }
}