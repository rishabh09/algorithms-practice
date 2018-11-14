const LinkedList = require("./LinkedList");

describe("Singly Linked List", () => {
  it("should create empty linked list", () => {
    const list = new LinkedList();
    expect(list).toEqual({ head: null, tail: null, length: 0 });
  });

  it("should add element in list", () => {
    const list = new LinkedList();
    list.push(2);
    expect(list).toEqual({ head: { value: 2, next: null }, tail: { value: 2, next: null }, length: 1 });
  });

  it("should add 2 elements in list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    expect(list).toEqual({
      head: { value: 2, next: { value: 5, next: null } },
      tail: { value: 5, next: null },
      length: 2
    });
  });

  it("should add 4 elements in list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);
    list.push(3);
    expect(list).toEqual({
      head: { value: 2, next: { value: 5, next: { value: 0, next: { value: 3, next: null } } } },
      tail: { value: 3, next: null },
      length: 4
    });
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
    list.push(0);
    list.push(3);

    expect(list.pop()).toBe(3);
    expect(list).toEqual({
      head: { value: 2, next: { value: 5, next: { value: 0, next: null } } },
      tail: { value: 0, next: null },
      length: 3
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
    expect(list).toEqual({
      head: { value: 5, next: { value: 0, next: { value: 3, next: null } } },
      tail: { value: 3, next: null },
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

  it("should unshif element in list", () => {
    const list = new LinkedList();
    list.unshift(2);
    expect(list).toEqual({ head: { value: 2, next: null }, tail: { value: 2, next: null }, length: 1 });
  });

  it("should add 2 elements in list", () => {
    const list = new LinkedList();
    list.push(2);
    list.unshift(5);
    expect(list).toEqual({
      head: { value: 5, next: { value: 2, next: null } },
      tail: { value: 2, next: null },
      length: 2
    });
  });

  it("should add 4 elements in list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);
    list.unshift(3);
    expect(list).toEqual({
      head: { value: 3, next: { value: 2, next: { value: 5, next: { value: 0, next: null } } } },
      tail: { value: 0, next: null },
      length: 4
    });
  });
});
