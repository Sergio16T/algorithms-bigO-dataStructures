/*
Sample LinkedList
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

LinkedList vs Array

- One of the benefits of LinkedList over a conventional array is that we
do not need to shift elements over when adding or removing them as you do in an array.

- However we do need do use pointers when working with LinkedList which requires some extra attention

- Another detail in the array is that we can directly access any element at any position. With a LinkedList
if we want to access an element from the middle we need to start at the beginning the *head* of the linkedlist and
iterate through the list until we find the desired element

Real Word Examples
* Conga Line
* Scavenger Hunt
* Train Cars

*/

function LinkedList() {
    let Node = function(element) {
        this.element = element;
        this.next = null;
    }
    let length = 0,
        head = null;

    this.append = function(element) {
        // 1) initialize new Node with element
        let node = new Node(element),
            current; // current is a pointer variable to point to current node in list

        // 2) check if head is null or if there is an existing list to append to
        if (head === null) { // 3) if empty assign head of linked list to new node (first node on list)
            head = node;
        } else {
            current = head; // 4) begin by pointing current to the head of linkedList

            // 5) iterate through the existing list until next is null (last item in list)
            while (current.next) {
                current = current.next;
            }
            // 6) append the new node to end of list by pointing next to new node
            current.next = node;
        }
        length++; //7) increment the length of list
    };

    this.insert = function(position, element) {
        // 1) Check for out of bounds position. In bounds position begins at 0 to insert at beginning and goes to length of list to insert at end.
        let outOfBounds = position < 0 || position > this.length;
        if (outOfBounds) {
            return false;
        }
        let current = head; // current is a pointer variable to point to current node in list
        let node = new Node(element); // initialize new node
        let index = 0;
        let previous;

        // 2) If position is 0 insert as head of list.
        if (position === 0) {
            node.next = current;
            head = node;
        } else {
            // we need to iterate through to list until we're at the position
            while (index++ < position) {
                previous = current; // set previous pointer to current node in list
                current = current.next; // update current pointer to the next node in list
            }
            // once we are at the position we need to insert new node at the next pointer for the previous node
            // and update the current node to be referenced in the new node as next
            node.next = current;
            previous.next = node;
        }
        length++;
        return true;

    };

    this.removeAt = function(position) {};
    this.remove = function(element) {};
    this.indexOf = function(element) {};
    this.isEmpty = function() {};
    this.size = function() {};
    this.toString = function() {};
    this.print = function() {};
}

let list = new LinkedList();
list.append(5);
list.append(10);