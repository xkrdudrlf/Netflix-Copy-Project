import Component from "../Component/Component.mjs";
import Lolomo from "../Lolomo/Lolomo.mjs";
import Details from "../Details/Details.mjs";

export default class Main extends Component {
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("main");
    this.$currElement.className = "main";

    this.render();
  }

  render(isUpdate = false) {
    this.$currElement.innerHTML = "";
    this.$childrenElements = [];

    let newChild;
    switch (this.$state.content) {
      case "lolomo":
        newChild = new Lolomo({
          parentElement: this.$currElement,
          state: { activeTab: this.$state.activeTab },
        });
        break;
      case "details":
        newChild = new Details({ parentElement: this.$currElement });
        break;
    }

    this.addChildren([newChild]);

    if (!isUpdate) this.$parentElement.appendChild(this.$currElement);
  }

  update(changedStates) {
    if (!changedStates.content) return;

    this.render(true);
  }
}
