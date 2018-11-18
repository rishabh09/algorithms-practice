const MaxBinaryHeap = require("./max-binary-heap");

describe("Max Binary Heap", () => {
  it("should create heap with empty values", () => {
    const heap = new MaxBinaryHeap();
    expect(heap.values).toEqual([]);
  });

  it("should add element in the values", () => {
    const heap = new MaxBinaryHeap();
    heap.insert(10);
    expect(heap.values).toEqual([10]);
  });

  it("should add min element at the end", () => {
    const heap = new MaxBinaryHeap();
    heap.insert(10);
    heap.insert(8);
    heap.insert(7);
    expect(heap.values).toEqual([10, 8, 7]);
  });

  it("1 should add max value in correct position", () => {
    const heap = new MaxBinaryHeap();
    heap.insert(10);
    heap.insert(8);
    heap.insert(7);
    heap.insert(9);
    expect(heap.values).toEqual([10, 9, 7, 8]);
  });

  it("2 should add max value in correct position", () => {
    const heap = new MaxBinaryHeap();
    heap.insert(10);
    heap.insert(8);
    heap.insert(7);
    heap.insert(9);
    heap.insert(20);
    expect(heap.values).toEqual([20, 10, 7, 8, 9]);
  });
});
