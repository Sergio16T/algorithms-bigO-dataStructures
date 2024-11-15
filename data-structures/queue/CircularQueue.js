
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