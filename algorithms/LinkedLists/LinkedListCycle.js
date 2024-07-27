/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
  There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer
  * Fast and Slow Pointer Floyd's Cycle Finding Algorithm
    Time O(n)
    Space O(1)

 * @param {ListNode} head
 * @return {boolean}
 */

var _hasCycle = function (head) {
  if (head === null) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

// * Time Complexity: O(n)
// * Space Complexity: O(1) for storing the current reference plus the position
var hasCycle = function(head) {
  // traverse linked list and add position
  // traverse again checking if any node references a previous position
  if (!head) {
    return false;
  }
  let current = head;
  let position = 0;
  current.position = position;
  while (current.next) {
    if (current.next.position) {
      return true;
    }
    current = current.next;
    if (!current.position) {
      current.position = position +=1
    }

  }
  return false;
};
