import * as utils from "../../utils.mjs";

import Component from "../Component/Component.mjs";
import LolomoRowCarousel from "./LolomoRowCarousel.mjs";
import LolomoRowHeader from "./LolomoRowHeader.mjs";

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

    new LolomoRowHeader({
      parentElement: this.$currElement,
      state: { ...this.$state },
    });
    new LolomoRowCarousel({
      parentElement: this.$currElement,
      state: { ...this.$state },
    });

    this.$parentElement.appendChild(this.$currElement);
  }
}
