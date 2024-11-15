/**
 * @param {number[][]} intervals
 * @return {boolean}
 given an array of intervals[i] = [starti, endi]
    a person can attend all meetings if there is no overlap between any end time and start time


        what if we sort the windows first? by start time

        [[7,10],[2,4], [4, 7], [11, 12]]
        sorted =
        [2, 4] [4, 7] [7,10] [11, 12]
        now that we've sorted them
        we can check if the the intervals overlap with the next interval in the list.

        does the current window in iteration the max greater than the first in the next interval?

        now that we've sorted them we can quickly check for any conflicts

        run time complexity O (n log n) sort
        space O(1)
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < intervals.length - 1; i++) {
    const [_, endTime] = intervals[i];
    const [nextStartTime] = intervals[i + 1];
    if (endTime > nextStartTime) {
      return false;
    }
  }
  return true;
};