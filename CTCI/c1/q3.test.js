const urlify = require("./q3");

describe("Urilify", () => {
  it("should give null data is invalid", () => {
    expect(urlify(null)).toBe(null);
    expect(urlify([])).toBe(null);
    expect(urlify(true)).toBe(null);
  });

  it("should give replace space with `%20`", () => {
    expect(urlify("hello world")).toBe("hello%20world");
  });

  it("should give return empty string if empty string is passes", () => {
    expect(urlify("")).toBe("");
  });
});
