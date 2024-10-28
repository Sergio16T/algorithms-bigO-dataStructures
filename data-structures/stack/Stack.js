// LIFO
class Stack {
  constructor() {
    this.items = [];
  }

  pop() {
    return this.items.pop();
  }
  push(element) {
    return this.items.push(element);
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  print() {
    console.log(this.items.toString());
  }
  toString() {
    return this.items.toString();
  }
}

const stack = new Stack();
stack.push(1);
stack.print();