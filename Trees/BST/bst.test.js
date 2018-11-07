const BST = require("./bst");

describe("Binary Search Tree", () => {
  it("should add element in tree", () => {
    const tree = new BST();
    tree.add(2);
    expect(tree.show()).toEqual({ left: null, right: null, value: 2 });
  });

  it("should not add element if value if same", () => {
    const tree = new BST();
    tree.add(2);
    tree.add(2);
    expect(tree.show()).toEqual({ left: null, right: null, value: 2 });
  });

  it("should add element in as left child of node", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(2);
    expect(tree.show()).toEqual({ left: { left: null, right: null, value: 2 }, right: null, value: 5 });
  });

  it("should add element in as right child of node", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(7);
    expect(tree.show()).toEqual({ left: null, right: { left: null, right: null, value: 7 }, value: 5 });
  });

  it("should add element in as both child of node", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(7);
    tree.add(4);
    expect(tree.show()).toEqual({
      left: { left: null, right: null, value: 4 },
      right: { left: null, right: null, value: 7 },
      value: 5
    });
  });

  it("should add element in as left child of right child node", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(7);
    tree.add(6);
    expect(tree.show()).toEqual({
      left: null,
      right: { left: { left: null, right: null, value: 6 }, right: null, value: 7 },
      value: 5
    });
  });

  it("should add element in as left child of left child node", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(4);
    tree.add(3);
    expect(tree.show()).toEqual({
      left: { left: { left: null, right: null, value: 3 }, right: null, value: 4 },
      right: null,
      value: 5
    });
  });

  it("should add element in as left child of left child node", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    tree.add(1);
    tree.add(8);
    tree.add(6);
    tree.add(10);
    tree.add(7);
    tree.add(9);

    expect(tree.show()).toEqual({
      left: {
        left: {
          left: {
            left: null,
            right: null,
            value: 1
          },
          right: null,
          value: 2
        },
        right: {
          left: null,
          right: null,
          value: 4
        },
        value: 3
      },
      right: {
        left: {
          left: null,
          right: {
            left: null,
            right: null,
            value: 7
          },
          value: 6
        },
        right: {
          left: {
            left: null,
            right: null,
            value: 9
          },
          right: null,
          value: 10
        },
        value: 8
      },
      value: 5
    });
  });

  it("should find the minimum value in tree", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    tree.add(1);
    tree.add(8);
    tree.add(6);
    tree.add(10);
    tree.add(7);
    tree.add(9);
    expect(tree.findMin()).toBe(1);
  });

  it("should find the maximum value in tree", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    tree.add(1);
    tree.add(8);
    tree.add(6);
    tree.add(10);
    tree.add(7);
    tree.add(9);
    expect(tree.findMax()).toBe(10);
  });

  it("should give inorder traversal", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    tree.add(1);
    tree.add(8);
    tree.add(6);
    tree.add(10);
    tree.add(7);
    tree.add(9);
    expect(tree.giveInorder()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should give preorder traversal", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    tree.add(1);
    tree.add(8);
    tree.add(6);
    tree.add(10);
    tree.add(7);
    tree.add(9);
    expect(tree.givePreorder()).toEqual([5, 3, 2, 1, 4, 8, 6, 7, 10, 9]);
  });

  it("should give postorder traversal", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    tree.add(1);
    tree.add(8);
    tree.add(6);
    tree.add(10);
    tree.add(7);
    tree.add(9);
    expect(tree.givePostorder()).toEqual([1, 2, 4, 3, 7, 6, 9, 10, 8, 5]);
  });

  it("should give search the element", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    tree.add(1);
    tree.add(8);
    tree.add(6);
    tree.add(10);
    tree.add(7);
    tree.add(9);
    expect(tree.search(null)).toBe(null);
    expect(tree.search(5)).toBe(5);
    expect(tree.search(3)).toBe(3);
    expect(tree.search(1)).toBe(1);
    expect(tree.search(8)).toBe(8);
    expect(tree.search(7)).toBe(7);
    expect(tree.search(12)).toBe(null);
  });

  it("should remove element from tree", () => {
    const tree = new BST();
    tree.add(5);
    tree.remove(5);
    expect(tree.show()).toEqual(null);
  });

  it("should remove element from tree without right child", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.remove(5);
    expect(tree.show()).toEqual({ left: null, right: null, value: 3 });
  });

  it("should remove element from tree without left child", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(7);
    tree.remove(5);
    expect(tree.show()).toEqual({ left: null, right: null, value: 7 });
  });

  it("should remove element from tree with children", () => {
    const tree = new BST();
    tree.add(5);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    tree.add(1);
    tree.remove(3);
    expect(tree.show()).toEqual({
      left: {
        left: { left: { left: null, right: null, value: 1 }, right: null, value: 2 },
        right: null,
        value: 4
      },
      right: null,
      value: 5
    });
  });
});
