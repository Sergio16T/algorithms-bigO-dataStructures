class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a node to the end of the list
  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  // Insert a node at a specific index
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(data);

    if (index === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (index === this.size) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let current = this.head;
      let currentIndex = 0;

      while (currentIndex < index) {
        current = current.next;
        currentIndex++;
      }

      newNode.next = current;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.prev = newNode;
    }
    this.size++;
  }

  // Remove a node from a specific index
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.size - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      let currentIndex = 0;
      while (currentIndex < index) {
        current = current.next;
        currentIndex++;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;
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

  // Print the list forward
  printForward() {
    let current = this.head;
    let list = '';

    while (current) {
      list += current.data + ' -> ';
      current = current.next;
    }
    list += 'null';
    console.log(list);
  }

  // Print the list backward
  printBackward() {
    let current = this.tail;
    let list = '';

    while (current) {
      list += current.data + ' -> ';
      current = current.prev;
    }
    list += 'null';
    console.log(list);
  }
}

// Usage example:
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(10);
doublyLinkedList.add(20);
doublyLinkedList.add(30);
doublyLinkedList.printForward(); // Output: 10 -> 20 -> 30 -> null
console.log(doublyLinkedList.indexOf(20)); // Output: 1
doublyLinkedList.insertAt(15, 1);
doublyLinkedList.printForward(); // Output: 10 -> 15 -> 20 -> 30 -> null
doublyLinkedList.printBackward(); // Output: 30 -> 20 -> 15 -> 10 -> null
doublyLinkedList.removeFrom(2);
doublyLinkedList.printForward(); // Output: 10 -> 15 -> 30 -> null
doublyLinkedList.printBackward(); // Output: 30 -> 15 -> 10 -> null
console.log(doublyLinkedList.isEmpty()); // Output: false
console.log(doublyLinkedList.getSize()); // Output: 3
