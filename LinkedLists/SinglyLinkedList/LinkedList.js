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
    if (this.length > 0) {
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
      return currentItem.value;
    } else {
      return null;
    }
  }

  shift() {
    if (this.length > 0) {
      let currentItem = this.head;

      this.head = currentItem.next;

      if (this.length === 1) {
        this.tail = this.head;
      }
      this.length--;

      return currentItem.value;
    } else {
      return null;
    }
  }
}

module.exports = LinkedList;
