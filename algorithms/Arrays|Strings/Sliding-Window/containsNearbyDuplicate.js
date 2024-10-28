/**
Given an integer array nums and an integer k,
return true if there are two distinct indices i and j in the array
such that nums[i] == nums[j] and abs(i - j) <= k.
a.k.a. Return true if there are duplicate values within k range otherwise return false
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Look for two duplcates within a range of indices of the array
  The range suggests sliding window
*/
var containsNearbyDuplicate = function(nums, k) {
  const set = new Set();
  // set size cannot be greater than k
  for (let i = 0; i < nums.length; i++) {
    // check for duplicate
    const current = nums[i];
    if (set.has(current)) {
      return true;
    }
    set.add(current);
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
}