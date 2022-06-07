import { number } from "yargs"

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
 * 题解：遍历2遍，第1遍将倒数的N转成正数的 length - n
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
 * 题解：找到倒数第 N + 1 个，然后将它的next指向next.next
 */
export function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head)
    const node = findNthFromEnd(dummy, n + 1)
    node.next = node.next?.next
    return dummy.next
}

/**
 * 返回链表的倒数第 n 个节点
 * 题解：双指针，第1个节点先走n，然后第2个节点开始走，第1个截止时，第2个刚好为length - n
 */
export function findNthFromEnd(head: ListNode, n: number) {
    let p1 = head;
    // p1 先走 n 步
    for (let i = 0; i < n; i++) {
        p1 = p1.next;
    }
    let p2 = head;
    // p1 和 p2 同时走 length - n 步
    while (p1 != null) {
        p2 = p2.next;
        p1 = p1.next;
    }
    // p2 现在指向第 length - n 个节点
    return p2;
}

/**
 * 21. 合并两个有序链表 Easy
 * 题解：
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
 * 23. 合并K个升序链表 Hard
 * 题解：使用优先队列
 */
export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {

};

/**
 * 141. 环形链表 Easy
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 * 题解：快慢指针：快的2个节点，慢的1个，相差1个，如果成环快的必定会追上慢的，与之相交。
 */
export function hasCycle(head: ListNode | null): boolean {

};

/**
 * 142. 环形链表 II Medium
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 题解：先用快慢指针，找到过环相交点；然后重置快指针到开始位置，设置每次走1步，此时重置指针到入环位置等于新的快慢指针相交位置。
 */
export function detectCycle(head: ListNode | null): ListNode | null {

};

/**
 * 160. 相交链表 Easy
 * 题解：1. 哈希表的方法 2. 双指针，核心点在于重置位置，每个链表循环加上另一个链表，凑成相交点移动距离相等
 */
export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

};

/**
 * 876. 链表的中间结点 Easy
 * 题解：使用快慢指针，快的next.next当作终止条件，慢的则是中间节点
 */
export function middleNode(head: ListNode | null): ListNode | null {

};

/**
 * 146. LRU 缓存
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 * 题解：使用TS的map数据结构，实际生产中使用
 */
export class LRUCache1 {
    private capacity: number
    private cache: Map<number, number>
    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map()
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const temp = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, temp)
            return temp
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size >= this.capacity) {
            // 第一个是最久未使用节点
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }
        // set时会设置为最后一个节点
        this.cache.set(key, value)
    }
}

/**
 * 146. LRU 缓存
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 * 题解：哈希表 + 双向链表实现
 */

class DoublyNode {
    public key: number
    public value: number
    public next: DoublyNode | null
    public prev: DoublyNode | null
    constructor(key: number, value: number) {
        this.key = key
        this.value = value
    }
}

export class LRUCache {
    // 存放key对于在valueMap中的索引
    private keyMap: Record<number, DoublyNode> = {}
    private head: DoublyNode // 头节点标记
    private tail: DoublyNode // 尾结点标记
    private size: number = 0 // 当前节点数
    constructor(private capacity: number = 0) {
        this.head = new DoublyNode(0, 0)
        this.tail = new DoublyNode(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    get(key: number): number {
        const node = this.keyMap[key]
        if (node !== undefined) {
            this.moveToHead(node)
            return node.value
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        const node = this.keyMap[key]
        if (node) {
            node.value = value
            this.moveToHead(node)
        } else {
            const newNode = new DoublyNode(key, value)
            this.keyMap[key] = newNode
            if (this.capacity <= this.size) {
                const oldNode = this.deleteTail()
                delete this.keyMap[oldNode.key]
                this.size--
            }
            this.size++
            this.insertHead(newNode)
        }
    }

    // 移动最新节点为头节点
    private moveToHead(node: DoublyNode) {
        this.deleteNode(node)
        this.insertHead(node)
    }

    // 插入一个结点到头部
    private insertHead(node: DoublyNode) {
        node.next = this.head.next
        node.prev = this.head
        this.head.next.prev = node
        this.head.next = node
    }

    // 移除一个结点
    private deleteNode(node: DoublyNode) {
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    // 移除尾节点
    private deleteTail(): DoublyNode {
        const node = this.tail.prev
        this.deleteNode(node)
        return node
    }
}

/**
 * 24. 两两交换链表中的节点
 * 题解：1. 直接遍历，哑节点，交换时的顺序
 */
 function swapPairs1(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0, head)
    let p = dummy
    while (p.next !== null && p.next.next !== null) {
        const node1 = p.next
        const node2 = p.next.next
        p.next = node2
        node1.next = node2.next
        node2.next = node1
        p = node1
    }
    return dummy.next
};

/**
 * 24. 两两交换链表中的节点
 * 题解：2. 递归，将问题分治成前一个节点和后一个链表的第一个节点
 */
 function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head
    }
    var one = head
    var two = one.next
    var three = two.next

    two.next = one
    one.next = swapPairs(three)

    return two
};