const removeNthNodeFromEnd = require('../algorithms/removeNthNodeFromEndOfList'); 

function ListNode(val, next) {
    this.val = val;
    this.next =  next;
}

let linkedList = new ListNode(1, new ListNode(2, null)); 
const linkedListCase1 = new ListNode(1, null); 

let linkedList2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null)))); 
const linkedListCase2 = new ListNode(1, new ListNode(2, new ListNode(4, null))); 

describe('it removes nth node from end', ()=> {
    it('removes the last node from the list when list has two nodes and n = 1', () => {
        expect(removeNthNodeFromEnd(linkedList, 1)).toEqual(linkedListCase1); 
    }); 
    it('removes the second to last node from list when list has 4 nodes', () =>{
        expect(removeNthNodeFromEnd(linkedList2, 2)).toEqual(linkedListCase2); 
    });
});