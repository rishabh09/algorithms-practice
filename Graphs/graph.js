class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return "Vertex not present";
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return "Vertex not present";
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return "Vertex not present";
    while (this.adjacencyList[vertex].length) {
      const v = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];
  }
}

module.exports = Graph;
