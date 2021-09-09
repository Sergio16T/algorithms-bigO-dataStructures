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

A) Approach 1:
    1) Convert LinkedList to Array of values
    2) Reverse Array
    3) Convert back to LinkedList
    O(3n)

B) Approach 2:
    Use a next, current, and previous pointer and update the list using the pointers as we iterate through the list
    O(n)


Approach A requires 3 iterations
Approach B is fastest requires 1 iteration

*/

// Approach 1: BIG O : O(3n) --> O(n)
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

let result = reverseLinkedList(list);
console.log('Approach 1: ', result);

reverseLinkedList(new ListNode(null, null));

// Approach 2 Big O(n)

/*
Keep track of 3 nodes the head node, previous node, and the next node

1) Create temp variable to store head.next value
2) Switch Head's next node to value of the previous node
3) Assign Previous to the Head node
4) Assign Head to whatever is next(temp var)
5) Repeat
*/

const reverseList = (head) => {
    let prev = null;

    while (head) {
        let next = head.next; // 1) temp variable to store next value
        // 2) head's next node is assigned value of previous
        head.next = prev; // with first iteration previous node doesn't exist so we assign it to value of null

        // 3) assign prev to the value of head node/current node of linked list
        prev = head;
        // 4) assign the head to the next node in list
        head = next;
    }

    return prev;
}

let list2 = new ListNode(1, new ListNode(2, new ListNode(3, null)));

console.log("Approach 2: ", reverseList(list2))
