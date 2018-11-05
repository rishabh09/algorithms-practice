const solution = require("./solution");

describe("a very big sum", () => {
  it("should return 5000000015", () => {
    expect(solution([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])).toEqual(5000000015);
  });
});
