function mySet() {
  //the var collection will hold the set
  var collection = [];

  /**
   * Checks if the element el is in the set
   * @param {*} el
   * @returns the index of the element in the collection or -1 if it doesn't exist
   */
  this.has = function (el) {
    return collection.indexOf(el) !== -1;
  };

  /**
   * Returns the set
   * @returns all the values in the collection
   */
  this.values = function () {
    return collection;
  };

  /**
   * Adds an element to the set only if it's not in it already
   * @param {*} el the element to add
   * @returns true if the element was added, false otherwise
   */
  this.add = function (el) {
    if (!this.has(el)) {
      collection.push(el);
      return true;
    }
    return false;
  };

  /**
   * Removes the elemen el from the array if present
   * @param {*} el
   * @returns true if the elem was removed, false otherwise
   */
  this.remove = function (el) {
    if (!this.has(el)) return false;
    //find the index of the element to remove
    let index = collection.indexOf(el);
    //remove it with splice
    collection.splice(index, 1);
    return true;
  };

  this.size = function () {
    return collection.length;
  };
}
