class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (newNode.value > current.value) {
          //continue on the right
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
        if (newNode.value < current.value) {
          //continue on the left
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
        if (newNode.value === current.value) return undefined;
      }
    }
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(7);
tree.insert(15);
