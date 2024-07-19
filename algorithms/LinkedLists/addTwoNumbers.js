/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
  * @param {ListNode} l1
  * @param {ListNode} l2
  * @return {ListNode}
  */
var addTwoNumbers = function(l1, l2) {
  // @input - 243  564
  // 342 + 465
  // 2 + 5 = 7
  // 4 + 6 = 10 carry the 1
  // 4 + 3 = 7 -- + the carry (1) = 8
  // return to 708
  /// 1) We can iterate through both linked lists while at least 1 is not null and carry is not greater than 0
  // DummyNode initialization for easier return at end (dummyNode.next)
  const dummyNode = new ListNode();
  let current = dummyNode;
  let carry = 0;

  while (l1 || l2 || carry) {
    // Initialize values we are adding
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;

    // Math
    const sum = v1 + v2 + carry; // e.g. 4 + 6 + 0 = 10
    // carry is equal to remainder of sum divided by 10
    carry = Math.floor(sum / 10) // 1
    const value = sum % 10; // 0
    current.next = new ListNode(value);

    // Update pointers
    current = current.next
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummyNode.next;
};

