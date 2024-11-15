import MinHeap from "../heap/MinHeap.js";

class PriorityQueue {
  constructor() {
    this.minHeap = new MinHeap();
  }

  enqueue(priority, value) {
    // We push [priority, value] where priority is used for ordering
    this.minHeap.insert([priority, value]);
  }

  dequeue() {
    const min = this.minHeap.extractMin();
    return min ? min[1] : null; // Return only the value, not the priority
  }

  peek() {
    const min = this.minHeap.peek();
    return min ? min[1] : null; // Look at the minimum priority element without removing it
  }

  isEmpty() {
    return this.minHeap.size() === 0;
  }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue(1, "Task 1"); // Lower number means higher priority
pq.enqueue(3, "Task 3");
pq.enqueue(2, "Task 2");

console.log(pq.dequeue()); // Outputs: Task 1
console.log(pq.dequeue()); // Outputs: Task 2
console.log(pq.dequeue()); // Outputs: Task 3
