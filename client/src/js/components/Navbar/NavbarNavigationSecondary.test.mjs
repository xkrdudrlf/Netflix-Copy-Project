import NavbarSecondary from "./NavbarNavigationSecondary.mjs";

const navbarSecondary = new NavbarSecondary({
  parentElement: document.createElement("div"),
});
const navbarElements =
  navbarSecondary.$currElement.querySelectorAll(".navbar__element");

describe("NavbarSecondary", function () {
  it("should have the right className", function () {
    expect(navbarSecondary.$currElement.className).toBe(
      "navbar__navigation__secondary"
    );
  });

  it("should have 4 elements", function () {
    expect(navbarElements.length).toBe(4);
  });
});
