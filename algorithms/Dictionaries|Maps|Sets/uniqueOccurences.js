/**
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 * @param {number[]} arr
 * @return {boolean}
 */

/*
HashMap & HashSet

Time complexity: O(N):
We iterate over the array arr to find the frequency and store them in the hash map freq.
Then, we insert these frequencies in the hash set freqSet, which has the insertion complexity of O(1).
Hence, the total time complexity is equal to O(N)O(N)O(N).

Space Complexity O(N):
We are storing the N frequencies in the hash map freq that takes O(1) space for each element.
We also store the frequency count in the hash set. Therefore, the total space complexity is equal to O(N)
*/

var _uniqueOccurrences = function(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const int = arr[i];
    if (map.has(int)) {
      map.set(int, map.get(int) + 1);
    } else {
      map.set(int, 1);
    }
  }
  return new Set(map.values()).size === map.size;

};

var uniqueOccurrences = function(arr) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const int = arr[i];
    if (int in map) {
      map[int] += 1;
    } else {
      map[int] = 1;
    }
  }
  const occurences = Object.values(map);
  return new Set(occurences).size === occurences.length;

};