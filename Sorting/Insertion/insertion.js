const insertionSort = input => {
  const arr = [...input];
  const arrLength = arr.length;

  for (let i = 1; i < arrLength; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const removedEl = arr.splice(i, 1)[0];
        arr.splice(j, 0, removedEl);
      }
    }
  }
  return arr;
};

module.exports = insertionSort;
