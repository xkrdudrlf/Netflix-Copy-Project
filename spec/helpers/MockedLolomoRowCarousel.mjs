import LolomoRowCarousel from "../../src/js/components/Lolomo/LolomoRowCarousel.mjs";
import DummyData from "./DummyData.mjs";

export default class MockedLolomoRowCarousel extends LolomoRowCarousel {
  async prepareDataState() {
    this.$state.slidesData = DummyData.$slidesData;
  }
}
