/**
 * Determines if one string is an anagram of another string.
 *
 * @example
 * // Returns true
 * isValidAnagram("Mary", "Army");
 * isValidAnagram("Listen", "Silent");
 *
 * @function isValidAnagram
 * @param {string} s - The first string to compare.
 * @param {string} t - The second string to compare.
 * @returns {boolean} - Returns `true` if `t` is an anagram of `s`, `false` otherwise.
 *
 * @description
 * Approach: Sorting
 *
 * - **Time Complexity**: O(n log n)
 *   - Sorting each array costs O(n log n), which dominates the overall time complexity.
 *   - Joining both sorted arrays into strings costs O(n), so the final complexity is O(n log n).
 *
 * - **Space Complexity**: O(n)
 *   - Storing the split arrays requires O(n) space.
 *
 * - **Constants are dropped in the final complexity.**
 */
function isValidAnagram(s,  t) {
  if (s.length != t.length) {
    return false;
  }
  const str1 = s.split('');
  const str2 = t.split('');

  str1.sort();
  str2.sort();

  return str1.join('') === str2.join('');
}

/**
 * @function _isAnagram
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 * @description
 * Approach: Frequency Map
 *
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 *
 */
function _isAnagram(str1, str2) {
  if (str1.length !== str2.length) { return false; }

  const frequencyMap = new Map();

  for (const char of str1) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  for (const char of str2) {
    if (!frequencyMap.has(char) || frequencyMap.get(char) === 0) {
      return false;
    }
    frequencyMap.set(char, frequencyMap.get(char) - 1);
  }

  return true;
}