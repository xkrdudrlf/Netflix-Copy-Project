import Component from "../Component/Component.mjs";
import LolomoRow from "./LolomoRow.mjs";

export default class Lolomo extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = "lolomo";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    const [categories, genre] = this.getCategoriesAndGenre();

    categories.forEach((category) => {
      new LolomoRow({
        parentElement: this.$currElement,
        state: { genre, category },
      });
    });

    this.$parentElement.appendChild(this.$currElement);
  }

  getCategoriesAndGenre() {
    let categories, genre;
    switch (this.$state.activeTab) {
      case "Home":
        categories = ["trend", "popular", "top_rated"];
        genre = "all";
        break;
      case "TV Shows":
        categories = ["trend", "popular", "top_rated"];
        genre = "tv";
        break;
      case "Movies":
        categories = ["trend", "popular", "top_rated", "upcoming"];
        genre = "movie";
        break;
      case "New & Popular":
        categories = ["trend", "popular", "now_playing", "upcoming"];
        genre = "all";
        break;
      case "My List":
        break;
    }

    return [categories, genre];
  }
}
