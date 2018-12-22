const Graph = require("./graph");

describe("Graph", () => {
  it("should create graph with empty adjacency list", () => {
    const graph = new Graph();
    expect(graph.adjacencyList).toEqual({});
  });

  it("should add vertex to graph", () => {
    const graph = new Graph();
    graph.addVertex("a");
    expect(graph.adjacencyList).toEqual({ a: [] });
  });

  it("should add edge to graph", () => {
    const graph = new Graph();
    graph.addVertex("a");
    graph.addVertex("b");
    graph.addEdge("a", "b");
    expect(graph.adjacencyList).toEqual({ a: ["b"], b: ["a"] });
  });

  it("should not add vertex to graph if vertext already present", () => {
    const graph = new Graph();
    graph.addVertex("a");
    graph.addVertex("b");
    graph.addEdge("a", "b");
    graph.addVertex("a");
    expect(graph.adjacencyList).not.toEqual({ a: [], b: ["a"] });
  });

  it("should give error if vertex not present", () => {
    const graph = new Graph();
    graph.addVertex("b");
    expect(graph.addEdge("a", "b")).toBe("Vertex not present");
  });

  it("should remove edge from the graph", () => {
    const graph = new Graph();
    graph.addVertex("a");
    graph.addVertex("b");
    graph.addEdge("a", "b");
    graph.removeEdge("a", "b");
    expect(graph.adjacencyList).toEqual({ a: [], b: [] });
  });

  it("should give error if vertex is not present", () => {
    const graph = new Graph();
    graph.addVertex("a");
    expect(graph.removeEdge("a", "b")).toBe("Vertex not present");
  });

  it("should remove vertex from the graph", () => {
    const graph = new Graph();
    graph.addVertex("a");
    graph.addVertex("b");
    graph.addVertex("c");
    graph.addVertex("d");
    graph.addEdge("a", "b");
    graph.addEdge("a", "c");
    graph.addEdge("a", "d");
    graph.addEdge("b", "c");
    graph.addEdge("b", "d");
    graph.removeVertex("a");
    expect(graph.adjacencyList).toEqual({ b: ["c", "d"], c: ["b"], d: ["b"] });
  });
});
