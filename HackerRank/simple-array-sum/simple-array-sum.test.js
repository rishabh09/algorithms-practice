const solution = require("./solution");

describe("simple array sum", () => {
  it("should return 5", () => {
    expect(solution([2, 3])).toBe(5);
  });

  it("should return 31", () => {
    expect(solution([1, 2, 3, 4, 10, 11])).toBe(31);
  });
});
