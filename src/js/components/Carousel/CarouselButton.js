import Component from "../Component/Component";

export default class CarouselButton extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("button");
    this.$currElement.className = `carousel__button carousel__button--${this.$state.direction}`;

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    const arrowIcon = document.createElement("i");
    arrowIcon.className = `fas fa-chevron-${this.$state.direction}`;
    this.$currElement.appendChild(arrowIcon);

    this.$parentElement.appendChild(this.$currElement);
  }
}
