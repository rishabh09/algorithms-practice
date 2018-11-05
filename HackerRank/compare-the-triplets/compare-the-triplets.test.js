const solution = require("./solution");

describe("compare the triplets", () => {
  it("should return [1, 1]", () => {
    expect(solution([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
  });

  it("should return [2, 1]", () => {
    expect(solution([17, 28, 30], [99, 16, 8])).toEqual([2, 1]);
  });
});
