
// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
/*
TIME COMPLEXITY: O(N^2)
SPACE: O(1)
*/
// contiguous non-empty sequence of elements within an array.
// [-1, 0, -2]
var maxSubArray = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let maxSum = Number.MIN_SAFE_INTEGER;
  // calculate the sum of each sub array beginning with each element
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }

  }
  return maxSum;
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])


// DP Solution
/*
TIME COMPLEXITY: O(N), where N is the length of nums.

We iterate through every element of nums exactly once.

SPACE COMPLEXITY: O(1)
No matter how long the input is, we are only ever using 2 variables: currentSubarray and maxSubarray.
*/
function _maxSubArray(nums) {
  // Initialize our variables using the first element.
  let currentSubarray = nums[0];
  let maxSubarray = nums[0];

  // Start with the 2nd element since we already used the first one.
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    // If current_subarray is negative, throw it away. Otherwise, keep adding to it.
    currentSubarray = Math.max(num, currentSubarray + num);
    maxSubarray = Math.max(maxSubarray, currentSubarray);
  }

  return maxSubarray;
}