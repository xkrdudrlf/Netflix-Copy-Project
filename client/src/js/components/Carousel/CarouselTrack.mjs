import Component from "../Component/Component.mjs";
import CarouselSlide from "./CarouselSlide.mjs";

export default class CarouselTrack extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("ul");
    this.$currElement.className = "carousel__track";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    this.$state.slidesData.forEach((data) => {
      new CarouselSlide({ parentElement: this.$currElement, state: { data } });
    });

    this.$parentElement.appendChild(this.$currElement);
  }
}
