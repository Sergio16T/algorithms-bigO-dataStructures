// You are given an integer array nums sorted in ascending order, and an integer target.
// Suppose that nums is rotated at some pivot unknown to you
// If target is found in the array return its index, otherwise, return -1.

// 1) Solution 1 - Sequential/Linear Search
// O(n)
var search = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
};
