const selectionSort = input => {
  // make new array, so old array will not get mutated
  const arr = [...input];
  const arrLength = arr.length;
  // iterate through every element of array
  for (let i = 0; i < arrLength; i++) {
    let minimum = i;
    // set minimum to i
    for (let j = i + 1; j < arrLength; j++) {
      // update minimum if element is less
      if (arr[j] < arr[minimum]) minimum = j;
    }
    // swap element with minimum index if value is not same
    if (i !== minimum) [arr[i], arr[minimum]] = [arr[minimum], arr[i]];
  }
  return arr;
};

module.exports = selectionSort;
