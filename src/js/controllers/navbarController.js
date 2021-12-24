import NavbarView from "../views/NavbarView";
import NavbarNavigationPrimaryView from "../views/NavbarNavigationPrimaryView";
import NavbarNavigationSecondaryView from "../views/NavbarNavigationSecondaryView";

import * as NavbarModel from "../models/navbarModel";

let navbar;
let navbarNavigationPrimary;
let navbarNavigationSecondary;

const render = (pathname) => {
  // Navbar
  navbar = new NavbarView(document.querySelector(".app"));
  navbar.render();

  // NavbarNavigationPrimary
  navbarNavigationPrimary = new NavbarNavigationPrimaryView(
    document.querySelector(".navbar__navigation")
  );
  navbarNavigationPrimary.render();

  const tabs = ["Home", "TV Shows", "Movies", "New & popular", "My List"];
  tabs.forEach((tab) => {
    if (pathname === tab) navbarNavigationPrimary.addTab(tab, true);
    else navbarNavigationPrimary.addTab(tab);
  });

  // NavbarNavigationSecondary
  navbarNavigationSecondary = new NavbarNavigationSecondaryView(
    document.querySelector(".navbar__navigation")
  );
  navbarNavigationSecondary.render();
};

const controlClickNavigationTab = (tabContent) => {
  // 1. Change the URL
  const nextURL = `${document.location.hash}/${tabContent}`;
  const nextTitle = `${tabContent} - Netflix`;
  const nextState = { additionalInformation: "Updated the URL with JS" };

  window.history.pushState(nextState, nextTitle, nextURL);

  // 2. Change the Page Title
  document.title = nextTitle;
};

export default function init(pathname) {
  render(pathname);
  navbar.addHandlerClickNavigationLogo(controlClickNavigationTab);
  navbarNavigationPrimary.addHandlerClickNavigationTab(
    controlClickNavigationTab
  );
}

// console.log(document.location.pathname.split("/")[1]);
// init(document.location.pathname.split("/")[1]);

/*
  1. Implement Basic Route Logic with navigation tabs
  2. Implement Dynamic css effect (hover, dropdown etc)
*/
