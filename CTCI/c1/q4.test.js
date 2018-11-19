const checkPalindromePermutations = require("./q4");

describe("check Palindrome Permutations", () => {
  it("should return false if string is invalid", () => {
    expect(checkPalindromePermutations(null)).toBe(false);
    expect(checkPalindromePermutations([])).toBe(false);
    expect(checkPalindromePermutations({})).toBe(false);
  });
  it("should return true if string have palindrome permutation", () => {
    expect(checkPalindromePermutations("Tact coa")).toBe(true);
  });
});
