class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    };
    enQueue = (element, priority) => {
        let item = new QueueElement(element, priority);

        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i].priority > item.priority) {
                this.items.splice(i, 0, item);
                return;
            }
        }
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