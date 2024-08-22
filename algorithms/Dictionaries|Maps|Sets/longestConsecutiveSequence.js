/**
Consecutive Sequence Problem
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
* the sequence need not maintain the original order within nums
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // [100,4,200,1,3,2] -- 4 [1, 2, 3, 4]
  const set = new Set(nums); // to enable faster lookup O(1)
  let longestConsecutiveStreak = 0;
  for (const num of set) {
    // To ensure this number isn't already part of an existing increasing sequence check previous
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (set.has(currentNum + 1)) {
        currentNum +=1;
        currentStreak += 1;
      }
      longestConsecutiveStreak = Math.max(longestConsecutiveStreak, currentStreak);
    }
  }
  return longestConsecutiveStreak;
};


var bruteForce = function (nums) {
  let longestStreak = 0;
  for (const num of nums) {
    let currentNum = num;
    let currentStreak = 1;
    while (nums.includes(currentNum + 1)) {
      currentNum += 1;
      currentStreak += 1;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }
  return longestStreak;
};