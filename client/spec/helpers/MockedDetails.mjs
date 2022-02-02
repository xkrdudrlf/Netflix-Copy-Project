import Details from "../../src/js/components/Details/Details.mjs";
import DummyData from "./DummyData.mjs";

export default class MockedDetails extends Details {
  async fetchData() {
    this.$state.genre = "movie";
    return DummyData.$detailsData;
  }
}
