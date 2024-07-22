/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/*
Approach 1: Sliding Window

Time complexity: O(hn).

For every window_start, we may have to iterate at most lengthOfWindow times. There are h - lengthOfWindow +1 such window_start's.
Thus, it is O((h-lengthOfWindow+1) ⋅ m), which is O(h * lengthOfWindow) e.g. O (hn)

space complexity: O(1)

There are a handful of variables in the code (m, n, i, window_start), and all of them use constant space, hence, the space complexity is constant.
*/
var strStr = function(haystack, needle) {
  const lengthOfWindow = needle.length; // n
  const h = haystack.length;

  for (let windowStart = 0; windowStart <= h - lengthOfWindow; windowStart++) {
    // at each window iterate through the length of needle to see if there is a match;
    for (let i = 0; i < lengthOfWindow; i++) {
      // compare each char in the window of haystack against the needle
      if (haystack[windowStart + i] != needle[i]) {
        // break the loop if not equal and window will move
        break;
      }
      if (i === lengthOfWindow - 1) {
        return windowStart;
      }
    }
  }
  return -1;
};