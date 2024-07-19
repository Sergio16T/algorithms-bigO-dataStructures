// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

// consider edgeCase " " return 0
// "Hello World" returns 5

var lengthOfLastWord = function(s) {
  if (!s.length) { return 0; }

  let str = s.split(" ");
  str = str.filter(str => str !== "");

  if (!str.length) { return 0; }

  return str[str.length - 1].length;
};