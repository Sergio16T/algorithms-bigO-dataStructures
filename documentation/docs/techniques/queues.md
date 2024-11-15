---
sidebar_position: 14
---

# Queues

When you want to process the elements in order, using a queue might be a good choice.

## Circular Queue

A common problem is a moving average problem where we need to compute average of elements in a fixed window as we enqueue new elements

When we have a fixed size queue or a fixed size window of elements in which we are iterating from a queue we can use a circular queue to save on memory

and even do computations in O(1) time since we can track the sum as we go.

```JavaScript
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
      this.count++;
    }
    this.queue[this.end] = val;
    this.sum += val;

    this.end = (this.end + 1) % this.size;
    return this.sum / this.count;
  }
}
```

## Circular Queue Implementation

Review how the below data structure and the above get moving average implementation both make use of start and end pointers to track where in queue to insert elements as well as tracking the element that was added first in cycle even when we're removing and adding elements at beginning of cycle.

```JavaScript
class CircularQueue {
  // FIFO
  constructor(size) {
    this.queue = [];
    this.maxSize = size;
    this.head = -1; // position to dequeu from
    this.tail = -1; // position to enqueu on
  }

  Front() {
    if (this.isEmpty()) {
      return -1; // element not found
    }
    return this.queue[this.head];
  }

  Rear() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.queue[this.tail]
  }

  enQueue(value) {
    if (this.isFull()) {
      return false;
    }
    if (this.isEmpty()) {
      this.head = 0;
    }
    this.tail = (this.tail + 1) % this.maxSize;
    this.queue[this.tail] = value;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    delete this.queue[this.head];

    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
      return true;
    }
    this.head = (this.head + 1) % this.maxSize;
    return true;
  }

  isEmpty() {
    return this.head === -1;
  }

  isFull() {
    return ((this.tail + 1) % this.maxSize) == this.head;
  }
}


const myCircularQueue = new CircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // return True
console.log(myCircularQueue.enQueue(2)); // return True
console.log(myCircularQueue.enQueue(3)); // return True
console.log(myCircularQueue.enQueue(4)); // return False
console.log(myCircularQueue.Rear());     // return 3
console.log(myCircularQueue.isFull());   // return True
console.log(myCircularQueue.deQueue());  // return True
console.log(myCircularQueue.enQueue(4)); // return True
console.log(myCircularQueue.Rear());     // return 4
```
