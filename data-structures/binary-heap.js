class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * Swaps two elements of an array
   * @param {*} arr the array
   * @param {*} i the index of the firts element
   * @param {*} j the index of the second element
   * @returns the swapped elements
   */
  swap = (arr, i, j) => {
    return ([arr[i], arr[j]] = [arr[j], arr[i]]);
  };

  /**
   * Console logs the array of values
   */
  traverse() {
    console.log(this.values);
  }

  /**
   * Positions the element at the specified index in the right spot
   * @param {*} arr the array to reorganize
   * @param {*} index the index of the element to position
   * @returns the reorganized array
   */
  bubbleUp(arr, index) {
    let parentIndex = 0;
    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      if (arr[index] <= arr[parentIndex]) break;
      this.swap(arr, index, parentIndex);
      index = parentIndex;
    }
    return arr;
  }

  /**
   * Adds a new element to the binary heap. The new value bubbles up to the right place
   * by following the rule of a Max Binary Heap: parents are larger than children
   * @param {*} val the value of the new node
   * @returns the updated heap
   */
  insert(val) {
    this.values.push(val);
    if (this.values.length > 1) {
      this.values = this.bubbleUp(this.values, this.values.length - 1);
    }
    return this.values;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
      }
    }
  }

  removeMax() {
    //swap first and last element so the root to remove is now at the end of the array
    this.swap(this.values, 0, this.values.length - 1);
    //remove the old max from the end of the array
    let removedNode = this.values.pop();

    //reorganize heap
    this.sinkDown();
    //return the removed node
    return removedNode;
  }
}

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);

heap.traverse();
heap.insert(55);
heap.traverse();
heap.insert(150);
heap.traverse();

// heap.removeMax();
// heap.traverse();
