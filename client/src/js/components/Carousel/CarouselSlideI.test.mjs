import CarouselSlide from "./CarouselSlide.mjs";
import DummyData from "../../../../spec/helpers/DummyData.mjs";

const carouselSlide = new CarouselSlide({
  parentElement: document.createElement("div"),
  state: { data: DummyData.$slidesData[0] },
}).$currElement;
const carouselSlideModal = carouselSlide.querySelector(
  ".carousel__slide__modal"
);
const carouselSlideImage = carouselSlide.querySelector(".carousel__image");

describe("CarouselSlide", function () {
  it("should have 2 children components: Modal and Image", function () {
    expect(carouselSlideModal).not.toBeNull();
    expect(carouselSlideImage).not.toBeNull();
  });
});
