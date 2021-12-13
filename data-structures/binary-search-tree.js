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

  /**
   * Inserts a new node to the tree in the right position
   * @param {*} val the value of the new node
   * @returns the updated tree
   */
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

  /**
   * Searches for a value in the tree
   * @param {*} val the value to search for
   * @param {*} root the root of the tree
   * @returns true if the value is found, false otherwise
   */
  find(val, root) {
    if (!root) return false;
    if (val === root.value) return true;
    if (val < root.value) return this.find(val, root.left);
    if (val > root.value) return this.find(val, root.right);
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(7);
tree.insert(15);
