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
    } else if (node.value > data) {
      // check if value is less
      if (node.left === null) {
        // if left child is empty, create a new node
        node.left = new Node(data);
      } else {
        // if left child is not empty, recursive call add on left child
        this.add(data, node.left);
      }
    } else if (node.value < data) {
      // check if value is more
      if (node.right === null) {
        // if right child is empty, create a new node
        node.right = new Node(data);
      } else {
        // if right child is not empty, recursive call add on right child
        this.add(data, node.right);
      }
    } else {
      // value is equal, do nothing
      return;
    }
  }

  show() {
    return this.root;
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      // check left subtree, until it finds the left most leaf
      current = current.left;
    }
    return current.value;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      // check right subtree, until it finds the right most leaf
      current = current.right;
    }
    return current.value;
  }

  inOrder(node) {
    let arr = [];
    if (node !== null) {
      arr = arr.concat(this.inOrder(node.left));
      arr.push(node.value);
      arr = arr.concat(this.inOrder(node.right));
    }
    return arr;
  }

  preOrder(node) {
    let arr = [];
    if (node !== null) {
      arr.push(node.value);
      arr = arr.concat(this.preOrder(node.left));
      arr = arr.concat(this.preOrder(node.right));
    }
    return arr;
  }

  postOrder(node) {
    let arr = [];
    if (node !== null) {
      arr = arr.concat(this.postOrder(node.left));
      arr = arr.concat(this.postOrder(node.right));
      arr.push(node.value);
    }
    return arr;
  }

  giveInorder() {
    const node = this.root;
    return this.inOrder(node);
  }

  givePreorder() {
    const node = this.root;
    return this.preOrder(node);
  }

  givePostorder() {
    const node = this.root;
    return this.postOrder(node);
  }

  search(data, node = this.root) {
    if (data === null) {
      return null;
    } else if (node === null) {
      return null;
    } else if (data === node.value) {
      return node.value;
    } else if (data < node.value) {
      return this.search(data, node.left);
    } else if (data > node.value) {
      return this.search(data, node.right);
    }
  }
}

module.exports = BST;
