export class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
    public toString(): Array<number> {
        const arr: Array<number>  = []
        traverse(this, (value) => arr.push(value))
        return arr
    }
}

export function createList(root: ListNode, arr: ListNode[]): void {
    arr.reduce(((pre, cur) => pre.next = cur), root)
}

export function traverse(list: ListNode, callback: (value: number) => void): void {
    while (list) {
        callback(list.value);
        list = list.next
    }
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let length = 0;
    const dummy = new ListNode(0, head);
    let cur = dummy
    traverse(head, () => length++)
    for (let i = 1; i < length - n + 1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next ? cur.next.next : new ListNode(0, null);
    return dummy.next;
}; 
