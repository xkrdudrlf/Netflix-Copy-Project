import Component from "./Component/Component.mjs";
import Footer from "./Footer/Footer.mjs";
import Main from "./Main/Main.mjs";
import Navbar from "./Navbar/Navbar.mjs";

export default class App extends Component {
  constructor(componentInfo) {
    super(componentInfo);
    this.$currElement = this.$parentElement;

    this.render();

    this.addHandlerRoute();
  }

  render() {
    this.$currElement.innerHTML = "";

    this.$state.activeTab = this.getActiveTab();
    this.$state.content = this.getContent(this.$state.activeTab);

    const navbar = new Navbar({
      parentElement: this.$currElement,
      state: { activeTab: this.$state.activeTab },
    });

    const main = new Main({
      parentElement: this.$currElement,
      state: {
        activeTab: this.$state.activeTab,
        content: this.$state.content,
      },
    });

    const footer = new Footer({ parentElement: this.$currElement });

    this.addChildren([navbar, main, footer]);
  }

  addHandlerRoute() {
    ["urlchange", "popstate"].forEach((event) => {
      window.addEventListener(event, () => {
        const activeTab = this.getActiveTab();
        const content = this.getContent(activeTab);

        this.setState({ activeTab, content });
      });
    });
  }

  getActiveTab() {
    if (window.location.pathname === "/") {
      window.location.replace("/Home");
    }

    const activeTab = decodeURI(location.pathname.split("/")[1]);

    return activeTab;
  }

  getContent(activeTab) {
    return activeTab === "tv" || activeTab === "movie" ? "details" : "lolomo";
  }
}
