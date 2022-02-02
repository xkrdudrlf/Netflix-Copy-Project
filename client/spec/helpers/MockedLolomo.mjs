import Lolomo from "../../src/js/components/Lolomo/Lolomo.mjs";
import { MockedLolomoRow } from "./MockedLolomoRow.mjs";

export default class MockedLolomo extends Lolomo {
  render(isUpdate = false) {
    this.$currElement.innerHTML = "";

    const [categories, genre] = this.getCategoriesAndGenre();

    categories.forEach((category) => {
      new MockedLolomoRow({
        parentElement: this.$currElement,
        state: { genre, category },
      });
    });

    if (!isUpdate) this.$parentElement.appendChild(this.$currElement);
  }
}
