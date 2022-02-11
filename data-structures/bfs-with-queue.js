class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(newNode) {
    let newQueueNode = new QueueNode(newNode);
    if (!this.size) {
      this.first = newQueueNode;
      this.last = newQueueNode;
    } else {
      this.last.next = newQueueNode;
      this.last = newQueueNode;
    }

    this.size++;
    return this;
  }

  dequeue() {
    if (!this.size) return null;
    const removed = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    removed.next = null;
    this.size--;
    return removed;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  addNode(val) {
    let newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let curr = this.root;
      while (curr) {
        if (val < curr.val) {
          if (!curr.left) {
            curr.left = newNode;
            break;
          } else {
            curr = curr.left;
          }
        }
        if (val > curr.val) {
          if (!curr.right) {
            curr.right = newNode;
            break;
          } else {
            curr = curr.right;
          }
        }
      }
    }
    return this;
  }

  bfs() {
    let queue = new Queue();
    let visited = [];

    if (!this.root) return null;

    queue.enqueue(this.root);

    while (queue.size) {
      let next = queue.dequeue().val; //the Node
      visited.push(next.val);
      if (next.left) queue.enqueue(next.left);
      if (next.right) queue.enqueue(next.right);
    }

    return visited;
  }
}

let t = new Tree();
t.addNode(10);
t.addNode(6);
t.addNode(8);
t.addNode(3);
t.addNode(15);
t.addNode(20);
