/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/*
INPUT [] POSITIVE INTEGERS, POSITIVE TARGET

RETURN the MIN LENGTH OF SUBARRAY whose SUM is GREATER THAN or EQUAL to TARGET

IF NO RESULT THEN RETURN 0

SAMPLE INPUTS:
target = 7, nums = [2,3,1,2,4,3]
CONSTRAINTS: subarray is contiguous

// use sliding window -- as soon as we hit a sum whose value is GREATER than or EQUAL to the current min replace the sum and min
// and contract the sliding window left position over...

TIME: O(n)
SPACE: O(1)
*/
var minSubArrayLen = function (target, nums) {
  let min = nums.length + 1, // create an out of bounds min to compare against.. If we don't find anything less than return 0
    currentSum = 0, // keep track of sum of current window --
    // when we hit the target or larger then contract the window and subtract the sum from the position removed
    // also compare the length of window and save the min length of window as we find matches for target
    window_start = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    while (currentSum >= target) {
      min = Math.min(min, (i - window_start) + 1);
      currentSum -= nums[window_start];
      window_start++;
    }
  }


  return min === nums.length + 1 ? 0 : min;
};