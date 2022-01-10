import * as utils from "../../utils";

import Component from "../Component/Component.mjs";

export default class LolomoRowHeader extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("div");
    this.$currElement.className = "lolomo__row__header";

    this.render();
  }

  render() {
    this.$currElement.innerHTML = "";

    this.$currElement.textContent = utils
      .capitalizeFirstCharacter(this.$state.category)
      .replace(/_/g, " ");

    this.$parentElement.appendChild(this.$currElement);
  }
}
