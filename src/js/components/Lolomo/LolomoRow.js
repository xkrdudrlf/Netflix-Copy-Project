import { request, capitalizeFirstCharacter } from "../../utils";
import Carousel from "../Carousel/Carousel";
import Component from "../Component/Component";

export default class LolomoRow extends Component {
  $category;

  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("section");
    this.$currElement.className = "lolomo__row";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    this.renderHeader();
    this.renderCarousel();

    this.$parentElement.appendChild(this.$currElement);
  }

  renderHeader() {
    const header = document.createElement("div");
    header.className = "lolomo__row__header";
    header.textContent = capitalizeFirstCharacter(this.$state.category).replace(
      /_/g,
      " "
    );

    this.$currElement.appendChild(header);
  }

  async renderCarousel() {
    let data = {};
    let requestURL = "";
    try {
      switch (this.$state.category) {
        case "trend": {
          requestURL = `/trending/${this.$state.genre}/day`;
          data = await request(requestURL);
          break;
        }
        case "popular":
        case "top_rated": {
          if (this.$state.genre === "all") {
            let movieData = await request(`/movie/${this.$state.category}`);
            let tvData = await request(`/tv/${this.$state.category}`);
            movieData = movieData.results;
            tvData = tvData.results;
            data.results = [];
            for (let i = 0; i < 10; ++i) {
              data.results.push(movieData[i], tvData[i]);
            }
            break;
          }

          requestURL = `/${this.$state.genre}/${this.$state.category}`;
          data = await request(requestURL);
          break;
        }
        case "upcoming":
        case "now_playing": {
          requestURL = `/movie/${this.$state.category}`;
          data = await request(requestURL);
          break;
        }
      }

      new Carousel({
        parentElement: this.$currElement,
        state: { ...this.$state, data },
      });
    } catch (e) {
      console.log(e.message);
      console.log(`Failed to retrieve data from "${requestURL}"`);
    }
  }
}
