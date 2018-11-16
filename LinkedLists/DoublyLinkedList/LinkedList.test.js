const LinkedList = require("./LinkedList");

describe("Doubly Linked List", () => {
  it("should create empty linked list", () => {
    const list = new LinkedList();
    expect(list).toEqual({ head: null, tail: null, length: 0 });
  });

  it("should add element in list", () => {
    const list = new LinkedList();
    list.push(2);
    expect(list).toEqual({
      head: { value: 2, next: null, prev: null },
      tail: { value: 2, next: null, prev: null },
      length: 1
    });
  });

  it("should add 2 elements in list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    expect(list).toMatchObject({
      head: { value: 2, prev: null, next: { value: 5, next: null } },
      tail: { value: 5, next: null, prev: { value: 2, prev: null } },
      length: 2
    });
  });

  it("should add 4 elements in list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);
    list.push(3);
    expect(list.length).toBe(4);
  });
});
