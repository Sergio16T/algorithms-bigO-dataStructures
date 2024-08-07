/**
 *  Determine if all characters in S can be replaced to get t
 *
 * Constraints
    1. Order of characters must be maintained
    2. No 2 characters may map to the same characters
    3. A character may map to itself
  *
  * TIME COMPLEXITY: O(N) where n is length of s
  *
  * SPACE IS O(s + t) however since we know that the alphabet is limited to 26 characters the max would be 26 + 26 so constant O(1)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/
var isIsomorphic = function(s, t) {
  // check if str length is equal
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map(); // store mappings of characters  --  create a map with all 26 letters of alphabet perhaps not necessary since we can just build it as we go
  const mappedChars = new Map(); // keep track of chars that have been used in map
  // if the character is aready mapped use that same value..
  let str = '';
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) {
      str += map.get(char);
    } else {
      // check if character at t[i] is already in the map
      if (mappedChars.has(t[i])) {
        return false;
      }
      map.set(char, t[i]);
      mappedChars.set(t[i], char);
      str += t[i];
    }
  }
  return str === t;

};