import Main from "../../src/js/components/Main/Main.mjs";
import MockedDetails from "./MockedDetails.mjs";
import MockedLolomo from "./MockedLolomo.mjs";

export default class MockedMain extends Main {
  render(isUpdate = false) {
    this.$currElement.innerHTML = "";
    this.$childrenElements = [];

    let newChild;
    switch (this.$state.content) {
      case "lolomo":
        newChild = new MockedLolomo({
          parentElement: this.$currElement,
          state: { activeTab: this.$state.activeTab },
        });
        break;
      case "details":
        newChild = new MockedDetails({ parentElement: this.$currElement });
        break;
    }

    this.addChildren([newChild]);

    if (!isUpdate) this.$parentElement.appendChild(this.$currElement);
  }
}
