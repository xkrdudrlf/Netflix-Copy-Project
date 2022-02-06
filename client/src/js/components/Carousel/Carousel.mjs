import { SERVER_URL } from "../../config.mjs";
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

      const { genre, id } = currSlide.dataset;

      // Bookmark click
      if (e.target.classList.contains("bookmark")) {
        const isBookmarked = e.target.classList.contains("fas");
        if (isBookmarked) {
          e.target.classList.remove("fas");
          e.target.classList.add("far");
          this.sendBookmarkRequest(genre, id, false);
          Component.context["user"]["bookmarks"] = Component.context["user"][
            "bookmarks"
          ].filter((bm) => bm.genre !== genre || bm.id != id);
        } else {
          e.target.classList.remove("far");
          e.target.classList.add("fas");
          this.sendBookmarkRequest(genre, id, true);
          Component.context["user"]["bookmarks"].push({
            genre,
            id,
          });
        }
        return;
      }

      // Change URL
      const nextURL = `/${genre}/${id}`;
      const nextTitle = `${utils.capitalizeFirstCharacter(
        genre
      )} details - Netflix`;
      const nextState = { additionalInformation: "Updated the URL with JS" };
      const target = document.querySelector(".app");

      utils.pushState(nextState, nextTitle, nextURL, target);
    });
  }

  sendBookmarkRequest(genre, id, bookmarkStatus) {
    const token = localStorage.getItem("access-token");
    const data = {
      genre,
      id,
      status: bookmarkStatus,
    };

    fetch(`${SERVER_URL}/bookmark`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
