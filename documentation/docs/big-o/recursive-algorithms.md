---
sidebar_position: 1
---

# Recursive Algorithms

Understanding Recursive Algorithm Run Time & Space Complexity

## Time Complexity

In recursive algorithms determing the time complexity is defined as follows:

$$
  % Time Complexity=(Depth of Recursion)×(Work Done per Call)
  \text{Time Complexity = (Depth of Recursion/Call Stack) × (Work Done per Call)}
$$

### Time Complexity Examples

If the depth of stack is in the worst case $O(n)$ and in each execution we also do $O(n)$ work then it would $O(n^2)$
$$
O(n) * O(n) = O(n^2)
$$

If the depth of stack is ${O}(\log{}n)$ but we do $O(n)$ work in each execution then the time complexity is ${O}(n\log{}n)$
$$
{O}(\log{}n) * O(n) = {O}(n\log{}n)
$$

## Space Complexity

In recursive algorithms determing the space complexity is defined as follows:

$$
  % Space Complexity=(Depth of Recursion)×(Space Required per Call)
  \text{Space Complexity = (Depth of Recursion) × (Space Required per Call)}
$$

### Space Complexity Examples

If we have an algorithm with a depth of call stack of ${O}(\log{}n)$ but in each stack we have $O(1)$ space, it would be ${O}(\log{}n)$
$$
{O}(\log{}n) * O(1)= {O}(\log{}n)
$$

Whereas if depth is ${O}(\log{}n)$ but in each call we allocate $O(n)$ space it would be ${O}(n\log{}n)$ space
$$
{O}(\log{}n) * O(n) = {O}(n\log{}n)
$$

<!-- ## Time Complexity Analysis Examples -->

<!-- **Linear Recursion:**

(O(n) Depth, O(1) Work per Call):

Example: Simple Fibonacci calculation without memoization.
Here, the depth is O(n), and each call does O(1) work.
Time Complexity: O(n).
Quadratic Recursion (O(n) Depth, O(n) Work per Call):

Example: Finding all substrings of a string (without using dynamic programming).
Depth is O(n), but each level involves O(n) work (e.g., generating or processing a substring).
Time Complexity: O(n^2).
Logarithmic Depth, Linear Work (O(log n) Depth, O(n) Work per Call):

Example: Merge Sort.
The depth of recursion is O(log n) (due to dividing the array in half each time), and the merging step does O(n) work.
Time Complexity: O(n log n).

## Space Complexity Analysis Examples

Examples:
Logarithmic Depth, Constant Space per Call (O(log n) Depth, O(1) Space per Call):

Example: Binary search.
Here, the depth of the recursion is O(log n), and each call only requires O(1) additional space.
Space Complexity: O(log n).
Logarithmic Depth, Linear Space per Call (O(log n) Depth, O(n) Space per Call):

Example: In a modified version of merge sort, where you allocate a new array at each level of recursion rather than reusing the array.
The depth is O(log n), and each call allocates O(n) space.
Space Complexity: O(n log n).
Linear Depth, Constant Space per Call (O(n) Depth, O(1) Space per Call):

Example: A recursive function that processes an array or a linked list element by element without additional data structures.
The depth is O(n), and each call uses O(1) space.
Space Complexity: O(n). -->
