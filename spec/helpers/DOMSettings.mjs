import { JSDOM } from "jsdom";

const dom = new JSDOM(
  `<!DOCTYPE html><body><p id="app">My First JSDOM!</p></body>`
);

global.window = dom.window;
global.document = dom.window.document;

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
