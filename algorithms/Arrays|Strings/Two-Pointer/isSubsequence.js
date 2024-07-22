/*
 determine if s is a subsequence of t

 a subsequence need not be contiguous

"abc"
"ahbgdc"
1 2 3


TIME: O(n) where n is number of elements in target string
 SPACE: O(1)
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  // two pointers
  // if the first pointer is equal to the length of s then we have
  // found all characters in target string and s is a subsequence of t
  let p1 = 0; // p1 is for iterating through source string
  let p2 = 0;  // p2 is for iterating through the target string

  // iterate as long as p1 is within the bounds of source string
  // and p2 is within the bounds of target string
  while (p1 < s.length && p2 < t.length)  {
    if (s[p1] === t[p2]) {
      p1++;
    }
    p2++;
  }
  return p1 === s.length;

};