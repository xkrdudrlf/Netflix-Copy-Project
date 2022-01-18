import * as utils from "../utils.mjs";

import MockedApp from "../../../spec/helpers/MockedApp.mjs";

describe("App", function () {
  const parentElement = document.createElement("div");
  parentElement.className = "app";
  history.pushState({}, "", "/Home");
  const app = new MockedApp({ parentElement });

  const navbar = app.$currElement.querySelector(".navbar");
  const main = app.$currElement.querySelector(".main");
  const footer = app.$currElement.querySelector(".footer");

  it("should have 3 subcomponents: Navbar, Main, Footer", function () {
    history.pushState({}, "", "/Home");

    expect(navbar).not.toBeNull();
    expect(main).not.toBeNull();
    expect(footer).not.toBeNull();

    expect(app.$state.activeTab).toBe("Home");
    expect(app.$state.content).toBe("lolomo");
  });

  it("should update its state upon urlchange/popstate event", async function () {
    const carouselSlide = main.querySelector(".carousel__slide");
    const mouseClickEvent = new window.MouseEvent("click", { bubbles: true });

    carouselSlide.dispatchEvent(mouseClickEvent);

    expect(app.$state.activeTab).toBe("movie");
    expect(app.$state.content).toBe("details");
  });
});

/*
  navbarTabs[1].dispatchEvent(
    new window.MouseEvent("click", { bubbles: true })
  );
  expect(navbarTabs[0].classList.contains("active")).toBeFalse();
  expect(navbarTabs[1].classList.contains("active")).toBeTrue();
  export const emitEvent = (eventName, target, bubbles) => {
    const event = new Event(eventName, { bubbles });
    target.dispatchEvent(event);
  };
*/
