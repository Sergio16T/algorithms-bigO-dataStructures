// Find Minimum in Rotated Sorted Array

const rotatedArray = [4, 5, 6, 7, 1, 2, 3];

//binary search
// Logarithmic O(log n) time complexity

function findMin(array) {
  //create pointers for left and right (indices)
  let left = 0;
  let right = array.length - 1; // (1) in this example equals 6

  // cover edge cases
  if (array.length === 1) { return array[0]; }
  if (array[left] < array[right]) { return array[0]; }

  while (left < right) { // continue while loop until both pointers are pointed at the min value
    // (1) 0 < 6 ? y
    // (2) 4 < 6 ? y
    // (3) 4 < 5 ? y proceed
    // (4) 4 < 4 ? N breaks while loop
    const midIndex = Math.floor((left + right)/2);
    // (1) in rotatedArray value this would be index 3
    //2) recalculated as (4 + 6) /2  = 5
    // (3) recalculated as Math.floor(4 + 5)/2 = 4

    if (array[midIndex] > array[right]) {
      // (1) 7 > 3 ? yes proceed to reassign left then restart while loop
      //(2) 2 > 3 ? no proceed to next condition
      // (3) array[4] > array[5] a.k.a 1 > 2 ? no proceed to next condition

      left = midIndex + 1;
      // (1) left =  4
    } else {
      right = midIndex
      // (2) = 5
      // (3) = 4
    }
  }
  return array[left];
}

findMin(rotatedArray) // 1

exports.findMin = findMin;


// binary search, also known as half-interval search, logarithmic search, or binary chop,
// is a search algorithm that finds the position of a target value within a sorted array.
// Binary search compares the target value to the middle element of the array.