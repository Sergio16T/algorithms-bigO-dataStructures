/**
 * Problem: Find the length of the longest substring with at most k distinct characters.
 * k or fewer distinct characters in substring.
 *
 * Time Complexity O(n) where n is length of string
 *
 * Space Complexity O(k) where K is the number of elements stored in map
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  /* build a hashmap to keep track unique characters and counts
    contract window once k distinct characters has been exceeded
    keep track of length as max
  */
  let max = 0;
  const map = new Map();

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    // update map
    const ch = s[right];
    map.set(ch, map.get(ch) ? map.get(ch) + 1 : 1);

    // check for out of bounds distinct characters
    while (map.size > k) {
      // contract the window
      // update key count for char at s[left]
      map.set(s[left], map.get(s[left]) - 1);
      // then this would only update count it wouldn't remove the key
      if (map.get(s[left]) === 0) {
        map.delete(s[left]);
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;

};