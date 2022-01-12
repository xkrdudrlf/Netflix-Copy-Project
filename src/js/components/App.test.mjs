import App from "./App.mjs";

const parentElement = document.createElement("div");
parentElement.className = "app";

describe("App", function () {
  it("should have 3 subcomponents: Navbar, Main, Footer", function () {
    history.pushState({}, "", "/Home");
    // const app = new App({ parentElement });
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
