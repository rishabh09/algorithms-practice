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
  }
}

module.exports = LinkedList;
