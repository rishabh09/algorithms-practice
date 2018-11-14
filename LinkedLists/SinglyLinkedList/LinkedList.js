class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newItem = new Node(value);

    if (this.head === null) {
      this.head = newItem;
      this.tail = this.head;
    } else {
      this.tail.next = newItem;
      this.tail = newItem;
    }

    this.length++;
  }

  pop() {
    let currentItem = this.head;
    let prevItem = currentItem;
    while (currentItem.next) {
      prevItem = currentItem;
      currentItem = currentItem.next;
    }
    this.tail = prevItem;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
}

module.exports = LinkedList;
