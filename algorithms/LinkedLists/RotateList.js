
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
  * Given the head of a linked list, rotate the list to the right by k places.
  *
  * Time O(n) we iterate through the list to determine length and # of rotations then we iterate again in separate loop to rotate
  * Space O(1) we store references to nodes and var's to calculate rotations and list length

 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!k || !head || !head.next) { return head; }
  // iterate to end of linked list create pointer to store last element of list
  // assign pointer.next to head
  // now head = pointer
  // do this k times what about the case of k > n number of nodes in list?
  // we don't want to over rotate. We can divide k by n and get remainder to determine number of rotations k % n

  // Let's find the last node in list
  let current = head;
  let length = 1;
  while (current.next) {
    length++;
    current = current.next;
  }
  let rotations = k % length;
  // Example list [2, 1, 3] k = 5  --> [3, 1, 2] --> [2, 3, 1] --> [1,2,3] --> [3, 1, 2] --> [2, 3, 1]
  // notice how we arrived at answer much earlier then rotating by 5 since 5 > n.
  // If we are rotating 5 time's and length of list is n
  // we can simplify this by getting the remainder of dividing k/n to know how many rotations
  // e.g. k%n

  while(rotations--) {
    // now we are at end of linked-list let's create new node with val
    let current = head;
    let prev = null;
    while (current.next) {
      length++;
      prev = current;
      current = current.next;
    }
    const node = new ListNode(current.val);
    prev.next = null;
    node.next = head;
    head = node;
  }

  return head;
};





/**
 * Naive Solution -- First Thought Works but rotates list 1 by 1 over and over. Not ideal for large number of rotations
 * Can we optimize so we don't rotate one by one?
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var _rotateRight = function(head, k) {
  if (!k || !head || !head.next) { return head; }
  // iterate to end of linked list create pointer to store last element of list
  // assign pointer.next to head
  // now head = pointer
  // do this k times
  while(k--) {
    let current = head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    // now we are at end of linked-list let's create new node with val
    const node = new ListNode(current.val);
    prev.next = null;
    node.next = head;
    head = node;
  }

  return head;
};