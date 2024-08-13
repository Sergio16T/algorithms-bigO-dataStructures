class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a node to the end of the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Insert a node at a specific index
  insertAt(position, data) {
    // Check for out of bounds position.
    if (position < 0 || position > this.size) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous;
      let currentIndex = 0;

      while (currentIndex < position) {
        previous = current;
        current = current.next;
        currentIndex++;
      }

      newNode.next = current;
      previous.next = newNode;
    }
    this.size++;
  }

  // Remove a node from a specific index
  removeFrom(position) {
    if (position < 0 || position >= this.size) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;
    let previous;
    let currentIndex = 0;

    if (position === 0) {
      this.head = current.next;
    } else {
      while (currentIndex < position) {
        previous = current;
        current = current.next;
        currentIndex++;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  // Get the index of a node containing specific data
  indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // Check if the list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Get the size of the list
  getSize() {
    return this.size;
  }

  // Print the list
  print() {
    let current = this.head;
    let list = '';

    while (current) {
      list += current.data + ' -> ';
      current = current.next;
    }
    list += 'null';
    console.log(list);
  }
}

// Usage example:
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.print(); // Output: 10 -> 20 -> 30 -> null
console.log(linkedList.indexOf(20)); // Output: 1
linkedList.insertAt(1, 15);
linkedList.print(); // Output: 10 -> 15 -> 20 -> 30 -> null
linkedList.removeFrom(2);
linkedList.print(); // Output: 10 -> 15 -> 30 -> null
console.log(linkedList.isEmpty()); // Output: false
console.log(linkedList.getSize()); // Output: 3
