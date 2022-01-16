import { MockedLolomoRow } from "../../../../spec/helpers/MockedLolomoRow.mjs";

const lolomoRow = new MockedLolomoRow({
  parentElement: document.createElement("div"),
  state: {
    genre: "movie",
    category: "popular",
  },
});

describe("LolomoRow", function () {
  it("should have 2 children components: Header, Carousel", function () {
    const lolomoRowHeader = lolomoRow.$currElement.querySelector(
      ".lolomo__row__header"
    );
    const lolomoRowCarousel = lolomoRow.$currElement.querySelector(
      ".lolomo__row__carousel"
    );

    expect(lolomoRowHeader).not.toBeNull();
    expect(lolomoRowCarousel).not.toBeNull();
  });
});
