const solution = require("./solution");

describe("multiples of 3 and 5", () => {
  it("should return 23", () => {
    expect(solution(10)).toEqual(23);
  });

  it("should return 2318", () => {
    expect(solution(100)).toEqual(2318);
  });
});
