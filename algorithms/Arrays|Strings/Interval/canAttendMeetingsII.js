/**
  * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

  *      Input: intervals = [[0,30],[5,10],[15,20]]
  *      Output: 2

  *      Input: intervals = [[7,10],[2,4]]
  *      Output: 1
  *
  *  In this problem we can use a priority queue to add meetings to the queue to determine how many meeting rooms we would need.
  *  We can remove meetings from the front of queue if we find that the meeting at front of queue is over
  *  In order to traverse the intervals we first SORT them by their start time
  *  Then we add the meeting end time to the priority queue which is ordered by the end time
  *  As we iterate through the sorted intervals we want to check if the front of the queue's endTime is less than or equal to the current interval start time
  *  when this condition is met we know the first meeting in the queue is over and we can remove it from the queue
  *

* @function minMeetingRooms
* @example
* ```Java
* // Example with Java with built in Priority Queue implementation
* class Solution {
*     public int minMeetingRooms(int[][] intervals) {
*         Arrays.sort(intervals, (a, b) -> a[0] - b[0]); // sort the intervals first
*         var priorityQueue = new PriorityQueue<Integer>();
*         for (int i = 0; i < intervals.length; i++) {
*             // check if the first element in queue (first meeting end time) is less than or equal to the start time in current interval
*             if (!priorityQueue.isEmpty() && priorityQueue.peek() <= intervals[i][0]) {
*                 priorityQueue.poll(); // meeting is over remove first element in queue
*             }
*             priorityQueue.offer(intervals[i][1]); // add
*         }
*         return priorityQueue.size();
*     }
* }
* ```
* @description Runtime for this solution is O(n^2). Space  is O(n) for the elements stored in queue.
  *
  * Explanation: First we sort intervals O(n log n)
  *
  * then we iterate through intervals O (n)
  *
  * within each iteration we add to the queue.
  *
  * Enqueue uses Binary Search O (log n) + splice O(n) in enqueue which is occuring within a loop of all intervals
  *
  * We drop the non dominant term O(log n) which simplifies to O(n)
  *
  * O (n log n) + O (n ^ 2) =  O (n ^ 2)
*/
function minMeetingRooms (intervals) {
  // SORT The intervals by the start time
  intervals.sort((a, b) => a[0] - b[0]);
  // then create a priority queue (we will store the end times)
  const pq = new _PriorityQueue();
  // iterate through the sorted intervals -- if the queue is not empty
  pq.enqueue(intervals[0][1]); // queue the first end time

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    // IF the first meeting in queue (end time) is <= the current start time in iteration - first meeting is over no overlap
    if (pq.peek() <= interval[0]) {
      // we can remove the first item from the queue
      pq.dequeue();
    }
    // we store the end time in the queue this ensures that any meeting that won't finish before others is always later in the queue.
    // as we iterate we will be removing items from the queue as the meetings end.
    // at the very end of this process we can check the queue size to determine how many meeting rooms we need
    pq.enqueue(interval[1]);
  }
  return pq.size();
}

// this priority queue assumes the value is a number and inserts in ASC order.
class _PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(v) {
    // we need to find where we insert the value to keep the priority
    // binary search (log n) to find the insert point
    const insertPosition = this.findInsertPosition(v);
    this.queue.splice(insertPosition, 0, v);
    // then splice O(n) to insert
  }
  findInsertPosition(v) {
    // binary search
    let left = 0;
    let right = this.queue.length - 1;
    while (left <= right) {
      const midIndex = Math.floor((left + right)/2);
      const value = this.queue[midIndex];
      if (value === v) {
        return midIndex;
      }
      if (value < v) {
        left = midIndex + 1;
      } else {
        right = midIndex - 1;
      }
    }
    return left; // at this point we know that the value to insert is less than all of the other values in queue return left
  }
  dequeue() {
    // remove first element from queue
    return this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  clear() {
    this.queue = [];
  }
}
console.log(minMeetingRooms([[9, 10], [4, 9], [4, 17]])) // 2