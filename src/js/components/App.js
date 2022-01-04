import Component from "./Component/Component";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default class App extends Component {
  constructor(componentInfo) {
    super(componentInfo);
    this.$currElement = this.$parentElement;

    this.render();

    this.addHandlerRoute();
  }

  render() {
    this.$currElement.innerHTML = "";

    if (window.location.pathname === "/") {
      window.location.replace("/Home");
    }

    const activeTab = decodeURI(location.pathname.split("/")[1]);
    const content =
      activeTab === "tv" || activeTab === "movie" ? "details" : "lolomo";

    new Navbar({ parentElement: this.$currElement, state: { activeTab } });
    new Main({
      parentElement: this.$currElement,
      state: { activeTab, content },
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
