class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  print() {
    return JSON.stringify(this.values);
  }

  swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

  bubbleUp(arr, index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0) {
      if (arr[index].priority >= arr[parentIndex].priority) break;
      this.swap(arr, index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return arr;
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.values = this.bubbleUp(this.values, this.values.length - 1);
    return this.values;
  }
}

let pq = new PriorityQueue();
pq.enqueue("cre", 3);
pq.enqueue("meh", 7);
pq.enqueue("seh", 10);
pq.enqueue("joe", 15);
pq.enqueue("moch", 30);
pq.enqueue("belly", 28);
