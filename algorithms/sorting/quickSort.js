/*
Time Complexity:  Best/Average Case: O(n log n) --- worstcase: O(n^2)

In Best and Average cases the depth of recursion tree will be balanced.
Therefor depth of Log N.

At each level we iterate length of array O(n)

So in these cases runtime is O(n log n)

In worst case the partition always chooses smaller or larger element leading to a very unbalanced partition. With all elements being in left or right partition.

This will lead to a depth of O(n) and at each level we do O(n) work to partition the elements leading to O(n^2)

Space Complexity: O(n)
We store elements in left right and equal pivots in this example leading to O(n) space..

We also have a best/average call stack depth of O(log n). Worst case O(n)

Therefor Space is O(n)

*/

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[Math.floor(array.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (const element of array) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      equal.push(element);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Example usage:
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(array);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
