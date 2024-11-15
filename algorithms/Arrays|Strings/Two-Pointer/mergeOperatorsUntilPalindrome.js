/**
 * You are given an array nums consisting of positive integers.
  You can perform the following operation on the array any number of times:

  Choose any two adjacent elements and replace them with their sum.
  For example, if nums = [1,2,3,1], you can apply one operation to make it [1,5,1].
  Return the minimum number of operations needed to turn the array into a palindrome.

 * @param {number[]} nums containing positive integers
 * @return {number}
 * Choose any two adjacent elements and replace them with their sum
 * Return the minimum number of operations needed to turn the array into a palindrome.
 * NOTE We don't need to change the nums array to actually be a palindrome we just want to determine the operations needed.
 SAMPLE
    * INPUT nums = [1,2,3,1]
    * apply one operation to make it [1,5,1]
    * RETURNS 1 operation


    Input: nums = [1,2,3,4]
    Output: 3
    [1,2,3,4]
    [1, 5, 4] 1 operation (2 + 3)
    [1, 9] 2 operations (5 + 4)
    [10] 3 operations 9 + 1


    Input: nums = [4,3,2,1,2,3,1]
    Output: 2

    [4,3,2,1,2,3,1] Starting at middle doesn't necessarily work
    [4,3,2,3,3,1]

    INITIALLY I started at middle this ignores the outside bounds beginning and end
    Let's start by doing operations with approaching pointers

    let's say p1 = 0 and p2 = array.length - 1
    operations = 0
    [4,3,2,1,2,3,1]

    what about when it's even ?
    [4, 3, 3, 4]
    we check at p1 and compare value to p2
    4 === 1 ? NO not a palindrome
    let's begin by doing operations to make the smaller of the two equal to the larger of the two
    then we move pointers closer to center as we do operations on adjacent elements checking for equality as we go

    while (p1 < p2) {
        let's try to do an operation on adjacent elements at indices [p2, p2 - 1]
        if nums[p1] === nums[p2] {
          p1++;
          p2--;
        } else if nums[p1] > nums[p2] {
            nums[p2 - 1] += nums[p2]
            p2++
            increment operation count variable
        } else {
            nums[p1 + 1] += nums[p1]
            p1++
            increment operation count variable
        }
    }
    return operation
 */

var minimumOperations = function(nums) {
  // approaching pointers
  let p1 = 0;
  let p2 = nums.length - 1;
  let operations = 0;

  while (p1 < p2) {
    if (nums[p1] === nums[p2]) {
      p1++;
      p2--;
    } else if (nums[p1] > nums[p2]) {
      nums[p2 - 1] += nums[p2]
      p2--;
      operations++;
    } else {
      nums[p1 + 1] += nums[p1];
      p1++;
      operations++;
    }
  }
  return operations
};


var _minimumOperations = function(nums) {
  // approaching pointers
  let p1 = 0;
  let p2 = nums.length - 1;
  let operations = 0;

  while (p1 < p2) {
    if (nums[p1] > nums[p2]) {
      nums[p2 - 1] += nums[p2]
      p2--;
      operations++;
    } else if (nums[p1] < nums[p2]) {
      nums[p1 + 1] += nums[p1];
      p1++;
      operations++;
    } else if (nums[p1] === nums[p2]) {
      p1++;
      p2--;
    }
  }
  return operations
};
