import Component from "../Component/Component";
import * as config from "../../config";

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
          src="${config.THE_MOVIE_DB_IMAGE_URL}/${this.$state.data.backdrop_path}"
          alt="poster-img"
        />
      </div>
    `;

    this.$currElement.insertAdjacentHTML("beforeend", modalImageMarkup);
  }

  renderSlideModalBody() {
    const modalBodyMarkup = `
      <div class="carousel__slide__modal__body">
        <div class="title">
          ${this.$state.data.original_title ?? this.$state.data.original_name}  
        </div>
        <div class="rating">${this.$state.data.adult ? "Adult" : "All"}</div>
        <ul class="genre-list">
          ${this.$state.data.genre_ids
            .slice(0, 3)
            .map((genreId) => {
              return `
            <li class="genre">${config.GENRE_HASHTABLE[genreId]}</li>
            `;
            })
            .join("")}
        </ul>
      </div>
    `;

    this.$currElement.insertAdjacentHTML("beforeend", modalBodyMarkup);
  }
}
