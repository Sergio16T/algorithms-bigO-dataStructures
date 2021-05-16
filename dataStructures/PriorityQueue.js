// class QueueElement {
//     constructor(element, priority) {
//         this.element = element;
//         this.priority = priority
//     }
// }
function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority
}

class PriorityQueue {
    constructor() {
        this.items = [];
    };

    enQueue = (element, priority) => {
        let item = new QueueElement(element, priority);

        /* loop through the items in queue and if we find an element with a priority higher than
        the incoming element insert new element at that index. This happens by shifting the existing elements
        whose index is equal to or greater than index over one to the right and placing that new element at desired index.
        - JavaScript method `splice(startIndex, deleteCount, item)` can accomplish this
        */
        for(let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > item.priority) {
                this.items.splice(i, 0, item); // insert incoming element at index (which will move existing element at index one over to right as well as the remaining items in array)
                return;
            }
        }
        // new item can be added to end of queue
        this.items.push(item);
    }
    deQueue = () => {
        return this.items.shift();
    }
    firstItem = () => {
        return this.items[0];
    }
    isEmpty = () => {
        return this.items.length == 0;
    }
    clear = () => {
        this.items = [];
    }
    size = () => {
        return this.items.length;
    }
    print = () => {
        console.log(this.items);
    }
}

const queue =  new PriorityQueue();
queue.enQueue(5, 1);
queue.enQueue(6, 3);
queue.enQueue(2, 2);
queue.enQueue(4, 4);
queue.print();