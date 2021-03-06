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

  it("should unshif element in list", () => {
    const list = new LinkedList();
    list.unshift(2);
    expect(list).toMatchObject({
      head: { value: 2, next: null, prev: null },
      tail: { value: 2, next: null, prev: null },
      length: 1
    });
  });

  it("should add 2 elements in list", () => {
    const list = new LinkedList();
    list.push(2);
    list.unshift(5);
    expect(list).toMatchObject({
      head: { value: 5, prev: null, next: { value: 2, next: null } },
      tail: { value: 2, next: null, prev: { value: 5 } },
      length: 2
    });
  });

  it("should add 4 elements in list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);
    list.unshift(3);
    expect(list).toMatchObject({
      head: { value: 3, next: { value: 2, prev: { value: 3 }, next: { value: 5, next: { value: 0, next: null } } } },
      tail: { value: 0, next: null, prev: { value: 5 } },
      length: 4
    });
  });

  it("should return 2nd element of list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);
    expect(list.get(2)).toBe(0);
  });

  it("should return null if list if empty", () => {
    const list = new LinkedList();
    expect(list.get(2)).toBe(null);
  });

  it("should return null if index is equal or more than list length", () => {
    const list = new LinkedList();
    list.push(2);
    expect(list.get(1)).toBe(null);
  });

  it("should set new value to 2nd element of list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);
    expect(list.get(2)).toBe(0);
    list.set(2, 10);
    expect(list.get(2)).toBe(10);
  });

  it("should return null if insert index is less than 0", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);

    expect(list.insert(-1, 10)).toEqual(null);
  });

  it("should return null if insert index is greater than length", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);

    expect(list.insert(10, 10)).toEqual(null);
  });

  it("should insert item to start of list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);

    list.insert(0, 10);
    expect(list.get(0)).toBe(10);
  });

  it("should insert item to end of list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);

    list.insert(3, 10);
    expect(list.get(3)).toBe(10);
  });

  it("should insert item to middle of list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);

    list.insert(1, 10);
    expect(list.get(1)).toBe(10);
    expect(list.get(2)).toBe(5);
  });

  it("should return null if remove index is less than 0", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);

    expect(list.remove(-1)).toEqual(null);
  });

  it("should return null if remove index is greater than length", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);

    expect(list.remove(10, 10)).toEqual(null);
  });

  it("should remove item to start of list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);

    list.remove(0);
    expect(list.get(0)).toBe(5);
  });

  it("should remove item to end of list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);

    list.remove(2);
    expect(list.get(2)).toBe(null);
  });

  it("should insert item to middle of list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);

    list.remove(1);
    expect(list.get(1)).toBe(0);
  });
});
