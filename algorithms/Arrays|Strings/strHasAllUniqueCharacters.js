/* implement an algorithm to determine if a string has all unique characters */
/*
TIME COMPLEXITY: O(N)
SPACE COMPLEXITY: Can be as large as n elements length of arr O(n); One key value pair for each element in the str
*/
var _uniqueOccurrences = function(str) {
  const map = new Map();

  for (let i = 0; i < str.length; i ++) {
    const num = str[i];
    if (map.has(num)) { // already found this char in string
      return false;
    }
    map.set(num, 1);
  }
  return true;
}