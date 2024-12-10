/**
 * @param {number} size
 * Final Solution with optimization circular queue
 * RunTime O(1) with space being O(n) where n is the size of the queue. Since size is a constant we could say it's O(1)
 */
class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size).fill(0); // Fixed size array implementing a circular queue
    this.start = 0; // start of current window -- once we exceed max size we move bac
    this.end = 0; // tail pointer of where to enqueue new elements
    this.sum = 0;
    this.count = 0; // number of elements in queue
  }
  /**
  * @param {number} val
  * @return {number}
  */
  next(val) {
    if (this.count === this.size) {
      // subtract first element of window from sum
      // update start window pointer
      this.sum -= this.queue[this.start];
      this.start = (this.start + 1) % this.size;
    } else {
      // Increment count until we hit the size limit
      this.count++;
    }
    this.queue[this.end] = val;
    this.sum += val;

    this.end = (this.end + 1) % this.size;
    return this.sum / this.count;
  }
}


/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/


/**
 * @param {number} size
 * First Solution without optimization this run's in O(n) time with memory taking O(n) space with a large dataset this would be expensive in memory since we never remove elements from queue.
 */
class UnoptimizedMovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
  }
  /**
  * @param {number} val
  * @return {number}
  */
  next(number) {
    this.queue.push(number);
    return this.average();
  }

  average() {
    let sum = 0;
    const iteration = this.queue.length < this.size ? 0 : this.queue.length - this.size;
    const numberOfElements = this.queue.length - iteration;
    for (let i = this.queue.length - 1; i >= iteration; i--) {
      sum += this.queue[i];
    }
    return sum / numberOfElements;
  }
}

/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/