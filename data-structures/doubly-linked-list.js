class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * Adds a new node at the end of the list
   * @param {*} val the value of the new node
   * @returns the updated list
   */
  push(val) {
    //make new node
    let newNode = new Node(val);
    //assign head and/or tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //assign pointers
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    //increase length
    this.length++;
    //return
    return this;
  }

  /**
   * It removes the last element of the list
   * @returns the popped node
   */
  pop() {
    if (!this.head) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }

  /**
   * Prints out the values in the list as an array
   */
  print() {
    let arr = [];
    let curr = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push(curr.value);
      curr = curr.next;
    }
    console.log(arr);
  }

  /**
   * Removes the first node of the list
   * @returns the removed node
   */
  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let removedNode = this.head;
      this.head = removedNode.next;
      removedNode.next = null;
      this.head.prev = null;
    }
    this.length--;
    return removedNode;
  }

  /**
   * Adds a new node at the beginning of the list
   * @param {*} val the value of the node to add
   * @returns the updated list
   */
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
      oldHead.prev = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Retrives the value of the node at the specified index
   * @param {*} index the index of the node to get
   * @returns the node at the specified index
   */
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let mid = Math.floor(this.length / 2) - 1;
    let currentNode = null;
    if (index <= mid) {
      //start from right
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    } else {
      //start from left
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }

  /**
   * Sets the node value at the specified index
   * @param {*} index the index of the node
   * @param {*} val the new value
   * @returns true if successful, false otherwise
   */
  set(index, val) {
    if (index < 0 || index >= this.length) return false;
    let toUpdate = this.get(index);
    if (toUpdate) {
      toUpdate.value = val;
      return true;
    }
    return false;
  }
}
