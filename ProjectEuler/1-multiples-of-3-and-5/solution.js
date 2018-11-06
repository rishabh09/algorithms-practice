const solution = num => {
  const multiples = [];
  for (i = 1; i < num; i++) {
    if (i % 3 === 0) multiples.push(i);
    else if (i % 5 === 0) multiples.push(i);
  }
  return multiples.reduce((acc, el) => acc + el, 0);
};

module.exports = solution;
