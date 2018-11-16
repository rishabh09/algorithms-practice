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

  it("should give null if no element is present", () => {
    const list = new LinkedList();
    expect(list.pop()).toBe(null);
    expect(list).toEqual({ head: null, length: 0, tail: null });
  });

  it("should pop item from the list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(3);

    expect(list.pop()).toBe(3);
    expect(list).toMatchObject({
      head: { value: 2, next: { value: 5, prev: { value: 2 } } },
      tail: { value: 5, next: null, prev: { value: 2 } },
      length: 2
    });
  });

  it("should pop item from the list if one element is present", () => {
    const list = new LinkedList();
    list.push(2);

    expect(list.pop()).toBe(2);
    expect(list).toEqual({
      head: null,
      tail: null,
      length: 0
    });
  });

  it("should give null if no element is present", () => {
    const list = new LinkedList();
    expect(list.shift()).toBe(null);
    expect(list).toEqual({ head: null, length: 0, tail: null });
  });

  it("should remove item from the begining of the list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);
    list.push(3);

    expect(list.shift()).toBe(2);
    expect(list).toMatchObject({
      head: { value: 5, prev: null, next: { value: 0, next: { value: 3, next: null } } },
      tail: { value: 3, next: null, prev: { value: 0 } },
      length: 3
    });
  });

  it("should remove item from the list if one element is present", () => {
    const list = new LinkedList();
    list.push(2);
    expect(list.shift()).toBe(2);
    expect(list).toEqual({
      head: null,
      tail: null,
      length: 0
    });
  });
});
