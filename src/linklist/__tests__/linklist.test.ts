import { ListNode, traverse, createList, removeNthFromEnd, removeNthFromEnd1, mergeTwoLists, LRUCache } from "../linklist"
const myMock1 = jest.fn()

describe('linklist ListNode', () => {
    let linklist: ListNode = null

    beforeEach(() => {
        linklist = new ListNode(1)
    })
    
    it('should create a new linklist', () => {
        expect(linklist).toBeDefined()
    })

    it('show traverse linklist', () => {
        linklist.next = new ListNode(2)
        traverse(linklist, myMock1)
        expect(myMock1).toBeCalledTimes(2)
    })

    it('removeNthFromEnd', () => {
        const l1 = removeNthFromEnd(linklist, 1)
        expect(l1).toEqual(null)
        const arr = [2, 3, 4, 5].map(item => new ListNode(item))
        createList(linklist, arr)
        const l2 = removeNthFromEnd(linklist, 2)
        expect(l2.toString()).toEqual([1,2,3,5])
    })

    it('removeNthFromEnd1', () => {
        const l1 = removeNthFromEnd1(linklist, 1)
        expect(l1).toEqual(null)
        const arr = [2, 3, 4, 5].map(item => new ListNode(item))
        createList(linklist, arr)
        const l2 = removeNthFromEnd1(linklist, 2)
        expect(l2.toString()).toEqual([1,2,3,5])
    })

    it('mergeTwoLists', () => {
        const arr1 = [2,4].map(item => new ListNode(item))
        const arr2 = [3,4].map(item => new ListNode(item))
        const l1 = createList(new ListNode(1), arr1)
        const l2 = createList(new ListNode(1), arr2)
        expect(mergeTwoLists(l1, l2).toString()).toEqual([1,1,2,3,4,4])
    })

    it('LRUCache', () => {
        const lRUCache = new LRUCache(2)
        lRUCache.put(2, 1) 
        lRUCache.put(1, 1)
        lRUCache.put(2, 3)
        lRUCache.put(4, 1)
        expect(lRUCache.get(1)).toBe(-1)
        expect(lRUCache.get(2)).toBe(3)
    })
})