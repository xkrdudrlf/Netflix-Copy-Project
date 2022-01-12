import Navbar from "./Navbar.mjs";

const parentElement = document.createElement("div");

describe("Navbar", function () {
  let navbar = new Navbar({ parentElement, state: { activeTab: "Home" } });
  const navbarLogo = navbar.$currElement.querySelector(".navbar__logo");
  const navbarNavigation = navbar.$currElement.querySelector(
    ".navbar__navigation"
  );
  let navbarTabs = navbarNavigation.querySelectorAll(".navbar__tab");

  it("should have the right className", function () {
    expect(navbar.$currElement.className).toBe("navbar");
  });

  it("should have logo and navigation section as children", function () {
    expect(navbarLogo).not.toBeNull();
    expect(navbarNavigation).not.toBeNull();
  });

  it("should mark activeTab with active class", function () {
    expect(navbarTabs[0].classList.contains("active")).toBeTrue();

    navbar = new Navbar({ parentElement, state: { activeTab: "TV Shows" } });
    navbarTabs = navbar.$currElement.querySelectorAll(".navbar__tab");
    expect(navbarTabs[1].classList.contains("active")).toBeTrue();

    navbar = new Navbar({ parentElement, state: { activeTab: "Movies" } });
    navbarTabs = navbar.$currElement.querySelectorAll(".navbar__tab");
    expect(navbarTabs[2].classList.contains("active")).toBeTrue();

    navbar = new Navbar({
      parentElement,
      state: { activeTab: "New & Popular" },
    });
    navbarTabs = navbar.$currElement.querySelectorAll(".navbar__tab");
    expect(navbarTabs[3].classList.contains("active")).toBeTrue();
  });
});
