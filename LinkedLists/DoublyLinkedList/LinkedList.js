// push
// pop
// shift
// unshift
// get
// set
// insert
// remove
// reverse

class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
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
      newItem.prev = this.tail;
      this.tail.next = newItem;
      this.tail = newItem;
    }

    this.length++;
  }

  pop() {
    if (this.length > 0) {
      let currentItem = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.length--;
      return currentItem.value;
    } else {
      return null;
    }
  }
}

module.exports = LinkedList;
