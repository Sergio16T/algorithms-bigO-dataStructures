// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  /*
  remove elements in place
  order may be changed
  first k elements in nums must not be equal to val
      -- so we can swap last element in array with the current and then each time we do a swap we can increment a counter for number of elements with val.
  returns number of elements in nums which are not equal to value
  */

  let numberOfOccurence = 0; // counts number of occurrence of val to subtract from nums
  // iterate through nums checking if current num is equal to val if so we increment the numberOfOccurence and swap with last element in array and decrement the i
  for (let i = 0; i < nums.length - numberOfOccurence; i++) {
    const current = nums[i];
    if (current === val) {
      nums[i] = nums[nums.length - 1 - numberOfOccurence]; // [7, 2, 2, 1, 3, 0, 1]
      nums[nums.length - 1 - numberOfOccurence] = current;
      numberOfOccurence++;
      i--;
    }
  }
  return nums.length - numberOfOccurence;
};


/*
remove all occurences of val in nums IN PLACE
ORDER OF ELEMENTS may be changed.

Change the array nums such that the FIRST K ELEMENTS of nums contain the elements which are not equal to val
RETURN K NUMBER OF ITEMS IN ARRAY THAT ARE NOT EQUAL TO VAL
*/

/*
TIME: O(n)
SPACE: O(1)
*/
var _removeElement = function(nums, val) {
  // Input: nums = [3,2,2,3], val = 3
  // Output: 2, nums = [2,2,_,_]
  let k = 0; // we could iterate until length of nums - k (k is number of occurences)
  // k can also represent the end value to switch with

  // let current; // can represent the current iteration in loop OR current val..
  // as we find matches switch the value at end of array - k with the current value
  // make sure we when we switch we recheck the new value at that index

  for (let current = 0; current < nums.length - k; current++) {
    const currentVal = nums[current];
    if (currentVal === val) {
      const temp = nums[current];
      nums[current] = nums[nums.length - 1 - k];
      nums[nums.length - 1 - k] = temp;
      k++;
      current--;
    }
  }
  return nums.length - k;

}



/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var __removeElement = function(nums, val) {
  // iterate through nums splicing the array whenever val is found
  // when removed must decrement counter since element in that iteration was removed.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};



// Approach 2: Two Pointers - when elements to remove are rare

/*
Now consider cases where the array contains few elements to remove.
For example, nums=[1,2,3,5,4],val=4
The previous algorithm will do unnecessary copy operation of the first four elements.

Another example is nums=[4,1,2,3,5],val=4
It seems unnecessary to move elements [1,2,3,5] one step left as the problem description mentions that the order of elements could be changed.

When we encounter nums[i]=val, we can swap the current element out with the last element and dispose the last one. This essentially reduces the array's size by 1.

Note that the last element that was swapped in could be the value you want to remove itself. But don't worry, in the next iteration we will still check this element.

*/
function removeElement2(nums, val) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1];
      // reduce array size by one
      n--;
    } else {
      i++;
    }
  }
  return n;
}