---
sidebar_position: 6
---

# Fast and Slow Pointers

## Determing if a linked list has a cycle

Strategy: Floyd's Cycle Finding Algorithm

```JavaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
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
```
