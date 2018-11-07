const bubbleSort = input => {
  const arr = [...input];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    const stop = arrLength - i;
    for (let j = 0; j < stop; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};

module.exports = bubbleSort;
