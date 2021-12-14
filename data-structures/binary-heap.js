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
   * It bubbles up the last inserted element if necessary
   */
  bubbleUp = () => {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (this.values[idx] <= parent) break;
      this.swap(this.values, parentIdx, idx);
      idx = parentIdx;
    }
  };

  /**
   * Adds a new element to the binary heap. The new value bubbles up to the right place
   * by following the rule of a Max Binary Heap: parents are larger than children
   * @param {*} val the value of the new node
   * @returns the updated heap
   */
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
}

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
