const checkPermutation = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string") return false;
  const str1Length = str1.length;
  const str2Length = str2.length;
  if (str1Length === 0 || str2Length === 0 || str1Length !== str2Length) return false;

  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();

  let isPermutation = true;

  for (let i = 0; i < str1Length; i++) {
    // check if char at arr1 is same as char at arr2 in same position
    if (arr1[i] !== arr2[i]) isPermutation = false;
  }

  return isPermutation;
};

module.exports = checkPermutation;
