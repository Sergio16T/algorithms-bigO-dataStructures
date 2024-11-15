/*
Write function that takes input values(a sorted array) and n (an integer) and find the index of integer in sorted array;
If the integer is not in the array return -1;
*/
// binarySearch is optimal because we have a sorted Array as input
// note: binarySearch does not work if the array is not sorted since the median can be anywhere and cutting the array in half could mean that you cut off the number you were searching for
// O(log n)
const binarySearch = (values, n) => {
  let left = 0;
  let right = values.length - 1;

  while (left < right) {
    const midIndex = Math.floor((left + right)/2);
    if (values[midIndex] === n) { return midIndex; }

    if (values[midIndex] < n) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }
  return values[left] === n ? left : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3));
