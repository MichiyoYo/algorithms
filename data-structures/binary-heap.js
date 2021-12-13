class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * Adds a new element to the binary heap. The new value bubbles up to the right place
   * by following the rule of a Max Binary Heap: parents are larger than children
   * @param {*} val the value of the new node
   * @returns the updated heap
   */
  insert(val) {
    const swap = (arr, i, j) => {
      return ([arr[i], arr[j]] = [arr[j], arr[i]]);
    };

    this.values.push(val);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && this.values[parentIndex] < this.values[index]) {
      swap(this.values, index, parentIndex);
      index = parentIndex;
    }

    return this;
  }
}
