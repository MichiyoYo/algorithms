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

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
    return visited;
  }

  /**
   * Visits the tree with DFS Pre Order approach
   * @returns an array containing the visited nodes
   */
  dfsPreOrder() {
    let visited = [];

    const traversePreOrder = (node) => {
      visited.push(node.value);
      if (node.left) traversePreOrder(node.left);
      if (node.right) traversePreOrder(node.right);
    };

    traversePreOrder(this.root);
    return visited;
  }

  /**
   * Visits the tree with DFS Post Order approach
   * @returns the array of visited nodes
   */
  dfsPostOrder() {
    let visited = [];

    const traversePostOrder = (node) => {
      if (node.left) traversePostOrder(node.left);
      if (node.right) traversePostOrder(node.right);
      visited.push(node.value);
    };

    traversePostOrder(this.root);
    return visited;
  }

  /**
   * Visits the tree with DFS In Order approach
   * @returns the array of visited nodes
   */
  dfsInOrder() {
    let visited = [];
    const traverseInOrder = (node) => {
      if (node.left) traverseInOrder(node.left);
      visited.push(node.value);
      if (node.right) traverseInOrder(node.right);
    };
    traverseInOrder(this.root);
    return visited;
  }
}

let tree = new Tree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
console.log(tree.dfsInOrder());
