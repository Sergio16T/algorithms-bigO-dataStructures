// Traverse each list from start to end and push the values into an array
// sort the array
// convert the array to a list
// return the sorted linked list

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
    list.sort(function(a,b) {
        return a - b;
    });

    function arrayToList(array) {
       let list1 = null;
        for (let i = array.length - 1; i >= 0; i--) {
            list1 = {val: array[i], next: list1};
        }
        return list1;
    }
    return arrayToList(list);


};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
