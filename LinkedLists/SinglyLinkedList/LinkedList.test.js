const LinkedList = require("./LinkedList");

describe("Singly Linked List", () => {
  it("should add element in list", () => {
    const list = new LinkedList();
    list.push(2);
    expect(list).toEqual({ head: { value: 2, next: null }, tail: { value: 2, next: null } });
  });

  it("should add 2 elements in list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    expect(list).toEqual({ head: { value: 2, next: { value: 5, next: null } }, tail: { value: 5, next: null } });
  });

  it("should add 4 elements in list", () => {
    const list = new LinkedList();
    list.push(2);
    list.push(5);
    list.push(0);
    list.push(3);
    expect(list).toEqual({
      head: { value: 2, next: { value: 5, next: { value: 0, next: { value: 3, next: null } } } },
      tail: { value: 3, next: null }
    });
  });
});
