const mergeSort = input => {
  const arr = [...input];
  const arrLength = arr.length;
  if (arrLength <= 1) return arr;

  const middle = Math.floor(arrLength / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arrLength);
  return mergeArray(mergeSort(left), mergeSort(right));
};

const mergeArray = (left, right) => {
  let result = [];
  let leftLength = left.length;
  let rightLength = right.length;

  while (leftLength && rightLength) {
    if (left[0] <= right[0]) {
      result.push(left[0]);
      left.shift();
      leftLength--;
    } else {
      result.push(right[0]);
      right.shift();
      rightLength--;
    }
  }
  if (leftLength > 0) {
    result = result.concat(left);
  }

  if (rightLength > 0) {
    result = result.concat(right[0]);
  }
  return result;
};

module.exports = mergeSort;
