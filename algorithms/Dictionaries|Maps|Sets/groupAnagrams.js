/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*

 O(N K log ⁡K)

 where N is the length of strs, and K is the maximum length of a string in strs.
 The outer loop has complexity O(N) as we iterate through each string.
 Then, we sort each string in O(K log⁡ K)

 Space Complexity

 O(NK), the total information content stored in ans.

 It's O(NK) because every word inside the input array, are arrays of characters. At the end of the algorithm, we return Lists of size N, where each element of those lists are arrays of characters - hence O(NK).
we have N number of strings with K Number of Chars
*/

var groupAnagrams = function(strs) {
  // maintain a Map and store the strs as keys.
  // sort the characters in strs and check if in dictionary.
  // if so push unsorted str to the map that corresponds with sorted key
  // if not add the key and add the str unsorted with corresponding key.
  const map = {};

  // One pass
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (key in map) {
      map[key].push(str);
    } else {
      map[key] = new Array(str);
    }
  }

  return Object.values(map);

};

var _groupAnagrams = function(strs) {
  const map = new Map();

  // One pass
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (map.has(key)) {
      map.set(key, [...map.get(key), str])
    } else {
      map.set(key, new Array(str));
    }
  }

  return [...map.values()];
};

