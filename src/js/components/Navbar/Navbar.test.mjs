import Navbar from "./Navbar.mjs";

let navbar = new Navbar({
  parentElement: document.createElement("div"),
  state: { activeTab: "Home" },
});
const navbarLogo = navbar.$currElement.querySelector(".navbar__logo");
const navbarNavigation = navbar.$currElement.querySelector(
  ".navbar__navigation"
);
let navbarTabs = navbarNavigation.querySelectorAll(".navbar__tab");

describe("Navbar", function () {
  it("should have the right className", function () {
    expect(navbar.$currElement.className).toBe("navbar");
  });

  it("should have logo and navigation section as children", function () {
    expect(navbarLogo).not.toBeNull();
    expect(navbarNavigation).not.toBeNull();
  });

  it("should mark activeTab with active class", function () {
    ["Home", "TV Shows", "Movies", "New & Popular"].forEach((tabName, i) => {
      navbar = new Navbar({
        parentElement: document.createElement("div"),
        state: { activeTab: tabName },
      });
      navbarTabs = navbar.$currElement.querySelectorAll(".navbar__tab");
      expect(navbarTabs[i].classList.contains("active")).toBeTrue();
    });
  });
});
