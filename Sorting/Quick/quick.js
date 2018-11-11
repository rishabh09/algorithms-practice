// pivot as first
const quickSort1 = input => {
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
  return [...quickSort1(left), pivot, ...quickSort1(right)];
};

// pivot as last item
const quickSort2 = input => {
  const arr = [...input];
  const left = [];
  const right = [];
  const arrLength = arr.length;
  if (arrLength <= 1) return arr;

  const pivot = arr[arrLength - 1];
  for (let i = 0; i < arrLength - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort2(left), pivot, ...quickSort2(right)];
};

module.exports = {
  quickSort1,
  quickSort2
};
