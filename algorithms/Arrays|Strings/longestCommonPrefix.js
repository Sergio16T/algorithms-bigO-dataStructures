// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Time complexity
// Quadratic  O(n^2)

var longestCommonPrefix = function(strs) {
  if (!strs.length) { return ""; }

  for (let i = 0; i <= strs[0].length - 1; i++) {
    for (const str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }
  return strs[0];
};


var longestCommonPrefix2 = function(strs) {
  // Note: the longest common prefix will never be longer than the first string
  const strsToCheck = strs.slice(1); // Optimize RunTime by only checking strs beginning at index 1 against first string
  // 1) Loop through strs[0].length
  for (let i = 0; i < strs[0].length; i++) {
    // 2) Nested loop to iterate through the strs
    for (const str of strsToCheck) {
      // 3) Check at each of index of str if every single str has the same character at same index as first string
      if (str[i] !== strs[0][i]) {
        // 4) If at any point it's not equal return the str sliced at the end index exclusive
        return str.slice(0, i);
      }
    }
  }
  return strs[0];
};