function Stack() {
  //keeps track of the number of elements in the stack
  this.count = 0;
  //keeps track of the data
  this.storage = {};

  /**
   * Add the element at the end of the stack
   * @param {*} el
   */
  this.push = (el) => {
    this.storage[this.count] = el;
    this.count++;
  };

  /**
   * Removes and returns the element at the end of the stack
   */
  this.pop = () => {
    if (this.count === 0) return undefined;
    let item = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return item;
  };

  /**
   * Returns the size of the stack
   * @returns the size of the stack
   */
  this.size = () => {
    return this.count;
  };

  /**
   * Returns the last element in the stack
   * @returns the element at the end of the stack
   */
  this.peek = () => {
    return this.storage[this.count - 1];
  };
}
