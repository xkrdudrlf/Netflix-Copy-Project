import { request, capitalizeFirstCharacter } from "../../utils";
import Carousel from "../Carousel/Carousel";
import Component from "../Component/Component";
import LolomoRowCarousel from "./LolomoRowCarousel";
import LolomoRowHeader from "./LolomoRowHeader";

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
