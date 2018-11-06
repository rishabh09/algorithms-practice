class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data, node = this.root) {
    if (node === null) {
      this.root = new Node(data);
    } else if (node.value === data) {
      return;
    } else if (node.value > data) {
      if (node.left === null) {
        node.left = new Node(data);
      } else {
        this.add(data, node.left);
      }
    } else if (node.value < data) {
      if (node.right === null) {
        node.right = new Node(data);
      } else {
        this.add(data, node.right);
      }
    }
  }

  show() {
    return this.root;
  }
}

module.exports = BST;
