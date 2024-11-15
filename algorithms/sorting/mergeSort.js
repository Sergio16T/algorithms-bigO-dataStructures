/*

Divide and conquer - Merge Sort

TIME COMPLEXITY: O(N log N)
Explanation:
Recursive Splitting:
* The recursiveMergeSort function splits the array into two halves recursively until each subarray has only one element.
* At each level of recursion, the array is divided in half, so the depth of recursion (number of levels) is O(log ⁡n), where n is the length of the array.

Merging:
* The merge function merges two sorted halves back into a single sorted array. For each merge operation, it processes each element in both halves, which takes O(n) time.
* Since there are O(log⁡ n)levels, and merging each level takes O(n) time, the overall time complexity is O(nlog⁡n)

SPACE COMPLEXITY: O(N)

Explanation:

Depth of call stack requires memory so O(log n)
Auxillary space required for merging: The merge function creates a new array (result) to store the merged elements at each recursion level. For each level of recursion, the total space used for merging is O(n)
space complexity for merging across all recursion levels is O(n).
*/
const recursiveMergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);

  return merge(recursiveMergeSort(left), recursiveMergeSort(right))
}

const merge = (left, right) => {
  const result = [];
  let il = 0;
  let ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il]);
      il++;
    } else {
      result.push(right[ir]);
      ir++;
    }
  }
  while (il < left.length) {
    result.push(left[il]);
    il++;
  }

  while (ir < right.length) {
    result.push(right[ir]);
    ir++;
  }

  return result;
}


const array = [0, 6, 5, 1, 3, 2];

console.log(recursiveMergeSort(array))