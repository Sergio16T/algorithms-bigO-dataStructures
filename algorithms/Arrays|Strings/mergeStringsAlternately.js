/* You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
 If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
/*
2 POINTER Solution
TIME: O(n+m) n is length of word1 and m is length of word2
SPACE: O(1) CONSTANT storing a few pointer variables and the result.
*/
var mergeAlternately = function(word1, word2) {
  // abcd QQQQJJJJ aQbQcQdQ
  let merged = "";
  // pointers;
  let i = 0, // store pointer for word1.
    j = 0; // store pointer for word2

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      merged += word1[i];
      i++;
    }
    if (j < word2.length) {
      merged += word2[j];
      j++;
    }
  }
  return merged;


};

/*
1 POINTER SOLUTION
TIME O(N + M)
SPACE O(1)
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var _mergeAlternately = function(word1, word2) {
  // abcd QQQQJJJJ aQbQcQdQ
  let merged = "";

  for (let i = 0; i < Math.max(word1.length, word2.length); i ++) {
    if (i < word1.length) {
      merged += word1[i];
    }
    if (i < word2.length) {
      merged += word2[i];
    }
  }
  return merged;

};
