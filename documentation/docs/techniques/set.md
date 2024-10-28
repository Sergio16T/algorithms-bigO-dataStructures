---
sidebar_position: 4
---

# Set

Set's are map like data structures that enable O(1) lookup within the collection. They are used to store a collection of unique values.

Often times in a algorithmic problems we may be asked to solve a problem where characters within a range do not contain duplicates

Longest Substring **without repeating** characters

```JavaScript
var lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let left = 0,
    right= 0,
    maxWindow = 0;

  while (right < s.length) {
    // "abcabcbb"
    const char = s[right]; // right pointer iterates
    if (set.has(char)) {
      set.delete(s[left]);
      left++;
    } else {
      set.add(char);
      right++;
      maxWindow = Math.max(set.size, maxWindow);
    }
  }
  return maxWindow;
}
```

Another usecase is searching for a sequence that may meet some criteria e.g. **Longest consecutive sequence** within an unsorted array

Since the criteria involves building a **set of consecutive values** that are incrementing by 1 a **Set** is well suited for this

Longest **consecutive sequence** within source array sequence need not be contiguous or in original order

```JavaScript
/**
 * Consecutive Sequence Problem
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
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
```

We may be asked to determine if there is a duplicate value

With this type of problem we can use a Map like data structure for O(1) lookup.
The followng example uses a set to store contiguous elements checking if the set already contain's the element

Contains nearby duplicate within k range

```JavaScript
var containsNearbyDuplicate = function(nums, k) {
  const set = new Set();
  // set size cannot be greater than k
  for (let i = 0; i < nums.length; i++) {
    // check for duplicate
    const current = nums[i];
    if (set.has(current)) {
      return true;
    }
    set.add(current);
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
}
```
