import NavbarNavigation from "./NavbarNavigation.mjs";

const navbarNavigation = new NavbarNavigation({
  parentElement: document.createElement("div"),
});
const navbarPrimary = navbarNavigation.$currElement.querySelector(
  ".navbar__navigation__primary"
);
const navbarSecondary = navbarNavigation.$currElement.querySelector(
  ".navbar__navigation__secondary"
);

describe("NavbarNavigation", function () {
  it("should have the right className", function () {
    expect(navbarNavigation.$currElement.className).toBe("navbar__navigation");
  });

  it("should have 2 children sections", function () {
    expect(navbarPrimary).not.toBeNull();
    expect(navbarSecondary).not.toBeNull();
  });
});
