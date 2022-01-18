import MockedDetails from "../../../../spec/helpers/MockedDetails.mjs";

describe("Details", function () {
  const parentElement = document.createElement("div");
  new MockedDetails({
    parentElement: parentElement,
  });
  /*
    TODO:
    async 관련해서 Execution 순서 질문하기
    왜? async가 있어서 new MockedDetails가 render은 나중에 되는건데,
    it function 밖으로 빼냈을 경우에는 왜 되는 것인가?

    혹시 it function 너도 async?
  */
  it("should have a card in it", function () {
    const card = parentElement.querySelector(".card");
    expect(card).not.toBeNull();
  });
});
