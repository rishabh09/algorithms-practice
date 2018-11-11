const { quickSort1, quickSort2 } = require("./quick");

describe("quick Sort: pivot as first element", () => {
  it("should sort properly", () => {
    const input = [10, 8, 7, 5, 3, 9, 1, 4, 2, 6];
    const result = quickSort1(input);
    const expectedOutput = input.sort((a, b) => a - b);
    expect(result).toEqual(expectedOutput);
  });
});

describe("quick Sort: pivot as last element", () => {
  it("should sort properly", () => {
    const input = [10, 8, 7, 5, 3, 9, 1, 4, 2, 6];
    const result = quickSort2(input);
    const expectedOutput = input.sort((a, b) => a - b);
    expect(result).toEqual(expectedOutput);
  });
});
