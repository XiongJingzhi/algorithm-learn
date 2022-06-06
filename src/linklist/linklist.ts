export class ListNode {
    val: number
    next: ListNode | null
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val
        this.next = next
    }
    public toString(): Array<number> {
        const arr: Array<number> = []
        traverse(this, (val) => arr.push(val))
        return arr
    }
}

export function createList(root: ListNode, arr: ListNode[]): ListNode {
    arr.reduce(((pre, cur) => pre.next = cur), root)
    return root
}

export function traverse(list: ListNode, callback: (val: number) => void): void {
    while (list) {
        callback(list.val)
        list = list.next
    }
}

/**
 * 19. 删除链表的倒数第 N 个结点 Medium
 * 遍历2遍
 */
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let length = 0
    const dummy = new ListNode(0, head)
    let cur = dummy
    traverse(head, () => length++)
    for (let i = 1; i < length - n + 1; i++) {
        cur = cur.next
    }
    cur.next = cur.next ? cur.next.next : new ListNode(0, null)
    return dummy.next
}

/**
 * 19. 删除链表的倒数第 N 个结点 Medium
 * 找到倒数第 N + 1 个，然后将它的next指向next.next
 */
export function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head)
    const node = findNthFromEnd(dummy, n + 1)
    node.next = node.next?.next
    return dummy.next
}

/**
 * 返回链表的倒数第 k 个节点
 */
export function findNthFromEnd(head: ListNode, k: number) {
    let p1 = head;
    // p1 先走 k 步
    for (let i = 0; i < k; i++) {
        p1 = p1.next;
    }
    let p2 = head;
    // p1 和 p2 同时走 n - k 步
    while (p1 != null) {
        p2 = p2.next;
        p1 = p1.next;
    }
    // p2 现在指向第 n - k 个节点
    return p2;
}

/**
 * 21. 合并两个有序链表 Easy
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode()
    let p = dummy
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            p.next = list1
            list1 = list1.next
        } else {
            p.next = list2
            list2 = list2.next
        }
        p = p.next
    }

    if (list1 !== null) {
        p.next = list1
    }

    if (list2 !== null) {
        p.next = list2
    }

    return dummy.next
}

/**
 * 23. 合并K个升序链表
 * @param lists 
 * 使用优先队列
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

};