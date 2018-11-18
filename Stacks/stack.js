class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newItem = new Node(value);

    if (this.first === null) {
      this.first = newItem;
      this.last = newItem;
    } else {
      const nextItem = this.first;
      this.first = newItem;
      this.first.next = nextItem;
    }

    this.size++;
  }

  pop() {
    if (this.size > 0) {
      let currentItem = this.first;

      this.first = currentItem.next;

      if (this.size === 1) {
        this.last = this.first;
      }
      this.size--;

      return currentItem.value;
    } else {
      return null;
    }
  }
}

module.exports = Stack;
