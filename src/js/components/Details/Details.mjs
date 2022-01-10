import * as utils from "../../utils";
import * as config from "../../config";

import Card from "../Card/Card.mjs";
import Component from "../Component/Component.mjs";

export default class Details extends Component {
  constructor(componentInfo) {
    super(componentInfo);
    this.render();
  }

  async render() {
    this.$state.className = "details";

    await this.prepareDataState();

    new Card({ parentElement: this.$parentElement, state: this.$state });
  }

  async prepareDataState() {
    const data = await this.fetchData();
    if (!data) return;

    this.$state.image = `${config.THE_MOVIE_DB_IMAGE_URL}/${data.poster_path}`;

    if (this.$state.genre === "movie") {
      this.$state.header = data.original_title;
      this.setMovieSubHeaders(data);
    }

    if (this.$state.genre === "tv") {
      this.$state.header = data.original_name;
      this.setTVSubHeaders(data);
    }

    this.$state.body = data.overview;
  }

  addSubHeader(title, content) {
    if (!this.$state.subHeaders) this.$state.subHeaders = [];
    this.$state.subHeaders.push({ title, content });
  }

  async fetchData() {
    const [, genre, contentId] = location.pathname.split("/");
    this.$state.genre = genre;
    try {
      const data = await utils.request(`/${genre}/${contentId}`);
      return data;
    } catch (e) {
      console.log(e.message);
      console.log(`Failed to fetch from "/${genre}/${contentId}"`);
    }
  }

  setTVSubHeaders(data) {
    this.addSubHeader(
      "Seasons/Episodes",
      `${data.number_of_seasons} season(s) (${data.number_of_episodes} episode(s))`
    );
    this.addSubHeader(
      "Languages",
      `${data.spoken_languages
        .map((lang) => {
          return lang.english_name;
        })
        .join(", ")}`
    );
    this.addSubHeader(
      "Production Countries",
      `${data.production_countries
        .map((country) => {
          return country.name;
        })
        .join(", ")}`
    );
    this.addSubHeader("First aired", `${data.first_air_date}`);
    this.addSubHeader("Last aired", `${data.last_air_date}`);
    this.addSubHeader(
      "Vote",
      `${data.vote_average} (out of ${data.vote_count} votes)`
    );
    this.addSubHeader(
      "Genres",
      `${data.genres
        .map((genre) => {
          return genre.name;
        })
        .join(", ")}`
    );
  }

  setMovieSubHeaders(data) {
    this.addSubHeader(
      "Duration",
      `${
        data.runtime / 60 > 0
          ? `${Math.floor(data.runtime / 60)}hr ${data.runtime % 60}mins`
          : `${data.runtime % 60}mins`
      }`
    );
    this.addSubHeader(
      "Languages",
      `${data.spoken_languages
        .map((lang) => {
          return lang.english_name;
        })
        .join(", ")}`
    );
    this.addSubHeader(
      "Production Countries",
      `${data.production_countries
        .map((country) => {
          return country.name;
        })
        .join(", ")}`
    );
    this.addSubHeader("Release Date", `${data.release_date}`);
    this.addSubHeader(
      "Vote",
      `${data.vote_average} (out of ${data.vote_count} votes)`
    );
    this.addSubHeader(
      "Genres",
      `${data.genres
        .map((genre) => {
          return genre.name;
        })
        .join(", ")}`
    );
  }
}
