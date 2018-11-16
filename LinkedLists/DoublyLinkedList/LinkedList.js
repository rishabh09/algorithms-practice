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

  shift() {
    if (this.length > 0) {
      let currentItem = this.head;

      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = currentItem.next;
        this.head.prev = null;
      }
      this.length--;
      return currentItem.value;
    } else {
      return null;
    }
  }

  unshift(value) {
    const newItem = new Node(value);

    if (this.head === null) {
      this.head = newItem;
      this.tail = this.head;
    } else {
      const nextItem = this.head;
      this.head = newItem;
      this.head.next = nextItem;
      nextItem.prev = this.head;
    }

    this.length++;
  }

  getItem(index) {
    if (this.length <= 0 || index >= this.length) return null;
    let counter = 0;
    let currentItem = this.head;
    while (counter < index) {
      currentItem = currentItem.next;
      counter++;
    }
    return currentItem;
  }

  get(index) {
    const item = this.getItem(index);
    return item ? item.value : item;
  }

  set(index, value) {
    const item = this.getItem(index);
    if (item) {
      item.value = value;
    }
  }
}

module.exports = LinkedList;
