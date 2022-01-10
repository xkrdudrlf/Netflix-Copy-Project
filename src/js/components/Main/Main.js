import Component from "../Component/Component";
import Lolomo from "../Lolomo/Lolomo";
import Details from "../Details/Details";

export default class Main extends Component {
  $update = false;
  constructor(componentInfo) {
    super(componentInfo);

    this.$currElement = document.createElement("main");
    this.$currElement.className = "main";

    this.render();

    this.addHandlerRenderDetails();
  }

  render() {
    this.$currElement.innerHTML = "";

    if (this.$state.content === "details") {
      new Details({ parentElement: this.$currElement });
    } else {
      new Lolomo({ parentElement: this.$currElement, state: this.$state });
    }

    if (!this.$update) this.$parentElement.appendChild(this.$currElement);
  }

  addHandlerRenderDetails() {
    ["urlchange", "popstate"].forEach((event) => {
      this.$currElement.addEventListener(event, async (e) => {
        this.$state.content = "details";
        this.$update = true;
        this.render();
      });
    });
  }
}
