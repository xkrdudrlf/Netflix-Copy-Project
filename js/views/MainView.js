import View from "./View";

export default class MainView extends View {
  addHandlerTabChange(handler) {
    document.addEventListener("urlchange", (e) => {
      console.log("red");
    });
  }
  _generateElement() {
    const main = document.createElement("main");
    main.className = "main";

    return main;
  }
}
