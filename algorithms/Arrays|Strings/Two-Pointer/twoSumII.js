/**
 * @param {number[]} numbers sorted in ASC order
 * @param {number} target
 * @return {number[]} indices of two sum that add up to target - each index incremented by 1
 */
var twoSum = function(numbers, target) {
  // since the input is sorted in asc order and there is exactly 1 match we can use
  // approaching pointers
  let p1 = 0;
  let p2 = numbers.length - 1;

  // we approach as long as we aren't at center;
  while (p1 !== p2) {
    const sum = numbers[p1] + numbers[p2];
    if (sum === target) {
      return new Array(p1 + 1, p2 +1);
    } else if (sum > target) {
      p2--;
    } else {
      p1++;
    }
  }
};