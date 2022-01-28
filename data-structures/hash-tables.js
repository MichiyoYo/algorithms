class HashTable {
  //we want the size of the array to be a prime number
  constructor(size = 53) {
    //the array were we will store the key-value pairs
    this.keyMap = new Array(size);
  }

  _hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }
}
