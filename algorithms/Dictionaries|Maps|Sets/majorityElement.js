/**
 * Given an array nums of size n, return the majority element.
   The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 * @param {number[]} nums
 * @return {number}
*/

/*
TIME COMPLEXITY: O(n)
SPACE: O(n)
*/
var majorityElement = function(nums) {
  const countMap = new Map(); // keep track of element as key and value as count
  let majorityElement = nums[0]; // store the current majority element.

  countMap.set(majorityElement, 1);

  for (let i = 1; i < nums.length; i++) {
    const val = nums[i];
    if (countMap.has(val)) {
      countMap.set(val, countMap.get(val) + 1)
    } else {
      countMap.set(val, 1)
    }
    majorityElement = countMap.get(val) > countMap.get(majorityElement) ? val : majorityElement;
  }
  return majorityElement;

};