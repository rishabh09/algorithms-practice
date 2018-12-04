const bubbleSort = input => {
  // make new array, so old array will not get mutated
  const arr = [...input];
  const arrLength = arr.length;
  // iterate through every element of array
  for (let i = 0; i < arrLength; i++) {
    // decrease the length, because the last element will be in correct postion after each iteration
    const stop = arrLength - i;
    for (let j = 0; j < stop; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};

module.exports = bubbleSort;
