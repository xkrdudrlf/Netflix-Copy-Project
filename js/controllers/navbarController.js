import NavbarView from "../views/NavbarView";
import NavbarNavigationPrimaryView from "../views/NavbarNavigationPrimaryView";
import NavbarNavigationSecondaryView from "../views/NavbarNavigationSecondaryView";

import * as navbarModel from "../models/navbarModel";
import * as appModel from "../models/appModel";

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
    if (pathname === tab) {
      const activeTab = navbarNavigationPrimary.addTab(tab, true);
      navbarModel.updateActiveTab(activeTab);
    } else {
      navbarNavigationPrimary.addTab(tab);
    }
  });

  // NavbarNavigationSecondary
  navbarNavigationSecondary = new NavbarNavigationSecondaryView(
    document.querySelector(".navbar__navigation")
  );
  navbarNavigationSecondary.render();
};

const controlClickNavigationTab = (activeTab) => {
  // 1. Change the URL
  const nextURL = `${document.location.hash}/${activeTab.textContent}`;
  const nextTitle = `${activeTab.textContent} - Netflix`;
  const nextState = { additionalInformation: "Updated the URL with JS" };

  window.history.pushState(nextState, nextTitle, nextURL);
  const startEvent = new Event("urlchange");
  document.dispatchEvent(startEvent);

  // 2. Change the Page Title
  document.title = nextTitle;

  // 3. Update activeTab state
  const prevActiveTab = navbarModel.updateActiveTab(activeTab);

  return prevActiveTab;
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
