---
sidebar_position: 1
---

# Sliding Window

In many problems dealing with an array (or a LinkedList),
we are asked to find or calculate something among all the contiguous subarrays (or sublists)
of a given size.

## 1. Fixed-Size Window

Window is fixed size and we contract by removing first element from window as we add the current element in iteration

Problem: Find the maximum sum of any contiguous subarray of size k.

Strategy: One common pattern is to iterate through the array while doing calculations within a fixed window/range

```JavaScript
const maximumSumSubArray = (arr, k) =>  {
  //length of array must be greater than k
  if (arr.length < k) {
    console.log("Invalid")
    return -1;
  }

  // Compute sum of first window of size k
  let max_sum = 0;
  for (let i = 0; i < k; i++) {
    max_sum += arr[i];
  }
  // Compute sums of remaining windows by removing first element of previous window and adding last element of current window.
  let window_sum = max_sum;
  for (let j = k; j < arr.length; j++) {
    // arr[j] last element of current window
    // arr[j - k] first element of previous window
    window_sum += arr[j] - arr[j - k];
    max_sum = Math.max(max_sum, window_sum);
  }

  return max_sum;
}
```

When a problem has a condition that indices are within a range this suggests a sliding window strategy

```JavaScript
/**
Given an integer array nums and an integer k,
return true if there are two distinct indices i and j in the array
such that nums[i] == nums[j] and abs(i - j) <= k.
a.k.a. Return true if there are duplicate values within k range otherwise return false
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Look for two duplcates within a range of indices of the array
  The range suggests sliding window
*/
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

Another strategy is to iterate through the elements one by one, iterating at most k times for each index where k is the size of window

```JavaScript
var strStr = function(haystack, needle) {
  const lengthOfWindow = needle.length; // n
  const h = haystack.length;

  for (let windowStart = 0; windowStart <= h - lengthOfWindow; windowStart++) {
    // at each window iterate through the length of needle to see if there is a match;
    for (let i = 0; i < lengthOfWindow; i++) {
      // compare each char in the window of haystack against the needle
      if (haystack[windowStart + i] != needle[i]) {
        // break the loop if not equal and window will move
        break;
      }
      if (i === lengthOfWindow - 1) {
        return windowStart;
      }
    }
  }
  return -1;
};
```

## 2. Variable-Size Window

Size of window contracts as needed as we iterate through the elements

Often times with variable size windows we are looking for a min or max window that meets certain criteria
within a subset of elements

Example: Length of longest substring without repeating characters

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

Example: Length of longest increasing contiguous array

```JavaScript
// length of longest increasing subarray
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
```

## 3. Sliding Window with Hash Map

```JavaScript
var lengthOfLongestSubstringKDistinct = function(s, k) {
  /* build a hashmap to keep track unique characters and counts
    contract window once k distinct characters has been exceeded
    keep track of length as max
  */
  let max = 0;
  const map = new Map();

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    // update map
    const ch = s[right];
    map.set(ch, map.get(ch) ? map.get(ch) + 1 : 1);

    // check for out of bounds distinct characters
    while (map.size > k) {
      // contract the window
      // update key count for char at s[left]
      map.set(s[left], map.get(s[left]) - 1);
      // remove key if count is 0
      if (map.get(s[left]) === 0) {
        map.delete(s[left]);
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }

  return max;
};
```

<!-- ## 4. Circular Sliding Window

// @TODO -->

## Summary

In many problems dealing with an array (or a LinkedList),
we are asked to find or calculate something among all the contiguous subarrays (or sublists)
of a given size. For example, take a look at this problem:

A brute force solution would require revisiting previously visited elements e.g. in a nested loop.

With sliding window we can improve run time to O(n) by avoiding revisiting elements and instead moving the window over and updating as needed.

```java
import java.util.Arrays;

class AverageOfSubarrayOfSizeK {
    public static double[] bruteForce(int K, int[] arr) {
        double[] result = new double[arr.length - K + 1];
        for (int i = 0; i <= arr.length - K; i++) {
          // find sum of next 'K' elements
          double sum = 0;
          for (int j = i; j < i + K; j++)
              sum += arr[j];
          result[i] = sum / K; // calculate average
        }

        return result;
    }


    public static double[] findAverages(int K, int[] arr) {
        double[] result = new double[arr.length - K + 1];
        double windowSum = 0;
        int windowStart = 0;
        for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
          windowSum += arr[windowEnd]; // add the next element
          // slide the window, we don't need to slide if we've not hit the required window size of 'k'
          if (windowEnd >= K - 1) {
              result[windowStart] = windowSum / K; // calculate the average
              windowSum -= arr[windowStart]; // subtract the element going out
              windowStart++; // slide the window ahead
          }
        }

        return result;
    }

  public static void main(String[] args) {
    double[] bfResult = AverageOfSubarrayOfSizeK.bruteForce(5, new int[] { 1, 3, 2, 6, -1, 4, 1, 8, 2 });
    System.out.println("Averages of subarrays of size K: " + Arrays.toString(bfResult));

    double[] result = AverageOfSubarrayOfSizeK.findAverages(5, new int[] { 1, 3, 2, 6, -1, 4, 1, 8, 2 });
    System.out.println("Averages of subarrays of size K: " + Arrays.toString(result));
  }
}

```