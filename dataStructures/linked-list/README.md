# Linked List

In computer science, a **linked list** stores a sequential collection of elements but unlike arrays the elements are not placed contiguously in memory. Each element consists of a node that stores the element itself and also a reference (a.k.a. pointer or link) to the next element in the list.

This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration.

A drawback of linked lists is that access time is linear O(n). Faster access, O(1) is not feasible. Arrays have O(1) performance for access compared to linked lists O(n).


## Example
<img src="./images/linked-list.svg" width="50%" style="margin-bottom: 25px"/>

```javascript
/*
const ListNode = function(element) {
    this.element = element;
    this.next = null;
}
*/

let list = new LinkedList();
list.append(12);
list.append(99);
list.append(37);
list.print()
/*
ListNode {
    val: 12,
    next: ListNode {
        val:99,
        next: ListNode {
            val: 37,
            next: null
        }
    }
};
*/
```

### LinkedList vs Array

One of the benefits of LinkedList over a conventional array is that we
do not need to shift elements over when adding or removing them as you do in an array.

However we do need do use pointers when working with LinkedList which requires some extra attention

Another detail in the array is that we can directly access any element at any position. With a LinkedList
if we want to access an element from the middle we need to start at the beginning the *head* of the linkedlist and
iterate through the list until we find the desired element

Arrays have O(1) random access(better for searching for elements), but are really expensive to add stuff onto or remove stuff from. (Because each element in the array has to be moved to the right or left depending on addition and removal of elements at a given index)

Linked Lists have Better Performance when inserting and deleting elements


### Real Word Examples
* Conga Line
* Scavenger Hunt
* Train Cars

