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
    //   expect(tree.show()).toEqual({
    //     left: {
    //       left: null,
    //       right: {
    //         left: {
    //           left: {
    //             left: null,
    //             right: null,
    //             value: 1
    //           },
    //           right: null,
    //           value: 2
    //         },
    //         right: null,
    //         value: 4
    //       },
    //       value: 3
    //     },
    //     right: {
    //       left: {
    //         left: null,
    //         right: {
    //           left: null,
    //           right: null,
    //           value: 7
    //         },
    //         value: 6
    //       },
    //       right: {
    //         left: {
    //           left: null,
    //           right: null,
    //           value: 9
    //         },
    //         right: null,
    //         value: 10
    //       },
    //       value: 8
    //     },
    //     value: 5
    //   });
  });
});
