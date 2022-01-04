import * as config from "../../config";
import * as utils from "../../utils";

import Component from "../Component/Component";
import CarouselSlide from "./CarouselSlide";

export default class Carousel extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = "lolomo__row__carousel";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    this.renderButton("left");
    this.renderButton("right");
    this.renderTrack();

    this.$parentElement.appendChild(this.$currElement);

    this.addHandlerCarouselButtonClick();
    this.addHandlerCarouselSlideHover();
    this.addHandlerCarouselSlideClick();
  }

  addHandlerCarouselButtonClick() {
    this.$currElement.addEventListener("click", (e) => {
      const carouselBtn = e.target.closest(".carousel__button");
      if (!carouselBtn) return;

      if (carouselBtn.classList.contains("carousel__button--left")) {
        this.moveSlides("left");
        console.log("left");
      } else {
        this.moveSlides("right");
      }
    });
  }

  addHandlerCarouselSlideHover() {
    this.$currElement.addEventListener("mouseover", (e) => {
      const currSlide = e.target.closest(".carousel__slide");
      if (!currSlide) return;

      const slideModal = currSlide.querySelector(".carousel__slide__modal");
      slideModal.style.visibility = "visible";
      slideModal.style.opacity = 1;
      slideModal.style.top = "-50px";
    });

    this.$currElement.addEventListener("mouseout", (e) => {
      const currSlide = e.target.closest(".carousel__slide");
      if (!currSlide) return;

      const slideModal = currSlide.querySelector(".carousel__slide__modal");
      slideModal.style.visibility = "hidden";
      slideModal.style.opacity = 0;
      slideModal.style.top = "0";
    });
  }

  addHandlerCarouselSlideClick() {
    this.$currElement.addEventListener("click", async (e) => {
      const currSlide = e.target.closest(".carousel__slide");
      if (!currSlide) return;

      // Change URL
      const nextURL = `/${currSlide.dataset.genre}/${currSlide.dataset.id}`;
      const nextTitle = `${utils.capitalizeFirstCharacter(
        currSlide.dataset.genre
      )} details - Netflix`;
      const nextState = { additionalInformation: "Updated the URL with JS" };
      const target = document.querySelector(".main");

      utils.pushState(nextState, nextTitle, nextURL, target, false);

      // Turn off the active status of current ActiveTab
      utils.emitEvent(
        "turnoffActiveTab",
        document.querySelector(".navbar"),
        false
      );
    });
  }

  moveSlides(direction) {
    const slides = this.$currElement.querySelectorAll(".carousel__slide");
    const carouselWidth = this.$currElement.getBoundingClientRect().width;
    let moveWidth =
      config.SLIDE_WIDTH_WITH_MARGIN *
      Math.floor(carouselWidth / config.SLIDE_WIDTH_WITH_MARGIN);
    if (direction === "left") moveWidth *= -1;

    // Return immediately upon reaching the far-left or far-right
    if (
      direction === "left" &&
      slides[slides.length - 1].getBoundingClientRect().right <
        this.$currElement.getBoundingClientRect().right
    )
      return;
    if (direction === "right" && slides[0].style.left.split("px")[0] == 0)
      return;

    // Move slides according to the given direction
    slides.forEach((slide) => {
      const currWidth = slide.style.left.split("px")[0];
      slide.style.left = `${Number(currWidth) + Number(moveWidth)}px`;
    });
  }

  renderButton(direction) {
    const button = document.createElement("button");
    button.className = `carousel__button carousel__button--${direction}`;

    const arrowIcon = document.createElement("i");
    arrowIcon.className = `fas fa-chevron-${direction}`;
    button.appendChild(arrowIcon);

    this.$currElement.appendChild(button);
  }

  renderTrack() {
    const track = document.createElement("ul");
    track.className = "carousel__track";

    this.$state.data.results.forEach((result) => {
      if (result.backdrop_path) {
        new CarouselSlide({ parentElement: track, state: { data: result } });
      }
    });

    this.$currElement.appendChild(track);
  }

  renderTrackSlide(track, result) {
    if (!result.backdrop_path) return;
    const slide = `
      <li class="carousel__slide" data-id="${result.id}">
        <img
          class="carousel__image"
          src="${config.THE_MOVIE_DB_IMAGE_URL}/${result.backdrop_path}"
          alt="poster-img"
        />
      </li>
    `;
    track.insertAdjacentHTML("beforeend", slide);
  }
}
