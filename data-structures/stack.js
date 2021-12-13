class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Adds a new node at the BEGINNING of the stack for constant time complexity
   * @param {*} val
   * @returns the size of the updated array
   */
  push(val) {
    //create new node
    let newNode = new Node(val);
    //empty stack?
    if (size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //non empty stack, then add  to the beginning
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  /**
   * Removes a node from the BEGINNING of the stack
   */
  pop() {
    if (size === 0) return null;

    let temp = this.first;

    if (size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.size--;
    return temp.value;
  }
}
