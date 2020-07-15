/*
First we will add an auxiliary "dummy" node, which points to the list head. 
The "dummy" node is used to simplify some corner cases such as a list with only one node,
 or removing the head of the list. On the first pass, we find the list length LL. 
 Then we set a pointer to the dummy node and start to move it through the list till it
  comes to the (L - n)(L−n) th node. We relink next pointer of the (L - n)(L−n) th node 
  to the (L - n + 2)(L−n+2) th node and we are done
 */
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
function ListNode(val, next) {
    this.val = val;
    this.next =  next;
}

var removeNthFromEnd = function(head, n) {
    var dummyListNode = new ListNode(0); 
    dummyListNode.next = head; 
    let length = 0; 
    let first = head; 
    while(first != null) {
        length++; 
        first = first.next; 
    }
    length -= n; 
    first = dummyListNode; 
    while (length > 0) {
        length --; 
        first = first.next; 
    }
    first.next = first.next.next; 
    return dummyListNode.next; 
};

module.exports = removeNthFromEnd