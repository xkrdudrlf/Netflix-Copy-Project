import Carousel from "./Carousel.mjs";
import DummyData from "../../../../spec/helpers/DummyData.mjs";

const carousel = new Carousel({
  parentElement: document.createElement("div"),
  state: {
    className: "lolomo__row__carousel",
    slidesData: DummyData.$slidesData,
  },
});
const carouselButtons =
  carousel.$currElement.querySelectorAll(".carousel__button");
const carouselTrack = carousel.$currElement.querySelector(".carousel__track");

const carouselSlide = carousel.$currElement.querySelector(".carousel__slide");
const carouselSlideModal = carouselSlide.querySelector(
  ".carousel__slide__modal"
);

const mouseClickEvent = new window.MouseEvent("click", { bubbles: true });
const mouseOverEvent = new window.MouseEvent("mouseover", {
  bubbles: true,
});
const mouseOutEvent = new window.MouseEvent("mouseout", {
  bubbles: true,
});

describe("Carousel", function () {
  it("should have 3 children componenets: 2 Buttons, Track", function () {
    expect(carouselButtons.length).toBe(2);
    expect(carouselTrack).not.toBeNull();
  });

  it("should move slides to the direction of the button on CarouselButton click", function () {
    spyOn(carousel, "moveSlides");

    carouselButtons[0].dispatchEvent(mouseClickEvent);
    expect(carousel.moveSlides).toHaveBeenCalledWith("left");

    carouselButtons[1].dispatchEvent(mouseClickEvent);
    expect(carousel.moveSlides).toHaveBeenCalledWith("right");
  });

  it("should display CarouselSlideModal on CarouselSlide mouseOver", function () {
    carouselSlide.dispatchEvent(mouseOverEvent);

    expect(window.getComputedStyle(carouselSlideModal).visibility).toBe(
      "visible"
    );
    expect(window.getComputedStyle(carouselSlideModal).opacity).toBe("1");
    expect(window.getComputedStyle(carouselSlideModal).top).toBe("-50px");
  });

  it("should hide CarouselSlideModal on CarouselSlide mouseOut", function () {
    carouselSlide.dispatchEvent(mouseOutEvent);

    expect(window.getComputedStyle(carouselSlideModal).visibility).toBe(
      "hidden"
    );
    expect(window.getComputedStyle(carouselSlideModal).opacity).toBe("0");
    expect(window.getComputedStyle(carouselSlideModal).top).toBe("0px");
  });

  it("should redirect url to /genre/id on CarouselSlide click", function () {
    carouselSlide.dispatchEvent(mouseClickEvent);

    expect(window.location.pathname).toBe(
      `/${carouselSlide.dataset.genre}/${carouselSlide.dataset.id}`
    );
  });
});
