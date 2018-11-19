const checkPermutation = require("./q2");

describe("c1-q1: check permutation", () => {
  it("should check is inputs are not empty", () => {
    expect(checkPermutation("", "")).toBe(false);
  });

  it("should check is inputs are not string", () => {
    expect(checkPermutation({}, [])).toBe(false);
  });

  it("should check is inputs are same size", () => {
    expect(checkPermutation("abc", "abcd")).toBe(false);
  });

  it("should check is inputs are permutation", () => {
    expect(checkPermutation("cat", "act")).toBe(true);
  });
});
