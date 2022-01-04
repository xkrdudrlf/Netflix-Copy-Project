import MainView from "../views/MainView";

let main;

const render = () => {
  main = new MainView(document.querySelector(".app"));
  main.render();
};

export default function init() {
  render();
}
