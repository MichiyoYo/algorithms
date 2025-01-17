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
   * Retrieves a node in position index or null if not found
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

  /**
   * Updates the value of the node at the index passed as first argument
   * @param {*} index the index of the node to update
   * @param {*} value the new value
   * @returns true if the node was updated, false if the node wasn't found
   */
  set(index, value) {
    let nodeToUpdate = this.get(index);
    if (nodeToUpdate) {
      nodeToUpdate.val = value;
      return true;
    }
    return false;
  }

  /**
   * Adds a node to the the list at the specified index
   * @param {*} index the index where the new node should go
   * @param {*} value the new value
   * @returns the added node
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    //if index is referring to the end of the list, add at the end
    if (index === this.length) return !!this.push(value);
    //if index is referring to the beginning of the list, add to the beginning
    if (index === 0) return !!this.unshift(value);

    //if index is not at the beginning or end
    const newNode = new Node(value);
    var prev = this.get(index - 1); //🔥
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  /**
   * Removed the node at the specified index
   * @param {*} index
   * @returns the removed node
   */
  remove(index) {
    if (index < 0 || index > this.length) return null;
    //remove from head
    if (index === 0) return this.shift();
    //remove from end
    if (index === this.length) return this.pop();

    var prev = this.get(index - 1);
    var removedNode = prev.next;
    prev.next = removedNode.next;

    this.length--;
    return removedNode;
  }

  /**
   * Prints the list as an array
   */
  print() {
    var arr = [];
    var curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }

  /**
   * Reverses a list
   * @returns the reversed list
   */
  reverse() {
    if (this.length === 0) return null;
    if (this.length === 1) return this;

    let currNode = this.head;
    this.head = this.tail;
    this.tail = currNode;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = currNode.next;
      currNode.next = prev;
      prev = currNode;
      currNode = next;
    }

    return this;
  }
}
