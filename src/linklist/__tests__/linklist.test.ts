import { ListNode, traverse, createList, removeNthFromEnd } from "../linklist";
const myMock1 = jest.fn();

describe('linklist ListNode', () => {
    let linklist: ListNode = null;

    beforeEach(() => {
        linklist = new ListNode(1);
    })
    
    it('should create a new linklist', () => {
        expect(linklist).toBeDefined();
    });

    it('show traverse linklist', () => {
        linklist.next = new ListNode(2);
        traverse(linklist, myMock1);
        expect(myMock1).toBeCalledTimes(2);
    })

    it('removeNthFromEnd', () => {
        const l1 = removeNthFromEnd(linklist, 1)
        expect(l1).toEqual(null)
        const arr = [2, 3, 4, 5].map(item => new ListNode(item))
        createList(linklist, arr)
        const l2 = removeNthFromEnd(linklist, 2)
        expect(l2.toString()).toEqual([1,2,3,5])
    })
})