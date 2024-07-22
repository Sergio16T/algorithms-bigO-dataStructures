//

/**
 * Return indices of the two numbers that add up to the target.
 *
 * One Pass HashMap
 *
 * Time complexity: O(n).
  We traverse the list containing n elements only once. Each lookup in the table costs only O(1) time.

Space complexity: O(n).
The extra space required depends on the number of items stored in the hash table, which stores at most n elements.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    // e.g. target is 5. current value is 8. 5 - 8 = -3
    const match = target - nums[i];
    if (match in hashmap) {
      return new Array(i, hashmap[match])
    }
    hashmap[nums[i]] = i; // since we store the index after the check we can be assured it won't be the same as i
  }
}




/*
Two Pass Hashmap
1)  Iterate and store each value as the key with index as value in Hashmap
2) Second pass iterate and look for the match of current value in loop subtracted from target.
    - If the hashmap contains the match and the index is not equal to current index then return indices.

Complexity Analysis

Time complexity: O(n).
We traverse the list containing n elements exactly twice.
Since the hash table reduces the lookup time to O(1), the overall time complexity is O(n).

Space complexity: O(n).
The extra space required depends on the number of items stored in the hash table, which stores exactly n elements.
*/
const twoSum_WithTwoPass_Hashmap = function(nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    // Iterate and store each value as the key with index as value
    hashmap[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    // target is 5
    // subtract target from current value in iteration to get the matching value
    // 5 - 3 = 2
    // check for the match in the hashmap.
    // if it's in the map then return the indicies.
    const match = target - nums[i];
    if (match in hashmap && hashmap[match] != i) { // make sure it's not same index
      return new Array(i, hashmap[match])
    }
  }
};



// Return indices of the two numbers that add up to the target.
// Nested For Loop
// Outerloop first iteration check for sum of number at index [i] + the number at inner loop beginning at index[i + 1] of current iteration in outerloop. This way we check each item against each other
// O(N^2) quadratic Time Complexity:  For each element, we try to find its complement by looping through the rest of the array which takes O(n)O(n)O(n) time.
// O(1) Space Complexity: The space required does not depend on the size of the input array, so only constant space is used.

const bruteForceSolution = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const outerNumber = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const innerNumber = nums[j];
      if (outerNumber + innerNumber == target) {
        return new Array(i, j)
      }
    }
  }
}