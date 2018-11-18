class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(elem) {
    this.values.push(elem);
    this.bubbleUp(elem);
  }

  bubbleUp(elem) {
    let index = this.values.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];
      if (elem > parent) {
        this.values[index] = parent;
        this.values[parentIndex] = elem;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
}

module.exports = MaxBinaryHeap;
