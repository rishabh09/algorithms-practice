const Stack = require("./stack");

describe("Stack", () => {
  it("should create empty stack", () => {
    const stack = new Stack();
    expect(stack).toEqual({ first: null, last: null, size: 0 });
  });

  it("should add element in stack", () => {
    const stack = new Stack();
    stack.push(2);
    expect(stack).toEqual({
      first: { value: 2, next: null },
      last: { value: 2, next: null },
      size: 1
    });
  });

  it("should make last value as first", () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(5);
    expect(stack).toEqual({
      first: { value: 5, next: { value: 2, next: null } },
      last: { value: 2, next: null },
      size: 2
    });
  });

  it("should add 4 elements in stack", () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(5);
    stack.push(0);
    stack.push(3);
    expect(stack.size).toBe(4);
  });

  it("should give null if no element is present", () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(null);
  });

  it("should pop last item from the stack", () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(5);
    stack.push(0);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.size).toBe(3);
  });

  it("should pop item from the stack if one element is present", () => {
    const stack = new Stack();
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack).toEqual({
      first: null,
      last: null,
      size: 0
    });
  });
});
