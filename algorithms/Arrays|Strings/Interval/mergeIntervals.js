/**
  * Given an array of intervals where intervals[i] = [starti, endi],
  * merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
  *
  * Time complexity O(n log n)
  * Space complexity O(n)
  * @param {number[][]} intervals
  * @return {number[][]}
*/
var merge = function(intervals) {
  // sort
  // TIME O(n log n)
  intervals.sort((a, b) => a[0] - b[0]);
  // sort intervals by first value -- then we can check for overlap by seeing if the next interval is larger than previous
  const merged = [];

  for (const interval of intervals) {
    // if the list of merged intervals is empty or if the current
    // interval does not overlap with the previous, simply append it.
    if (!merged.length || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    }
    // otherwise we need to merge the two
    else {
      merged[merged.length -1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1],
      );
    }
  }
  return merged;
};