import { JSDOM } from "jsdom";

const dom = new JSDOM(`<!DOCTYPE html><body><div class="app"></div></body>`, {
  url: "https://localhost:1234",
});

global.window = dom.window;
global.document = dom.window.document;
global.history = dom.window.history;
global.Event = dom.window.Event;
// Source : https://stackoverflow.com/questions/44249985/js-testing-code-that-uses-an-intersectionobserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};
