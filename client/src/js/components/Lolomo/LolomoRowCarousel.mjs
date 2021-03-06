import * as utils from "../../utils.mjs";
import * as config from "../../config.mjs";

import Carousel from "../Carousel/Carousel.mjs";
import Component from "../Component/Component.mjs";

export default class LolomoRowCarousel extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.render();
  }

  async render() {
    await this.prepareDataState();

    new Carousel({
      parentElement: this.$parentElement,
      state: {
        className: "lolomo__row__carousel",
        slidesData: this.$state.slidesData,
      },
    });
  }

  async prepareDataState() {
    this.$state.slidesData = [];

    const bookmarks = Component.context["user"]["bookmarks"];

    const data = await this.fetchData();
    data.results.forEach((result) => {
      if (result.backdrop_path) {
        const genre = result.original_title ? "movie" : "tv";
        const slideData = {
          id: result.id,
          genre,
          slideImage: result.backdrop_path,
          slideModalContentHTML: `
            <div class="title">
              ${result.original_title ?? result.original_name}  
            </div>
            <div class="options">
              <div class="rating">
                ${result.adult ? "Adult" : "All"}
              </div>
              <i 
                class="${
                  bookmarks.find(
                    (bm) => bm.genre === genre && bm.id == result.id
                  )
                    ? "fas"
                    : "far"
                } 
                fa-bookmark bookmark"
              ></i>
            </div>
            <ul class="genre-list">
              ${
                this.$state.category === "my_list"
                  ? result.genres.map((g) => {
                      return `
                      <li class="genre">
                        ${g["name"]}
                      </li>
                    `;
                    })
                  : result.genre_ids
                      .slice(0, 3)
                      .map((genreId) => {
                        return `
                    <li class="genre">
                      ${config.GENRE_HASHTABLE[genreId]}
                    </li>
                  `;
                      })
                      .join("")
              }
            </ul>
          `,
        };
        this.$state.slidesData.push(slideData);
      }
    });
  }

  async fetchData() {
    let data = {};
    let requestURL = "";
    try {
      switch (this.$state.category) {
        case "trend": {
          requestURL = `/trending/${this.$state.genre}/day`;
          data = await utils.request(requestURL);
          break;
        }
        case "popular":
        case "top_rated": {
          if (this.$state.genre === "all") {
            let movieData = await utils.request(
              `/movie/${this.$state.category}`
            );
            let tvData = await utils.request(`/tv/${this.$state.category}`);
            movieData = movieData.results;
            tvData = tvData.results;
            data.results = [];
            for (let i = 0; i < 10; ++i) {
              data.results.push(movieData[i], tvData[i]);
            }
            break;
          }

          requestURL = `/${this.$state.genre}/${this.$state.category}`;
          data = await utils.request(requestURL);
          break;
        }
        case "upcoming":
        case "now_playing": {
          requestURL = `/movie/${this.$state.category}`;
          data = await utils.request(requestURL);
          break;
        }
        case "my_list": {
          const bookmarkFetchPromises = [];
          const bookmarks = Component.context["user"]["bookmarks"];
          bookmarks.forEach(async (bookmark) => {
            bookmarkFetchPromises.push(
              utils.request(`/${bookmark["genre"]}/${bookmark["id"]}`)
            );
          });
          const bookmarkFetchedData = await Promise.allSettled(
            bookmarkFetchPromises
          );

          data.results = [];
          bookmarkFetchedData.forEach((bookmarkData) => {
            if (bookmarkData.status === "fulfilled") {
              data.results.push(bookmarkData.value);
            }
          });

          break;
        }
      }
      return data;
    } catch (e) {
      console.log(e.message);
      console.log(`Failed to retrieve data from "${requestURL}"`);
    }
  }
}
