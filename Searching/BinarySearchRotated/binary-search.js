const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;

  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[middle] == value) {
      break;
    }
    if (arr[start] < arr[middle]) {
// check if first part of array is sorted
      if (arr[start] <= value && value < arr[middle]) {
// item is in the first part
// change end to end of first part
        end = middle - 1;
      } else {
// item is not in the first part, change start to start of second part
        start = middle + 1;
      }
    } else {
// second part of array is sorted
      if (arr[middle] <= value && value < arr[end]) {
// item is in the second part of array
// change start to start of second part
        start = middle + 1;
      } else {
// item is not in second part, change end to end of first part
        end = middle - 1;
      }
    }
// recalculate middle with new start and end
    middle = Math.floor((start + end) / 2);
  }
// check if item is found, otherwise return -1
  return arr[middle] === value ? middle : -1;
};

module.exports = binarySearch;
