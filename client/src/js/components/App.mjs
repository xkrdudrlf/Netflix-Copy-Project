import Component from "./Component/Component.mjs";
import Login from "./Login/Login.mjs";
import Navbar from "./Navbar/Navbar.mjs";
import Main from "./Main/Main.mjs";
import Footer from "./Footer/Footer.mjs";

export default class App extends Component {
  constructor(componentInfo) {
    super(componentInfo);
    this.$currElement = this.$parentElement;

    this.render();

    this.addHandlerRoute();
  }

  render() {
    this.$currElement.innerHTML = "";
    // Check if the user is logged in or not
    let token = localStorage.getItem("token");
    if (!token) {
      history.pushState("", "", "/Login");
      const login = new Login({
        parentElement: this.$currElement,
      });

      return;
    }

    // If so, render the right page for the user
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

    const activeTab = decodeURI(window.location.pathname.split("/")[1]);
    return activeTab;
  }

  getContent(activeTab) {
    return activeTab === "tv" || activeTab === "movie" ? "details" : "lolomo";
  }
}
