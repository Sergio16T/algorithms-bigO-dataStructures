/*
Takes input Singly LinkedList [1, 2, 3, 4, 5] and returns it in reverse [5, 4, 3, 2, 1]

function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

list = ListNode {
    val: 1,
    next: ListNode {
        val: 2,
        next: ListNode {
            val: 3,
            next: null
        }
    }
};

A) Brute Force Solution:
    1) Convert LinkedList to Array of values
    2) Reverse Array
    3) Convert back to LinkedList
    O(3n)

B) Optimized Solution:
    1) Use a temp variable to store next node in list
    2) Keep track of current head node by updating the head node argument in function as we iterate
    3) Maintain a variable reversed where we construct the reversed list with the previous values
    4) Update the reversed list using the pointers as we iterate through the original list
    O(n)


Approach A requires 3 iterations
Approach B is fastest requires 1 iteration

*/

/*
Optimized Solution
Time complexity: O(n)
Space complexity : O(1)
Keep track of 3 nodes the head node, previous node, and the next node

1) Create temp variable to store next node value
2) Switch Current head's next node to value of the reversed list we are maintaining
3) Assign reversed list to the Head node which now has most recent head as value with next pointing to previous nodes in reverse order
4) Assign Head to whatever is next(temp var) which contains the next node in the list
5) Repeat
*/

const reverseList = (head) => {
    let reversed = null;

    while (head) {
        let next = head.next; // 1) temp variable to store next value
        // 2) head's next node is assigned value of current reversed linked list
        head.next = reversed; // with first iteration previous node doesn't exist so we assign it to value of null

        // 3) assign reversed to the value of head node/current node of linked list
        reversed = head;
        // 4) assign the head to the next node in list
        head = next;
    }

    return reversed;
}
// [1 2 3] --> [2 3 null] -->
let list2 = new ListNode(1, new ListNode(2, new ListNode(3, null)));

console.log("Approach B: ", reverseList(list2))




function _reverseList(head) {
    let prev = null,
        curr = head;

    while (curr != null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}





// Brute Force Solution O(3n) --> O(n)
const reverseLinkedList = (list) => {
    if (!list) {
        return list;
    }
    let array = listToArray(list);
    let reverse = reverseArray(array);
    return arrayToLinkedList(reverse);
}

const listToArray = (linkedList) => {
    let result = [];

    while (linkedList) {
        result.push(linkedList.val);
        linkedList = linkedList.next;
    }

    return result;
}

const arrayToLinkedList = (array) => {
    let head = new ListNode(array[0], null);
    let list = head;

    // 1) Iterate through the array
    for (let i = 1; i < array.length; i++) {
        list.next = new ListNode(array[i], null); // 2) Create a new node and append until there are none left
        list = list.next;
    }

    return head;
}

const reverseArray = (array) => {
    for (let i = 0; i <  Math.floor(array.length/2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }

    return array;
}


function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

let list = new ListNode(1, new ListNode(2, new ListNode(3, null)));

// let result = reverseLinkedList(list);
// console.log('Approach A: ', result);

// reverseLinkedList(new ListNode(null, null));