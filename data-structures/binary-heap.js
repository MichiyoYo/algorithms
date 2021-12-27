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

  /**
   * Repositions the element at the specified index in the array that
   * represents a max binary heap, in order to keep the BH properties
   * @param {*} arr the array of values in the binary heap
   * @param {*} index the index of the element to reposition
   */
  sinkDown(arr, index) {
    let childIdx1 = 2 * index + 1;
    let childIdx2 = 2 * index + 2;
    let maxChildIdx = arr[childIdx1] > arr[childIdx2] ? childIdx1 : childIdx2;
    while (childIdx1 < arr.length && childIdx2 < arr.length) {
      if (arr[maxChildIdx] <= arr[index]) break;
      this.swap(arr, index, maxChildIdx);
      index = maxChildIdx;
      childIdx1 = 2 * index + 1;
      childIdx2 = 2 * index + 2;
      maxChildIdx = arr[childIdx1] > arr[childIdx2] ? childIdx1 : childIdx2;
    }
  }

  /**
   * Removes the max element from the heap
   * @returns the removed element
   */
  removeMax() {
    if (this.values.length < 1) return null;
    this.swap(this.values, 0, this.values.length - 1);
    removedElem = this.values.pop();
    this.sinkDown(this.values, 0);
    return removedElem;
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

heap.removeMax();
// heap.traverse();
