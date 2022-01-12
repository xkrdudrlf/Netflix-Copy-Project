import CarouselSlide from "./CarouselSlide.mjs";
import * as config from "../../config.mjs";

const result = {
  adult: false,
  backdrop_path: "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
  genre_ids: [28, 12, 878],
  id: 634649,
  original_language: "en",
  original_title: "Spider-Man: No Way Home",
  overview:
    "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
  popularity: 8022.274,
  poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  release_date: "2021-12-15",
  title: "Spider-Man: No Way Home",
  video: false,
  vote_average: 8.4,
  vote_count: 3887,
};

const data = {
  id: result.id,
  genre: result.original_title ? "movie" : "tv",
  slideImage: result.backdrop_path,
  slideModalContentHTML: `
    <div class="title">
      ${result.original_title ?? result.original_name}  
    </div>
    <div class="rating">${result.adult ? "Adult" : "All"}</div>
    <ul class="genre-list">
      ${result.genre_ids
        .slice(0, 3)
        .map((genreId) => {
          return `
            <li class="genre">
              ${config.GENRE_HASHTABLE[genreId]}
            </li>
          `;
        })
        .join("")}
    </ul>
  `,
};

const parentElement = document.createElement("div");

describe("CarouselSlide", function () {
  const carouselSlide = new CarouselSlide({ parentElement, state: { data } })
    .$currElement;
  const carouselSlideModal = carouselSlide.querySelector(
    ".carousel__slide__modal"
  );
  const carouselSlideImage = carouselSlide.querySelector(".carousel__image");

  it("should have 2 children components: Modal and Image", function () {
    expect(carouselSlideModal).not.toBeNull();
    expect(carouselSlideImage).not.toBeNull();
  });
});
