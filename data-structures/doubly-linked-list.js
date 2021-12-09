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
}
