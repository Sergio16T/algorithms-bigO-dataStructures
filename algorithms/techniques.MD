# Algorithm Techniques

This document has a high level overview of several techniques and some definitions of terms used to solve algorithms

## Sliding Window

Two types of subproblems

1. fixed size sliding window
2. variable size sliding window

```JavaScript

/**
 * Find the largest increasing subarray with consecutive increasing numbers.
 * e.g. INPUT [10, 9, 2, 3, 7, 4, 11, 100, 110]
 * OUTPUT would be 4 since the largest sequence of increasing consecutuive numbers is [4, 11, 100, 110]
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // use sliding window and move through the entire array.
    let windowStart = 0,
        windowEnd = 0,
        largestWindow = 0;

    // ONE PASS
    // as I move from left to right check if value is increasing. and keep a counter via largest window.

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
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

## Backtracking

backtracking is a general algorithm for finding all (or some) solutions to some computational problems. The idea is that it incrementally builds candidates to the solutions, and abandons a candidate ("backtrack") as soon as it determines that this candidate cannot lead to a final solution.

DFS Algorithm's are a great example for solutions that use Backtracking

## Dynamic Programing

## Tabulaton

Tabulation is a bottom-up approach where we store the results of the subproblems in a table and use these results to solve larger subproblems until we solve the entire problem.
It is used when we can define the problem as a sequence of subproblems and the subproblems do not overlap. Tabulation is typically implemented using iteration and is well-suited for problems that have a large set of inputs.

## Memoization

Memoization is a top-down approach where we cache the results of function calls and return the cached result if the function is called again with the same inputs. It is used when we can divide the problem into subproblems and the subproblems have overlapping subproblems. Memoization is typically implemented using recursion and is well-suited for problems that have a relatively small set of inputs.

## Divide and Conquer

Divide and conquer can be applied to various problems. Each algorithm effectively reduces the problem size at each step and then combines the results to obtain the final solution. E.g. Merge Sort

## DFS (Depth-First Search)

tree traversal, which is often implemented with recursion.

## 2 pointer problems

Use 2 pointers to iterate through input data. Storing values as needed

Two pointer approach is an essential part of a programmer’s toolkit, especially in technical interviews. The name does justice in this case, it involves using two pointers to save time and space. (Here, pointers are basically array indexes).

The idea here is to iterate two different parts of the array simultaneously to get the answer faster.

## Two Pointer Sub patterns

### Approaching Pointers

Two Pointers Moving Toward Each Other

## Fast & Slow Pointers

This technique uses two pointers that traverse the data at different intervals.

## Terms for various types of common subsequences

### Subsequence vs Substring

More specifically, Subsequence is a generalization of substring. A subarray or substring will always be contiguous, but a subsequence need not be contiguous. That is, subsequences are not required to occupy consecutive positions within the original sequences

### Subarray

A subarray is a contiguous non-empty sequence of elements within an array.
