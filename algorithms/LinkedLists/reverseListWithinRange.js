const util = require('util')

/* Given the head of a singly linked list and two integers left and right where left <= right,
reverse the nodes of the list from position left to position right, and return the reversed list.

Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

*/
// Iterative solutin O(n)
const reverseBetween = (head, left, right) => {
  if (!head) {
    return null;
  }
  let prev = null,
    currentNode = head;

  // args -> [7, 8, 9, 1, 2, 3, 4], 3, 6
  // result should be [7, 8, 3, 2, 1, 9, 4]

  while (left > 1) { // use the left boundary to move right until we are within range to be able to assign a connection and tail node
    prev = currentNode;
    currentNode = currentNode.next;
    left--;
    right--;
  }
  // left is now 1, and right is 4
  // prev is now 8 and current is now 9
  const connection = prev,
    tail = currentNode;

  while (right > 0) { // reverse the connections from pointers within range
    const nextNode = currentNode.next;
    currentNode.next = prev;
    prev = currentNode; // [7--> 8 <- 9, 1, 2, 3, 4] first iteration
    currentNode = nextNode;
    right--;
  }

  // [7 --> 8 <-- 9 <-- 1 <-- 2 <--3, 4] currentNode is now 4 prev is now 3
  // now we need to update the pointers for the connecting node and tail node

  if (connection) {
    connection.next = prev; // 8 now points to 3
  } else { // connection is null in case where left is 1 since first while loop did not run
    head = prev;
  }
  // update tail to point to currentNode

  tail.next = currentNode;
  return head;
}

/*
 Multiple Ways of logging nested objects below
 - node.js util.inspect()
 - toString method override - function and class syntax
*/

// function ListNode(val, next) {
//     this.val = val;
//     this.next = next;
// }

// ListNode.prototype.toString = function() {
//     return `{ val: ${this.val}, next: ${this.next} }`;
// }

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }

  toString() {
    return `ListNode { val: ${this.val}, next: ${this.next} }`;
  }
}

const list = new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null)))))));

const result = reverseBetween(list, 3, 6);

console.log(`${result}`);

// console.log(util.inspect(result, { showHidden: true, depth: null, colors: true }));

const case2 = new ListNode(5, null);

// let case2Result = reverseBetween(case2, 1, 1);
// console.log(case2Result);

const case3 = new ListNode(5, new ListNode(3, null));

const case3Result = reverseBetween(case3, 1, 1);
// console.log('case3', case3Result);