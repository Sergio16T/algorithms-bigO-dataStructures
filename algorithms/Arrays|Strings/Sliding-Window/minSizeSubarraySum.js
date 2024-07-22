/**
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a
  subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

  * TIME: O(n)
  *
  * SPACE: O(1)
  *
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

/*
SAMPLE INPUTS:
target = 7, nums = [2,3,1,2,4,3]
CONSTRAINTS: subarray is contiguous

use sliding window -- as soon as we hit a sum whose value is GREATER than or EQUAL to the current min replace the sum and min
and contract the sliding window left position over.

*/
var minSubArrayLen = function (target, nums) {
  let min = nums.length + 1, // create an out of bounds min to compare against.. If we don't find anything less than return 0
    window_sum = 0, // keep track of sum of current window --
    // when we hit the target or larger then contract the window and subtract the sum from the position removed
    // also compare the length of window and save the min length of window as we find matches for target
    window_start = 0;

  for (let window_end = 0; window_end < nums.length; window_end++) {
    window_sum += nums[window_end];
    while (window_sum >= target) {
      min = Math.min(min, (window_end - window_start) + 1);
      window_sum -= nums[window_start];
      window_start++;
    }
  }


  return min === nums.length + 1 ? 0 : min;
};

function _minSubarrayLen(target, arr) {
  let minLen = Infinity;
  let start = 0;
  let windowSum = 0;

  for (let end = 0; end < arr.length; end++) {
    windowSum += arr[end];

    while (windowSum >= target) {
      minLen = Math.min(minLen, end - start + 1);
      windowSum -= arr[start];
      start++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
