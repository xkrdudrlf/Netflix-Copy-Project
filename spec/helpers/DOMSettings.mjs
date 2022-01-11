import { JSDOM } from "jsdom";

const dom = new JSDOM(
  `<!DOCTYPE html><body><p id="app">My First JSDOM!</p></body>`,
  {
    url: "https://localhost:1234",
  }
);

global.window = dom.window;
global.document = dom.window.document;
global.history = dom.window.history;
global.Event = dom.window.Event;

// beforeEach(function () {
//   jasmine.addMatchers({
//     toBePlaying: function () {
//       return {
//         compare: function (actual, expected) {
//           var player = actual;

//           return {
//             pass: player.currentlyPlayingSong === expected && player.isPlaying,
//           };
//         },
//       };
//     },
//   });
// });
