import NavbarPrimary from "./NavbarNavigationPrimary.mjs";

const parentElement = document.createElement("div");

describe("NavbarPrimary", function () {
  const navbarPrimary = new NavbarPrimary({ parentElement });
  const navbarTabs =
    navbarPrimary.$currElement.querySelectorAll(".navbar__tab");

  it("should have the right className", function () {
    expect(navbarPrimary.$currElement.className).toBe(
      "navbar__navigation__primary"
    );
  });

  it("should have 5 tabs", function () {
    expect(navbarTabs.length).toBe(5);
  });

  it("should have 5 tabs in order", function () {
    expect(navbarTabs[0].textContent).toBe("Home");
    expect(navbarTabs[1].textContent).toBe("TV Shows");
    expect(navbarTabs[2].textContent).toBe("Movies");
    expect(navbarTabs[3].textContent).toBe("New & Popular");
    expect(navbarTabs[4].textContent).toBe("My List");
  });
});
