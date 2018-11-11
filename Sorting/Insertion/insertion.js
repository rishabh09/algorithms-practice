const insertionSort = input => {
  const arr = [...input];
  const arrLength = arr.length;

  for (let i = 1; i < arrLength; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
};

module.exports = insertionSort;
