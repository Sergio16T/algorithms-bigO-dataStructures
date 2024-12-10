/**
 * @param {number[]} nums sorted in ASC order
 * @param {number} target
 * @return {number[]}
 * Find the start and end position of a given target value
 */
var searchRange = function(nums, target) {
  const firstOccurence = findBound(nums, target, true);
  if (firstOccurence === -1) {
    return [-1, -1];
  }
  const lastOccurence = findBound(nums, target, false);
  return [firstOccurence, lastOccurence];
  /* We will need two separate answers of left and right (start and end)
      * search the array halfing as we go to find the start and end position

      We need two conditions.
          1. First check if the current midpoint is equal to the target
          2. Check if value to the left is also equal in the case of looking for start
            - Also check for end range e.g. if mid === start
          3. Check if value to the right is also equal in the case of looking for the end
            - Also check for end range e.g. if mid === end
      * Once we have found the left most value or the right most value depending on which half we're searching
          we can return the start/end position of target element
   */
};

// so we will put nums (the array), the target, and isFirst
function findBound(nums, target, isStartBound) {
  const n = nums.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2); // mid point in array
    if (nums[mid] === target) {
      // we found a match
      if (isStartBound) {
        // check if we're already at the start of nums otherwise compare the prev element as well
        if (mid === start || nums[mid - 1] !== target) {
          return mid;
        }
        // item to the left is also equal to the target this is not the start discard the current match.
        end = mid - 1;
      } else {
        if (mid === end || nums[mid + 1] !== target) {
          return mid;
        }
        // item to the right is also equal to the target this is not the end discard the current match.
        start = mid + 1;
      }
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1; // we did not find the element
}

/* we need to find the start. It's not enough to just find it once..
therefor once we find the element we need to move a pointer to the left or right depending on range..
*/