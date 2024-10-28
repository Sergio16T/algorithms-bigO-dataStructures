---
sidebar_position: 2
---

# Two Pointer

The two-pointer pattern is an efficient technique for solving problems by using two pointers to optimize the traversal and comparison of data, often achieving linear time complexity.

By adjusting pointer movement, this pattern simplifies complex problems involving pairs, subsequences, or specific conditions.

## 1. Approaching Pointers

Strategy: Approaching Pointers from both ends of sorted array looking for indices of values whose sum is equal to target

```JavaScript
function twoSumSorted(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
          return new Array(left, right);
        }
        if (sum < target) {
          left++;
        } else {
          right--;
        }
    }
    return null; // No pair found
}
```

## 2. Traversing Two Arrays to Compare or Merge elements

Comparing Two Sequences uses two pointers to traverse two sequences (arrays or strings) simultaneously, often to check if elements in one sequence follow the same order in the other.

Common Use Cases:

1. Checking if one string is a subsequence of another.
2. Merging two sequences.
3. Finding the intersection of two sorted arrays.

Example checking if one string is a subsequence of another

```JavaScript
var isSubsequence = function(s, t) {
  /* Two pointers:
    if the first pointer is equal to the length of s then we have found all characters
    in target string and s is a subsequence of t
  */
  let p1 = 0; // p1 is for iterating through source string
  let p2 = 0; // p2 is for iterating through the target string

  // iterate as long as p1 is within the bounds of source string
  // and p2 is within the bounds of target string
  while (p1 < s.length && p2 < t.length)  {
    if (s[p1] === t[p2]) {
      p1++;
    }
    p2++;
  }
  return p1 === s.length;

};
```

Example: Merging strings alternately

```JavaScript
var mergeAlternately = function(word1, word2) {
  // abcd QQQQJJJJ aQbQcQdQ
  let merged = "";
  // pointers;
  let i = 0, // store pointer for word1.
    j = 0; // store pointer for word2

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      merged += word1[i];
      i++;
    }
    if (j < word2.length) {
      merged += word2[j];
      j++;
    }
  }
  return merged;
};
```

## 3. Sliding Window

Sliding window is a substantial sub-pattern. Read more [here](/docs/techniques/sliding-window)

## 4. Partitioning

Use two pointers to partition an array into segments. Used to solve problems that involve partitioning arrays into different regions.

For these questions, each pointer represents where the next element belonging to that region should go.

Example: Given an array A[] consisting of only 0s, 1s, and 2s.
The task is to sort the array, i.e., put all 0s first, then all 1s and all 2s in last.

```JavaScript
function dutchNationalFlag(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    switch (arr[mid]) {
      case 0:
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
        break;
    }
  }
}
```

Example: Two Pointer Quick Sort

```JavaScript
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let left = low;
    let right = high - 1;

    while (left <= right) {
        while (left <= right && arr[left] < pivot) {
            left++;
        }
        while (left <= right && arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    [arr[left], arr[high]] = [arr[high], arr[left]];
    return left;
}
```

Example: Given an array of integers, rearrange the array so that all odd numbers appear before all even numbers.

```JavaScript
function partitionOddEven(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Move the left pointer until we find an even number
    while (left < right && arr[left] % 2 !== 0) {
      left++;
    }
    // Move the right pointer until we find an odd number
    while (left < right && arr[right] % 2 === 0) {
      right--;
    }
    // Swap the even number on the left with the odd number on the right
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
}
```

## 5. Fast and slow pointers

Fast and slow pointers is a substantial sub-pattern. Read more [here](/docs/techniques/fast-and-slow-pointers)

## 6. Three Pointer

The three pointer pattern is an extension of two pointer pattern

## Summary

Choosing the Right Pattern

The choice of two-pointer pattern depends on the problem’s requirements, such as:

- Whether the data is sorted or needs sorting.
- Whether you are looking for pairs, subsequences, or specific properties.
- Whether you need to iterate over one or two sequences.

Each pattern leverages the efficiency of two-pointer movement to optimize the traversal and comparison of data, often resulting in linear time complexity solutions to problems that might otherwise require more complex approaches.
