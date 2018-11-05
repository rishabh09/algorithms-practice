/*

Complete the function solveMeFirst to compute the sum of two integers.

Function prototype:

int solveMeFirst(int a, int b);

where,

a is the first integer input.
b is the second integer input
Return values

sum of the above two integers
Sample Input

a = 2
b = 3
Sample Output

5

*/
const solution = require("./solution");

describe("solve-me-first", () => {
  it("should return 5", () => {
    expect(solution(2, 3)).toBe(5);
  });

  it("should return 1100", () => {
    expect(solution(1000, 100)).toBe(1100);
  });
});
