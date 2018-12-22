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
});
