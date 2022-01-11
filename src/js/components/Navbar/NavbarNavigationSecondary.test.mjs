import NavbarSecondary from "./NavbarNavigationSecondary.mjs";

const parentElement = document.createElement("div");

describe("NavbarSecondary", function () {
  const navbarSecondary = new NavbarSecondary({ parentElement });
  const navbarElements =
    navbarSecondary.$currElement.querySelectorAll(".navbar__element");

  it("should have the right className", function () {
    expect(navbarSecondary.$currElement.className).toBe(
      "navbar__navigation__secondary"
    );
  });

  it("should have 4 elements", function () {
    expect(navbarElements.length).toBe(4);
  });
});
