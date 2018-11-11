const selectionSort = input => {
  const arr = [...input];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let minimum = i;
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[j] < arr[minimum]) minimum = j;
    }
    if (i !== minimum) [arr[i], arr[minimum]] = [arr[minimum], arr[i]];
  }
  return arr;
};

module.exports = selectionSort;
