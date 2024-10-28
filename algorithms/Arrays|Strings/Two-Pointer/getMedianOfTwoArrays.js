/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * HINT: overall run time complexity  O(log (m+n)) indicates binary search is used since we do binary search on two different inputs m + n

  I implemented an O(n) run time complexity
  O(n) space complexity solution here in first attempt

  Limitation with this solution is if we have large datasets the memoray allocation is expensive
*/
var findMedianSortedArrays = function (nums1, nums2) {
  /*
     median is the middle number in a sorted list

    * we need to merge nums 1 and nums 2 first in O(n) time we can't do worse than O(n log n);
    * we can use two pointers to iterate merging as we go based on comparison
    once merged we can grab the median.
    * If an odd number of elements we return (m + n) / 2 e.g. [1, 2, 3, 4, 5] = 5 / 2 -> 2.5 ---> 2 index 2 is the median.
    * if even we return (m + n / 2) +  (m + n / 2) - 1 th elements e.g. [1, 2, 3, 4] = 4 / 2 -> 2 --> return average of index 2 and index 1 e.g. (2 + 3 = 5)/2 = 2.5
  */
  const merged = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length || p2 < nums2.length) {
    if (p1 < nums1.length && (p2 >= nums2.length || nums1[p1] <= nums2[p2])) { // ensure we check for out of bounds items
      merged.push(nums1[p1]);
      p1++;
    } else {
      merged.push(nums2[p2]);
      p2++;
    }
  }

  const m = Math.floor(merged.length / 2);
  return merged.length % 2 === 0 ? (merged[m] + merged[m - 1]) / 2 : merged[m];
};
