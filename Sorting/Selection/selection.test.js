const selectionSort = require("./selection");

describe("selection Sort", () => {
  it("should sort properly", () => {
    const input = [10, 8, 7, 5, 3, 9, 1, 4, 2, 6];
    const result = selectionSort(input);
    const expectedOutput = input.sort((a, b) => a - b);
    expect(result).toEqual(expectedOutput);
  });
});
