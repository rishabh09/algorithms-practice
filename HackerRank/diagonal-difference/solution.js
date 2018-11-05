const solution = arr => {
  const arrLength = arr.length;
  const diagonalsSum = arr.reduce(
    (acc, el, i) => {
      acc[0] += el[i];
      acc[1] += el[arrLength - i - 1];

      return acc;
    },
    [0, 0]
  );
  return Math.abs(diagonalsSum[0] - diagonalsSum[1]);
};

module.exports = solution;
