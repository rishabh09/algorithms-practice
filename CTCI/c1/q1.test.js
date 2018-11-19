const isUnique = require("./q1");

describe("c1-q1: isUnique", () => {
  it("should check is string is not empty", () => {
    expect(isUnique("")).toBe(false);
  });

  it("should check is input is not string", () => {
    expect(isUnique()).toBe(false);
    expect(isUnique(null)).toBe(false);
    expect(isUnique(true)).toBe(false);
    expect(isUnique([])).toBe(false);
    expect(isUnique({})).toBe(false);
    expect(isUnique(123456)).toBe(false);
  });

  it("should check is string is unique", () => {
    expect(isUnique("abcd")).toBe(true);
  });

  it("should check is string is unique", () => {
    expect(isUnique("abcdab")).toBe(false);
  });
});
