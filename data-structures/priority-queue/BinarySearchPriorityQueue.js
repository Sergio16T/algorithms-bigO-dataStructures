function QueueElement(element, priority) {
  this.element = element;
  this.priority = priority;
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // Insert with binary search to find the correct insertion index
  enQueue(element, priority) {
    const item = new QueueElement(element, priority);
    const index = this.findInsertIndex(priority);
    this.items.splice(index, 0, item); // Insert at the correct position
  }

  // Binary search to find the correct index based on priority
  findInsertIndex(priority) {
    let low = 0;
    let high = this.items.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (this.items[mid].priority === priority) {
        // If priorities are the same, we insert here
        return mid;
      } else if (this.items[mid].priority < priority) {
        low = mid + 1; // Target priority is higher, move right
      } else {
        high = mid - 1; // Target priority is lower, move left
      }
    }

    return low; // Low is now the correct insertion point
  }

  deQueue() {
    return this.items.shift(); // Remove the highest priority element
  }

  firstItem() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.map(item => `${item.element} (priority: ${item.priority})`));
  }
}

// Example usage
const queue = new PriorityQueue();
queue.enQueue("Task 1", 1);
queue.enQueue("Task 2", 3);
queue.enQueue("Task 3", 2);
queue.enQueue("Task 4", 4);
queue.print(); // Expected order based on priority: Task 1, Task 3, Task 2, Task 4
