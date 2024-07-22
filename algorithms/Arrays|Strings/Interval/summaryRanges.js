/**
 * Given a sorted unique integer array nums.
 * Return the smallest sorted list of ranges that cover all the numbers in the array
 * Each range [a,b] in the list should be output as:
    "a->b" if a != b
    "a" if a == b
  *
  * Time Complexity: O(N) we visit each element at most once.
  * Space complexity O(K) where k is the length of the result set storing ranges
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const start = nums[i];

    while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
      i++;
    }

    if (start != nums[i]) {
      result.push(start + "->" + nums[i]);
    } else {
      result.push(start.toString());
    }
  }
  return result;
};