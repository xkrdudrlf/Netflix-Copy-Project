import LolomoRow from "../../src/js/components/Lolomo/LolomoRow.mjs";
import LolomoRowHeader from "../../src/js/components/Lolomo/LolomoRowHeader.mjs";
import MockedLolomoRowCarousel from "./MockedLolomoRowCarousel.mjs";

export class MockedLolomoRow extends LolomoRow {
  render() {
    this.$currElement.innerHTML = "";

    new LolomoRowHeader({
      parentElement: this.$currElement,
      state: { ...this.$state },
    });

    new MockedLolomoRowCarousel({
      parentElement: this.$currElement,
      state: { ...this.$state },
    });

    this.$parentElement.appendChild(this.$currElement);
  }
}
