/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  // find largest common substring of contiguious elements common in both arrays...
  // fair to say substring is a common prefix since str1 would equal x + x + x.

  // brute force could be comparing prefix of both str1 and str2 and looking for largest common prefix..
  // longest common prefix is potentially the smaller of the two strings..
  const len1 = str1.length;
  const len2 = str2.length;
  // iterate from the smallest of the two array lengths back to 0 checking if valid substrings of both
  for (let i = Math.min(len1, len2); i > 0; i--) {
    const valid = isValid(str1, str2, i);
    if (valid) {
      return str1.substring(0, i);
    }
  }
  return "";

};

function isValid(str1, str2, k) {
  const len1 = str1.length, len2 = str2.length;
  if (len1 % k > 0 || len2 % k > 0) {
    return false;
  } else {
    const base = str1.substring(0, k);
    const regex = new RegExp(base, 'g');
    return str1.replace(regex, "") === "" && str2.replace(regex, "") === "";
  }
}