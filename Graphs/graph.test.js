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
});
