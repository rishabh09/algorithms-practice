const { binarySearch, binarySearchLast, binarySearchFirst } = require("./binary-search");

describe("Binary Search", () => {
  it("should return index of element", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBe(6);
  });

  it("should return -1 is element is not present", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 20)).toBe(-1);
  });
});

describe("Binary Search Last", () => {
  it("should return last occurence element", () => {
    expect(binarySearchLast([1, 2, 3, 4, 7, 7, 7, 8, 9], 7)).toBe(6);
  });
});

describe("Binary Search First", () => {
  it("should return fast occurence element", () => {
    expect(binarySearchFirst([1, 2, 7, 7, 7, 7, 7, 8, 9], 7)).toBe(2);
  });
});
