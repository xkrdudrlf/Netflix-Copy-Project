import navbarControllerInit from "./navbarController";
import mainControllerInit from "./mainController";

if (window.location.pathname === "/") {
  window.location.replace("/Home");
}

/*
  App Level Model needed
    to reflect the changes from "navbar" to "main"
*/

const pathname = decodeURI(document.location.pathname.split("/")[1]);
navbarControllerInit(pathname);

mainControllerInit();
