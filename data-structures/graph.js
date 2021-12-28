class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return this.adjacencyList;
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v != v1);

    return this.adjacencyList;
  }

  removeVertex(v) {
    if (!this.adjacencyList[v]) return undefined;
    while (this.adjacencyList[v].length > 0) {
      const adjVertex = this.adjacencyList[v].pop();
      this.removeEdge(v, adjVertex);
    }
    delete this.adjacencyList[v];
    return this.adjacencyList;
  }
}

let graph = new Graph();
