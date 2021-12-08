class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  /**
   * Adds a new node to the list
   * @param {*} val the value of the node
   * @returns the updated list
   */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Removes the last node of the list
   * @returns the removed node
   */
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    let removedNode = prev.next;
    prev.next = null;
    this.tail = prev;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return removedNode;
  }

  /**
   * Removes an element from the head of the list
   * @returns the removed node
   */
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  /**
   * Adds a node to the beginning of the list
   * @returns the updated list
   */
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Retrieves a node in position index
   * @param {*} index the position of the node we want to get
   * @returns the node at that specified index
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currNode = this.head;
    let i = 0;
    while (currNode.next && i !== index) {
      i++;
      currNode = currNode.next;
    }
    return currNode;
  }
}
