const isUnique = str => {
  if (typeof str !== "string") return false;
  if (str.length === 0) return false;

  // make array of string and sort it
  const strArr = str.split("").sort();
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i] === strArr[i - 1]) return false;
  }
  return true;
};

module.exports = isUnique;
