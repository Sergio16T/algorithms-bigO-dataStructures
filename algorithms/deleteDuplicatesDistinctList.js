/*
Delete all nodes that duplicates
*/
// Iterate through the list check if list.val is equal to list.next.val
// If it's a duplicate we need to remove that node as well as the node next to it.
// so we will assign currentNode to previousNode and then next node to the nextNode.next

// O(n^2)
var deleteDuplicates = function(head) {
    let currentNode = head,
        prev = null;

    while (currentNode) {
        if (currentNode.next && currentNode.val === currentNode.next.val) {
            let duplicate = currentNode;
            let nextNode = currentNode.next;
            // we need to create another loop here and iterate through all of the nodes in list to remove all instances of the duplicate;
            while (duplicate && nextNode && duplicate.val === nextNode.val) {
                duplicate.next = nextNode.next; // delete the nextNode by updating pointer
                nextNode = nextNode.next; // Update next pointer to move one node down
            }

            if (prev) {
                prev.next = nextNode; // delete the original duplicate
            } else {
                head = duplicate.next; // delete the original duplicate
            }

        } else {
            // Current Node is not equal to the next node.
            // Before we update currentNode to iterate through list, update the previous pointer
            prev = currentNode;
        }
        // Update the currentNode to next node in list
        currentNode = currentNode.next;
    }
    return head;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}