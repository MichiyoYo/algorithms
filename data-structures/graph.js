class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }

  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
    return this.adjacencyList;
  }

  dijksrtra(start, end) {
    let priorityQ = new PriorityQueue();
    let previous = { ...this.adjacencyList };
    let distances = { ...this.adjacencyList };
    //initialize distances
    for (let vtx in distances) {
      distances[vtx] = Infinity;
    }
    distances[start] = 0;
    //initialize previous
    for (let vtx in previous) {
      previous[vtx] = null;
    }

    for (let vtx in distances) {
      if (distances[vtx] === Infinity) priorityQ.enqueue(vtx);
    }

    console.log(priorityQ);
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("E", "D", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("F", "E", 1);
