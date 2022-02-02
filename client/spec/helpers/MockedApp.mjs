import App from "../../src/js/components/App.mjs";
import Footer from "../../src/js/components/Footer/Footer.mjs";
import Navbar from "../../src/js/components/Navbar/Navbar.mjs";
import MockedMain from "./MockedMain.mjs";

export default class MockedApp extends App {
  render() {
    this.$currElement.innerHTML = "";

    this.$state.activeTab = this.getActiveTab();
    this.$state.content = this.getContent(this.$state.activeTab);

    const navbar = new Navbar({
      parentElement: this.$currElement,
      state: { activeTab: this.$state.activeTab },
    });

    const main = new MockedMain({
      parentElement: this.$currElement,
      state: {
        activeTab: this.$state.activeTab,
        content: this.$state.content,
      },
    });

    const footer = new Footer({ parentElement: this.$currElement });

    this.addChildren([navbar, main, footer]);
  }
}
