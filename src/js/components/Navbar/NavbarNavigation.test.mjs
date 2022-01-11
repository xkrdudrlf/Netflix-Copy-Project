import NavbarNavigation from "./NavbarNavigation.mjs";

const parentElement = document.createElement("div");

describe("NavbarNavigation", function () {
  const navbarNavigation = new NavbarNavigation({ parentElement });

  it("should have the right className", function () {
    expect(navbarNavigation.$currElement.className).toBe("navbar__navigation");
  });

  it("should have 2 children sections", function () {
    const navbarPrimary = navbarNavigation.$currElement.querySelector(
      ".navbar__navigation__primary"
    );
    const navbarSecondary = navbarNavigation.$currElement.querySelector(
      ".navbar__navigation__secondary"
    );
    expect(navbarPrimary).not.toBeNull();
    expect(navbarSecondary).not.toBeNull();
  });
});
