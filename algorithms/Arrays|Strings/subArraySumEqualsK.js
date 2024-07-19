/**
 * Given an array of integers nums and an integer k,
 * return the total number of subarrays whose sum equals to k.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
TIME COMPLEXITY : O(N^2)
SPACE COMPLEXITY: O(1)
*/
var subarraySum = function(nums, k) {
  /*
    CONSTRAINTS:
        sub array can be 1:many length
        must be contiguious
    */

  // [1,1,1]

  let count = 0;
  for (let start = 0; start < nums.length; start++) {
    let sum= 0;
    for (let end = start; end < nums.length; end++) {
      sum += nums[end];
      if (sum == k) {
        count++;
      }
    }
  }
  return count;


};

/*

I don't believe the following solution would be intuitive to identify in an interview but it is interesting O(n) time and O(n) space solution hashmap contains up to n distinct entries

Look for patterns with the data

INPUT [-2, 1, 2, -2, 5, -2, 1]
CREATE ARRAY WITH SUM at index
prefix sum array = [-2, -1, 1, -1, 4, 2, 3]

NOW COMPARE
INPUT:     [-2, 1, 2, -2, 5, -2, 1]
prefixSUM: [-2, -1, 1, -1, 4, 2, 3]

Notice how the sum of numbers from index 0-2 corresponds to the value at the prefixSum array at index 2/ at index at end of range.

** However if we want to get the total from the a sub array within the input that does not start at 0 the prefixSum array must subtract
the totals from the numbers not included in the range

e.g. subtract the sum at the start of range.
SUM of nums index 2 - 6 is equal to prefixSum[6] -  prefixSum[2 - 1] (3 - -1) = 4

sum(nums[i] - nums[j]) = prefixSum[j] - prefixSum[i - 1]
k = prefixSum[j] - prefixSum[i - 1]
prefixSum[i - 1] = = prefixSum[j] - k
*/

var _subarraySum = function(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let count = 0;
  for (const num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k)
    }
    const v = map.has(sum) ? map.get(sum) : 0;
    map.set(sum, v + 1);
  }
  return count;
};