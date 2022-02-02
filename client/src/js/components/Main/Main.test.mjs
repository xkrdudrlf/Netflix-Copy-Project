import MockedMain from "../../../../spec/helpers/MockedMain.mjs";

describe("Main", function () {
  const lolomoMain = new MockedMain({
    parentElement: document.createElement("div"),
    state: {
      activeTab: "Home",
      content: "lolomo",
    },
  });
  it("should have Lolomo component as a child if a content is lolomo", function () {
    const lolomo = lolomoMain.$currElement.querySelector(".lolomo");
    expect(lolomo).not.toBeNull();
  });

  const detailsMain = new MockedMain({
    parentElement: document.createElement("div"),
    state: {
      activeTab: "Home",
      content: "details",
    },
  });
  it("should have Details component as a child if a content is details", function () {
    const details = detailsMain.$currElement.querySelector(".details");
    expect(details).not.toBeNull();
  });
});
