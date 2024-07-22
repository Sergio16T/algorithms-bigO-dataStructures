/**
 * Find the largest increasing subarray with consecutive increasing numbers.
 * e.g. INPUT [10, 9, 2, 3, 7, 4, 11, 100, 110]
 * OUTPUT would be 4 since the largest sequence of increasing consecutuive numbers is [4, 11, 100, 110]
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // use sliding window and move through the entire array.
  let windowStart = 0,
    windowEnd = 0,
    largestWindow = 0;

  // ONE PASS
  // as I move from left to right check if value is increasing. and keep a counter via largest window.

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (nums[i + 1] > n) {
      windowEnd = i + 1;
      largestWindow = Math.max(largestWindow, (windowEnd - windowStart) + 1);
    } else {
      windowStart = i + 1;
    }
  }
  return largestWindow;

};