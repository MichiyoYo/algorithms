class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a new node
   * @param {*} val the value of the new node
   * @returns the updated tree
   */
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currNode = this.root;
      while (true) {
        if (val === currNode) return undefined;
        if (val < currNode.value) {
          if (currNode.left === null) {
            currNode.left = newNode;
            return this;
          }
          currNode = currNode.left;
        }
        if (val > currNode.value) {
          if (currNode.right === null) {
            currNode.right = newNode;
            return this;
          }
          currNode = currNode.right;
        }
      }
    }
  }

  /**
   * Performs a Breadth First Search tree traversal
   * @returns the array of visited nodes
   */
  bfs() {
    let queue = [];
    let visited = [];

    let current;
    queue.push(this.root);
    while (queue.length > 0) {
      current = queue.shift();
      visited.push(current.value);

      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    return visited;
  }
}

let tree = new Tree();

tree.insert(10);
tree.insert(7);
tree.insert(15);
tree.insert(11);
tree.insert(16);
console.log(tree.bfs());
