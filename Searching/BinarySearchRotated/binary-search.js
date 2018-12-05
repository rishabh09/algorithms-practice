const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;

  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[middle] == value) {
      break;
    }
    if (arr[start] < arr[middle]) {
      if (arr[start] <= value && value < arr[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      if (arr[middle] <= value && value < arr[end]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === value ? middle : -1;
};

module.exports = binarySearch;
