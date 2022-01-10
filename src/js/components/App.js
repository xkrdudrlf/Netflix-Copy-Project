import Component from "./Component/Component";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default class App extends Component {
  constructor(componentInfo) {
    super(componentInfo);
    this.$currElement = this.$parentElement;

    this.onInit();
  }

  onInit() {
    this.render();

    this.addHandlerRoute();
  }

  render() {
    if (window.location.pathname === "/") {
      window.location.replace("/Home");
    }

    const activeTab = decodeURI(location.pathname.split("/")[1]);

    this.$currElement.innerHTML = "";

    new Navbar({ parentElement: this.$currElement, state: { activeTab } });
    new Main({
      parentElement: this.$currElement,
      state: {
        activeTab,
        content:
          activeTab === "tv" || activeTab === "movie" ? "details" : "lolomo",
      },
    });
    new Footer({ parentElement: this.$currElement });
  }

  addHandlerRoute() {
    ["urlchange", "popstate"].forEach((event) => {
      window.addEventListener(event, (e) => {
        this.render();
      });
    });
  }
}
