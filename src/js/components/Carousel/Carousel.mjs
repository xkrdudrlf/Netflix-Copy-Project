import * as utils from "../../utils.mjs";

import Component from "../Component/Component.mjs";
import CarouselButton from "./CarouselButton.mjs";
import CarouselTrack from "./CarouselTrack.mjs";

export default class Carousel extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = `${this.$state.className}`;

    this.render();

    this.addHandlerCarouselButtonClick();
    this.addHandlerCarouselSlideHover();
    this.addHandlerCarouselSlideClick();
  }

  render() {
    this.$currElement.innerHTML = "";

    new CarouselButton({
      parentElement: this.$currElement,
      state: { direction: "left" },
    });

    new CarouselButton({
      parentElement: this.$currElement,
      state: { direction: "right" },
    });

    new CarouselTrack({
      parentElement: this.$currElement,
      state: { slidesData: this.$state.slidesData },
    });

    this.$parentElement.appendChild(this.$currElement);
  }

  addHandlerCarouselButtonClick() {
    this.$currElement.addEventListener("click", (e) => {
      const carouselBtn = e.target.closest(".carousel__button");
      if (!carouselBtn) return;

      if (carouselBtn.classList.contains("carousel__button--left")) {
        this.moveSlides("left");
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
      if (!slideModal) return;
      slideModal.style.visibility = "visible";
      slideModal.style.opacity = 1;
      slideModal.style.top = "-50px";
    });

    this.$currElement.addEventListener("mouseout", (e) => {
      const currSlide = e.target.closest(".carousel__slide");
      if (!currSlide) return;

      const slideModal = currSlide.querySelector(".carousel__slide__modal");
      if (!slideModal) return;
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
    const slide = slides[1] ?? slides[0];
    const computedStyleSlide = getComputedStyle(slide);
    const slideWidthWithMargin =
      +computedStyleSlide.width.split("px")[0] +
      +computedStyleSlide.marginLeft.split("px")[0];
    const carouselWidth = this.$currElement.getBoundingClientRect().width;

    let moveWidth =
      slideWidthWithMargin * Math.floor(carouselWidth / slideWidthWithMargin);
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
}
