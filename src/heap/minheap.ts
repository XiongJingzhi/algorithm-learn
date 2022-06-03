export default class MinHeap<T> {
    heap: T[];

    constructor() {
        this.heap = [] as T[];
    }
    
    private swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private parent(i: number): T {
        return this.heap[i >> 1];
    }

    private left(i: number) {
        return this.heap[i << 1 + 1];
    }

    private right(i: number) {
        return this.heap[i << 1 + 2]
    }

    public insert(value: T): void {

    }

    public swim() {
  
    }

    public sink() {

    }

    public pop() {

    }

    public peek() {

    }

    public size() {

    }
}