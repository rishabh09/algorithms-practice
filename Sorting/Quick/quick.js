const quickSort = input => {
  const arr = [...input];
  const left = [];
  const right = [];
  const pivot = arr[0];
  const arrLength = arr.length;
  if (arrLength <= 1) return arr;

  for (let i = 1; i < arrLength; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

module.exports = quickSort;
