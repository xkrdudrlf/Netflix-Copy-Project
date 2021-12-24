import navbarControllerInit from "./controllers/navbarController";

if (window.location.pathname === "/") {
  window.location.replace("/Home");
}

const pathname = decodeURI(document.location.pathname.split("/")[1]);
navbarControllerInit(pathname);
