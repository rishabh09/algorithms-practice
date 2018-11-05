const solution = require("./solution");

describe("diagonal difference", () => {
  it("should return 15", () => {
    expect(solution([[11, 2, 4], [4, 5, 6], [10, 8, -12]])).toEqual(15);
  });
});
