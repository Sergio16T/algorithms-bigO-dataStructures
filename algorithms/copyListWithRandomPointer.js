//A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
// Return a deep copy of the list

//  Definition for a Node.
 function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
 };

/* Terminology ------------
 * 1) originalHead represents the head of the original_head. It is never modified.
 * 2) clonedHead represents the head of the cloned linked list.
 * 3) oldHead represents a reference to the the head of the original linked list.
 *    It is used for traversing the original list (and hence mutable).
 * 4) newHead represents a reference to the head of the cloned linked list.
 *    It is used for traversing the cloned linked list (and hence mutable).
 */

/* Deep copies the linked list (along with random pointers) */
var copyRandomList = function(originalHead) {
    // Handle the corner case
    if (!originalHead) return originalHead;

    // Create the head of the cloned linked list and store its reference permanently
    var clonedHead = new Node(originalHead.val, null, null);

    // Create iterators for both the linked lists,
    // both references to original linked list so assignByReference applies here..
    // any changes when cloning and adding to newHead.next will alter the clonedHead.next values until clonedHead linked list is a copy of the original
    var newHead = clonedHead;
    var oldHead = originalHead;

    // Create a map which facilitates going vertically down from the original to cloned node
    var nodeJustBelow = new Map();

    /* Node to Node mapping is compulsory(a must) to deal with duplicates in the linked list */

    // Link the nodes vertically
    nodeJustBelow.set(oldHead,newHead);

    // Check whether the next node exists or not
    while (oldHead.next) {
        // First, create the next node in the cloned list.
        newHead.next = new Node(oldHead.next.val, null, null);

        // After the node has been created, step on it by the new thread
        newHead = newHead.next;
        oldHead = oldHead.next;

        // After you've moved to the newly created node, connect it vertically
        nodeJustBelow.set(oldHead,newHead);
    }

    /* The linked list has been cloned correctly (except the random pointers) */

    // Traverse both the lists together and fill the random pointers
    oldHead = originalHead;
    newHead = clonedHead;

    // As long as both the lists exist, correct the random pointers
    while (oldHead && newHead) {
        // Traverse the random pointer of the original list and go down vertically and connect it
        newHead.random = oldHead.random ? nodeJustBelow.get(oldHead.random) : null;

        // Move forward in both the lists
        oldHead = oldHead.next;
        newHead = newHead.next;
    }

    // Return the stored reference of the cloned list
    return clonedHead;
}


//assign by reference notes
//In the code snippet below, we are assigning a compound value (array) in a variable and thus assign-by-reference applies here.
//The variables flash and quicksilver are references to the same value (aka shared value). The references will point to the updated
//value when the shared value is modified.


// 1) The typeof value assigned to a variable decides whether the value is stored with assign-by-value or assign-by-reference
// 2) On variable assignment, the scalar primitive values (Number, String, Boolean, undefined, null, Symbol) are assigned-by-value and
// compound values (Object, Array) are assigned-by-reference
// 3) The references in JavaScript only point at contained values and NOT at other variables or references
// 4) In JavaScript, scalar primitive values (Number, String, Boolean, undefined, null, Symbol) are immutable and
// compound values (Object, Array) are mutable

var flash = [8,8,8];
var quicksilver = flash;   //assign-by-reference
quicksilver.push(0);
//console.log(flash);        //[8,8,8,0]
//console.log(quicksilver);  //[8,8,8,0]

// objects work the same way
var objectExample = {a: 1};

var reference = objectExample;

//console.log(reference) // {a: 1}
reference.a = 2;
//console.log(reference) //{a: 2}
//console.log(objectExample) //{a: 2}