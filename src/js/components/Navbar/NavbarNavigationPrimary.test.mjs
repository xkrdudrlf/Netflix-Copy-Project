import NavbarPrimary from "./NavbarNavigationPrimary.mjs";

describe("NavbarPrimary", function () {
  it("should have 5 tabs", function () {
    // FIXME: How to simulate DOM with Jasmine like document element.
    const parentElement = document.createElement("div");
    const navbarPrimary = new NavbarPrimary({ parentElement });
    const navbarTabs =
      navbarPrimary.$currElement.querySelectorAll(".navbar__tab");
    expect(navbarTabs.length).toBe(5);
  });
});

// beforeEach(function () {
//   player = new Player();
//   song = new Song();
// });

// it("should be able to play a Song", function () {
//   player.play(song);
//   expect(player.currentlyPlayingSong).toEqual(song);

//   //demonstrates use of custom matcher
//   expect(player).toBePlaying(song);
// });
