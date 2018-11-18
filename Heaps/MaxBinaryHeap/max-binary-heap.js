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

  deleteMax() {
    const lastElm = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = lastElm;
      this.bubbleDown(lastElm);
    }
  }

  bubbleDown(elem) {
    let index = 0;
    const length = this.values.length;

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild;
      let rightChild;
      let swapIndex = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > elem) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((!swapIndex && rightChild > elem) || (swapIndex && rightChild > leftChild)) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex) {
        this.values[index] = this.values[swapIndex];
        this.values[swapIndex] = elem;
        index = swapIndex;
      } else {
        break;
      }
    }
  }
}

module.exports = MaxBinaryHeap;
