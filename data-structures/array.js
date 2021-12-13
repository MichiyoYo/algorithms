class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Adds an element to the end of the array
   * @param {} element
   * @returns the updated array
   */
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.data;
  }

  /**
   * Removes an element from the end of the array
   * @returns the updated array
   */
  pop() {
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  /**
   * Adds the item in the index position
   * @param {*} item
   * @param {*} index
   * @returns the updated array
   */
  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }

  /**
   * Removes an item at the position index
   * @param {*} index
   * @returns the updated array
   */
  deleteAt(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  /**
   * Access an element in the position index
   * @param {*} index
   * @returns the element in position index
   */
  getElementAt(index) {
    return this.data[index];
  }
}
