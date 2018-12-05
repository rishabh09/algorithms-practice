const binarySearch = require("./binary-search");

describe("Binary Search Rotated Array", () => {
  it("should return index of element", () => {
    expect(binarySearch([8, 9, 1, 2, 3, 4, 5, 6, 7], 8)).toBe(0);
  });

  it("should return -1 is element is not present", () => {
    expect(binarySearch([5, 6, 7, 8, 9, 1, 2, 3, 4], 20)).toBe(-1);
  });
});
