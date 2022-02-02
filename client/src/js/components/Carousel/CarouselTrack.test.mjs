import CarouselTrack from "./CarouselTrack.mjs";
import DummyData from "../../../../spec/helpers/DummyData.mjs";

const carouselTrack = new CarouselTrack({
  parentElement: document.createElement("div"),
  state: { slidesData: DummyData.$slidesData },
});
const carouselSlides =
  carouselTrack.$currElement.querySelectorAll(".carousel__slide");

describe("CarouselTrack", function () {
  it("should have slideData.length number of CarouselSlides", function () {
    expect(carouselSlides.length).toBe(DummyData.$slidesData.length);
  });
});
