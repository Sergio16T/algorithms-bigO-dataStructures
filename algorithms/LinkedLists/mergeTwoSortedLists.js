// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
// Traverse each list from start to end and push the values into an array
// sort the array
// convert the array to a list
// return the sorted linked list

/**
 * Definition for singly linked list node.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
var mergeTwoLists = function(l1, l2) {
    let list = [];

    function listToArray(linkedList) {
        while (linkedList !== null) {
            list.push(linkedList.val);
            linkedList = linkedList.next;
        }
    }

    listToArray(l1);
    listToArray(l2);
    list.sort(function(a, b) {
        return a - b;
    });

    function arrayToList(array) {
        let list = null;
        for (let i = array.length - 1; i >= 0; i--) {
            list = new ListNode(array[i], list); // OR list = { val: array[i], next: list };
        }
        return list;
    }
    return arrayToList(list);

};

function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

/*
Sample input
list1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null
        }
    }
};
list2 = {
    val: 1,
    next: {
        val: 4,
        next: {
            val: 5,
            next: null
        }
    }
};

1) create an array from the values in list1
[1, 2, 3]
2) convert list2 to an array of list values and add to new array created in step 1
[1, 2, 3, 1, 4, 5];
3) Sort the array
[1, 1, 2, 3, 4, 5];
4) Convert the array back into a Linked List

*/