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

  unshift(value) {
    const newItem = new Node(value);

    if (this.head === null) {
      this.head = newItem;
      this.tail = this.head;
    } else {
      const nextItem = this.head;
      this.head = newItem;
      this.head.next = nextItem;
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

  insert(index, value) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const newItem = new Node(value);
    const prevItem = this.getItem(index - 1);
    newItem.next = prevItem.next;
    prevItem.next = newItem;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.shift();
    if (index + 1 === this.length) return this.pop();
    const prevItem = this.getItem(index - 1);
    const currentItem = prevItem.next;
    prevItem.next = currentItem.next;
    this.length--;
  }
}

module.exports = LinkedList;
