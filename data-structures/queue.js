class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Add element to the end of the queue
   * @param {*} val
   */
  enqueue(val) {
    //create new node
    let newNode = new Node(val);
    //if queue empty
    if (size === 0) {
      //last and first will pont to the same new node
      this.first = newNode;
      this.last = newNode;
    } else {
      //the new node is gonna be the next after the current last
      this.last.next = newNode;
      //the current last becomes now newNode
      this.last = newNode;
    }
    return ++this.size;
  }

  /**
   * Remove element form the beginning of the queue
   */
  dequeue() {
    //empty queue
    if (!this.first) return null;
    //save the first el
    let temp = this.first;
    //if there is only one element, break the pointer
    if (this.first === this.last) this.last = null;
    //move the pointer to the head to its next el
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
