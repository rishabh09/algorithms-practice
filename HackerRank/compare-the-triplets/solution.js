const solution = (arr1, arr2) => {
  const result = [0, 0];
  arr1.forEach((el, i) => {
    const arr2El = arr2[i];
    if (el > arr2El) result[0]++;
    if (el < arr2El) result[1]++;
  });
  return result;
};

module.exports = solution;
