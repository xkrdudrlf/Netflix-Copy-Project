import * as utils from "../../utils.mjs";

import Navbar from "./Navbar.mjs";

const parentElement = document.createElement("div");

describe("Navbar", function () {
  const navbar = new Navbar({ parentElement, state: { activeTab: "Home" } });
  const navbarLogo = navbar.$currElement.querySelector(".navbar__logo");
  const navbarNavigation = navbar.$currElement.querySelector(
    ".navbar__navigation"
  );
  const navbarTabs = navbarNavigation.querySelectorAll(".navbar__tab");

  it("should have the right className", function () {
    expect(navbar.$currElement.className).toBe("navbar");
  });

  it("should have logo and navigation section as children", function () {
    expect(navbarLogo).not.toBeNull();
    expect(navbarNavigation).not.toBeNull();
  });

  it("should detect click event from navbarTabs", function () {
    expect(navbarTabs[0].classList.contains("active")).toBeTrue();
    navbarTabs[1].dispatchEvent(
      new window.MouseEvent("click", { bubbles: true })
    );
    expect(navbarTabs[0].classList.contains("active")).toBeFalse();
    expect(navbarTabs[1].classList.contains("active")).toBeTrue();
  });
});
/*
  export const emitEvent = (eventName, target, bubbles) => {
    const event = new Event(eventName, { bubbles });
    target.dispatchEvent(event);
  };
*/
