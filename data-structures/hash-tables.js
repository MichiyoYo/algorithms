/**
 * Hash Table data structure that handles the hash collision with separate chaining
 */

class HashTable {
  //we want the size of the array to be a prime number
  /**
   * Creates a hash table using an array
   * @param {Number} size : an prime number if not specified;
   */
  constructor(size = 53) {
    //the array were we will store the key-value pairs
    this.keyMap = new Array(size);
  }

  /**
   * Hash function which takes a key, finds its character code, adds it to a prime number(to limit the number
   * of collisions) and calculates the index where to store key-values pairs with % length of the array.
   * In this way the index will always be in-bound the array length.
   * @param {*} key the value to hash
   * @returns the index in the hashmap where the data with key "key" will be stored
   */
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  /**
   * Stores a key-value pair in the data structure
   * @param {} key
   * @param {} value
   * @returns the index in the hash table where the data was stored
   */
  set(key, value) {
    //hash the key
    let index = this._hash(key);
    //store the key-value pair in the hash taable array via separate chaining
    if (this.keyMap[index]) {
      this.keyMap[index].push([key, value]);
    } else {
      this.keyMap[index] = [[key, value]];
    }
    return index;
  }

  /**
   * Retrives the value associated with the key passed as argument
   * @param {*} key
   * @returns the value associated with key
   */
  get(key) {
    //hashes the key
    let index = this._hash(key);
    let value = undefined;
    //retrieve the value associated with key
    if (this.keyMap[index]) {
      this.keyMap[index].forEach((pair) => {
        if (pair[0] === key) value = pair[1];
      });
    }
    //if not in the hash table return undefined
    return value;
  }

  /**
   * Gets a list of all the keys
   * @returns a list of all the keys in the data structure
   */
  keys() {
    let allKeys = [];
    this.keyMap.forEach((slot) => {
      slot &&
        slot.forEach((pair) => {
          if (allKeys.indexOf(pair[0]) < 0) allKeys.push(pair[0]);
        });
    });

    return allKeys;
  }

  /**
   * Gets a list of all the values
   * @returns a list of all the values in the data structure
   */
  values() {
    let allKeys = [];
    this.keyMap.forEach((slot) => {
      slot &&
        slot.forEach((pair) => {
          if (allKeys.indexOf(pair[1]) < 0) allKeys.push(pair[1]);
        });
    });

    return allKeys;
  }
}

let hashTab = new HashTable(10);

hashTab.set("cree", "human");
hashTab.set("mochi", "cat");
hashTab.set("joe", "bear");
hashTab.set("snickers", "dog");
console.log(hashTab.get("cree"));
