---
sidebar_position: 5
---

# Linked List Traversal

## Traversing Start to Finish

To traverse a node we can iterate through the node

```JavaScript
function LinkedListNode(value, next) {
  this.value = value;
  this.next = next;
}

/**
 * @param {LinkedListNode} node
 */
function traverseLinkedList(node) {
  let currentNode = node; // assign a pointer that references the node so as we traverse the pointer the original node is maintained from start to finish
  while (currentNode) {
    currentNode = currentNode.next; // since currentNode is a reference to original node -- we can apply updates here and the original object referenced will also be updated
  }
}
```

## LinkedList reversal

To reverse a list we make use of

1. temp variables for storing the next node as we reassign the original node
2. reversed variable storing the reversed list as we go

```JavaScript
function LinkedListNode(value, next) {
  this.value = value;
  this.next = next;
}

/**
 * @param {LinkedListNode} node
 */
function reverseLinkedList(node) {
  let reversed = null; // reversed will be used as a pointer to store reversed linked list

  while (node) { // we need to iterate until node is finally null since that means we've reached the end of list
    const next = node.next; // store next linked list node since we reassign it shortly
    node.next = reversed; // beginning at beginning of list we will start reversing the list assigning first node's next to null
    reversed = node;
    node = next;
  }
  return reversed;
}

// test cases

const list = new LinkedListNode(1, null);
list.next = new LinkedListNode(2, null);
list.next.next = new LinkedListNode(3, null);

const reversed = reverseLinkedList(list); // 3 - 2 - 1 - null
```

## reversing range within linked list

```JavaScript
function LinkedListNode(value, next) {
  this.value = value;
  this.next = next;
}

/**
 * @param {LinkedListNode} node - The head of the linked list
 * @param {Number} start - The start position/index within the list (1-based index)
 * @param {Number} end - The end position/index within the list (1-based index)
 */
function reverseLinkedListWithinRange(node, start, end) {
  let currentNode = node; // Store reference to current position in the list
  let prev = null; // prev will store the previous node during iteration.

  /*
   Traverse the linked list until we reach the start position.
   The goal here is to identify the "connection" node (node just before the reversed portion) and the "tail" node (the first node to be reversed).
   These will help us reconnect the reversed portion with the unaffected portions of the list.
  */
  while (start > 1) {
    // Traverse only if the start position is not at index 1 (i.e., the head of the list)
    prev = currentNode; // Store the previous node before moving forward
    currentNode = currentNode.next; // Move currentNode forward
    start--;
    end--; // Decrease end as well so we only reverse the correct number of elements later
  }

  const connection = prev; // The node before the start of the reversed portion (this node will point to the new head after reversal)
  const tail = currentNode; // The first node in the reversed portion (this will be the tail of the reversed section)

  // Now reverse the nodes within the range, starting from currentNode.
  while (end > 0) {
    const nextNode = currentNode.next; // Store the next node temporarily
    currentNode.next = prev; // Reverse the pointer: currentNode now points to the previous node
    prev = currentNode; // Move prev to the current node (it becomes the new "previous" node for the next iteration)
    currentNode = nextNode; // Move currentNode to the next node in the list
    end--; // Decrease end to move closer to finishing the reversal
  }

  /*
    At this point, we have reversed the section, but:
    - The "connection" node still points to the old head of the reversed section (not the new one).
    - The "tail" node still points to the next node after the reversed portion (which should be connected properly).

    We need to update the pointers:
  */

  // If connection is not null, update connection's next pointer to point to the new head of the reversed portion.
  if (connection) {
    connection.next = prev; // connection now points to the new head of the reversed portion
  } else {
    node = prev; // If connection is null (i.e., left was 1), update the head of the list to be the new head
  }

  // Finally, update the tail's next pointer to point to currentNode (the node after the reversed portion)
  tail.next = currentNode; // tail now connects the reversed portion to the remainder of the list

  return node; // Return the modified head of the list (may have changed if left was 1)
}
```
