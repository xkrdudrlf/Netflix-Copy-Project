import Component from "./Component/Component.mjs";
import Login from "./Login/Login.mjs";
import Navbar from "./Navbar/Navbar.mjs";
import Main from "./Main/Main.mjs";
import Footer from "./Footer/Footer.mjs";
import { SERVER_URL } from "../config.mjs";

export default class App extends Component {
  constructor(componentInfo) {
    super(componentInfo);
    this.$currElement = this.$parentElement;

    this.render();

    this.addHandlerRoute();
  }

  async render() {
    this.$currElement.innerHTML = "";

    const user = await this.getUser();
    if (!user) {
      history.pushState("", "", "/Login");

      new Login({
        parentElement: this.$currElement,
      });

      return;
    }

    Component.context["user"] = user;
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

  async getUser() {
    const token = localStorage.getItem("access-token");
    if (!token) return;

    const response = await fetch(`${SERVER_URL}/user`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response.status !== 200) return false;

    const user = await response.json();

    return user;
  }
}
