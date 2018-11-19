const urlify = str => {
  if (typeof str !== "string") return null;
  const newString = str.split(" ").join("%20");
  return newString;
};

module.exports = urlify;
