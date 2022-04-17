/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(n) time
var deleteDuplicates = function(head) {
    let currentNode = head;
    while (currentNode) {
        if (currentNode.next && currentNode.val === currentNode.next.val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return head;
};