
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let result: ListNode = new ListNode((l1!.val + l2!.val) % 10);
    let carry = Math.floor((l1!.val + l2!.val) / 10);
    let cur1 = l1!.next, cur2 = l2!.next, curR = result;
    while(!(cur1 === null && cur2 === null)) {
        let sum = (cur1 ? cur1.val : 0) + (cur2 ? cur2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        curR.next = new ListNode(sum % 10);
        curR = curR.next;
        if(cur1)
            cur1 = cur1.next;
        if(cur2)
            cur2 = cur2.next;   
    }
    if(carry !== 0)
        curR.next = new ListNode(carry);
    return result;
};
