const checkLookup = obj => {
  let isPalindrome = false;
  for (char in obj) {
    if (obj[char] % 2 === 0) isPalindrome = true;
    else {
      if (!isPalindrome) {
        isPalindrome = false;
        break;
      }
    }
  }
  return isPalindrome;
};

const checkPalindromePermutations = str => {
  if (typeof str !== "string") return false;

  const lookup = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  return checkLookup(lookup);
};

module.exports = checkPalindromePermutations;
