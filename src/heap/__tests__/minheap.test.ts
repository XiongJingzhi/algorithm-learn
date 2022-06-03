import MinHeap from "../minheap";

describe('minheap constructor', () => {
    let minheap: MinHeap<unknown> = null;

    beforeEach(() => {
        minheap = new MinHeap();
    })
    
    it('should create a new minheap', () => {
        expect(minheap).toBeDefined();
    });
})