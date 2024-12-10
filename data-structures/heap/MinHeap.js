/**
 * MinHeap class implementing a min-heap data structure.
 * Elements are stored in an array, where each parent node is less than or equal to its child nodes.
 */
class MinHeap {
  constructor() {
    /**
     * Internal array to hold the heap elements.
     * The heap is represented in a way where for a node at index `i`:
     * - Left child is at `2 * i + 1`
     * - Right child is at `2 * i + 2`
     * - Parent is at `(i - 1) // 2`
     * This allows easy access and maintenance of the heap property.
     */
    this.heap = [];
  }

  /**
   * Get the index of the parent node for the node at the given index.
   * @param {number} index - Index of the child node.
   * @returns {number} - Index of the parent node.
   */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * Get the index of the left child node for the node at the given index.
   * @param {number} index - Index of the parent node.
   * @returns {number} - Index of the left child node.
   */
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  /**
   * Get the index of the right child node for the node at the given index.
   * @param {number} index - Index of the parent node.
   * @returns {number} - Index of the right child node.
   */
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  /**
   * Insert a value into the heap and adjust to maintain the min-heap property.
   * @param {number} value - The value to insert.
   */
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  /**
   * Move the last element up the heap to its correct position to maintain the min-heap property.
   * This is called after inserting a new element at the end.
   */
  heapifyUp() {
    let index = this.heap.length - 1;

    // Continue moving the element up until it is less than its parent
    while (
      index > 0 &&
      this.heap[index] < this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  /**
   * Remove and return the minimum element from the heap.
   * Adjust the heap to maintain the min-heap property after removal.
   * @returns {number|null} - The minimum value or null if the heap is empty.
   */
  extractMin() {
    if (this.heap.length === 0) { return null; } // Heap is empty
    if (this.heap.length === 1) { return this.heap.pop(); } // Only one element

    const min = this.heap[0]; // Root element, the minimum
    this.heap[0] = this.heap.pop(); // Move the last element to the root
    this.heapifyDown(); // Adjust to maintain heap property
    return min;
  }

  /**
   * Move the root element down the heap to its correct position to maintain the min-heap property.
   * This is called after removing the root element.
   */
  heapifyDown() {
    let index = 0;

    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      // Check if right child exists and is smaller than left child
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      // If the current element is already smaller than the smallest child, we're done
      if (this.heap[index] <= this.heap[smallerChildIndex]) { break; }

      // Otherwise, swap with the smaller child and continue
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }

  /**
   * Swap two elements in the heap at the given indices.
   * @param {number} index1 - Index of the first element.
   * @param {number} index2 - Index of the second element.
   */
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  /**
   * Return the minimum element without removing it from the heap.
   * @returns {number|null} - The minimum value or null if the heap is empty.
   */
  peek() {
    return this.heap[0] || null;
  }
}

export default MinHeap;