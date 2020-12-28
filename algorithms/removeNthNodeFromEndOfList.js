//Given the head of a linked list, remove the nth node from the end of the list and return its head( referring to the head of the linked list).

/*
First we will add an auxiliary "dummy" node, which points to the list head.
The "dummy" node is used to simplify some corner cases such as a list with only one node,
 or removing the head of the list. On the first pass, we find the list length LL.
 Then we set a pointer to the dummy node and start to move it through the list till it
  comes to the (L - n)(L−n) th node. We relink next pointer of the (L - n)(L−n) th node
  to the (L - n + 2)(L−n+2) th node and we are done
 */
function ListNode(val, next) {
    this.val = val;
    this.next =  next;
}
// Example Case: let linkedList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))));
// 1) first create dummyNode to simplify handling edge cases
// 2) iterate through the list to calculate the length
//in this example case linkedList is length 4
// with n = 2  we remove the 2nd node from the end (2nd to last);
// 3) length becomes 2
// 4) reassign first to reference the dummyListNode
// dummy node starts @ 0 then goes to 1, 2, 3, 4, null
// 5) while loop runs twice with length = 2 after step 3
// first variable node.val becomes equal to 1 then becomes 2 so now first is pointing at listNode with val 2
// 6) then we assign the next value of listNode with val 2 to be listNode 4
// (skips over listNode 3 and the garbage collector gets rid of it since there is no reference to this node anymore);
// 7) return dummyListNode.next which is the head that has the nth node from end removed!

var removeNthFromEnd = function(head, n) {
    var dummyListNode = new ListNode(0); // 1 first create dummyNode to simplify handling edge cases
    dummyListNode.next = head;
    let length = 0;
    let first = head;
    while (first != null) {
        length++; // 2 iterate through the list to calculate the length which in example case is 4
        first = first.next;
    }
    length -= n; // 3 subtract n from length -- which in example case becomes 2
    first = dummyListNode; // 4 reassign first to reference the dummyListNode -- dummy node starts @ 0 then goes to 1, 2, 3, 4, null
    while (length > 0) {
        length --; //5 while loop runs twice with length = 2 after step 3 first variable node.val becomes equal to 1 then becomes 2 so now first is pointing at listNode with val 2
        first = first.next;
    }
    first.next = first.next.next; // 6 this is where we remove the nth node: we assign the next value of listNode with val 2 to be listNode 4
    return dummyListNode.next; //7 return dummyListNode.next which is the head that has the nth node from end removed!
};

module.exports = removeNthFromEnd