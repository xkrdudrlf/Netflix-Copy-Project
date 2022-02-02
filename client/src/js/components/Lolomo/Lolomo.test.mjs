import MockedLolomo from "../../../../spec/helpers/MockedLolomo.mjs";

describe("Lolomo", function () {
  it("should have categories.length number of LolomoRows inside", function () {
    const testCases = [
      ["Home", 3],
      ["TV Shows", 3],
      ["Movies", 4],
      ["New & Popular", 4],
    ];
    for (const [activeTab, nCategories] of testCases) {
      const lolomo = new MockedLolomo({
        parentElement: document.createElement("div"),
        state: {
          activeTab,
        },
      });
      const lolomoRows = lolomo.$currElement.querySelectorAll(".lolomo__row");

      expect(lolomoRows.length).toBe(nCategories);
    }
  });
});
