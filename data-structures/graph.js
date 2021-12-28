class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    this.adjacencyList[val] = [];
  }
}

let graph = new Graph();
