/**
 * Represents a node of the queue which is defined by a value and a priority
 */
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

/**
 * A priority queue implemented as min binary heap
 */
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /**
   * Prints to the console the array of nodes as a string
   * @returns the priority queue as a string
   */
  print() {
    return JSON.stringify(this.values);
  }

  /**
   * Swaps the elements at the specified indexes in the array
   * @param {*} arr the array containing the elements
   * @param {*} i index of the first element
   * @param {*} j index of the second element
   * @returns the swapped elements
   */
  swap(arr, i, j) {
    return ([arr[i], arr[j]] = [arr[j], arr[i]]);
  }
  /**
   * Rearranges the array to keep the min binary heap properties when
   * adding new element
   * @param {*} arr the array to rearrange
   * @param {*} index the index of the element that needs to be repositioned
   * @returns the rearranged array
   */
  bubbleUp(arr, index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0) {
      if (arr[index].priority >= arr[parentIndex].priority) break;
      this.swap(arr, index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return arr;
  }

  /**
   * Rearranges the array to keep the min binary heap properties when removing
   * element with max priority
   * @param {*} arr the binary heap values
   * @param {*} index the index of the element to reposition
   * @returns
   */
  sinkDown(arr, index) {
    let childIdx1 = 2 * index + 1;
    let childIdx2 = 2 * index + 2;

    while (childIdx1 < arr.length && childIdx2 < arr.length) {
      let maxChildIdx =
        arr[childIdx1].priority > arr[childIdx2].priority
          ? childIdx1
          : childIdx2;
      if (arr[index].priority < arr[maxChildIdx].priority) break;
      this.swap(arr, index, maxChildIdx);
      index = maxChildIdx;
      childIdx1 = 2 * index + 1;
      childIdx2 = 2 * index + 2;
    }
    return arr;
  }

  /**
   * Adds a new node to the priority queue, according to the
   * min binary heap properties
   * @param {*} value the value of the new node
   * @param {*} priority the priority of the new node
   * @returns the updated priority queue's array of values
   */
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.values = this.bubbleUp(this.values, this.values.length - 1);
    return this.values;
  }

  /**
   * Removes the element with max priority (the root)
   * @returns the removed node
   */
  dequeue() {
    if (this.values.length < 1) return null;
    this.swap(this.values, 0, this.values.length - 1);
    let removed = this.values.pop();
    this.values = this.sinkDown(this.values, 0);
    return removed;
  }
}
