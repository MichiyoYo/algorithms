class HashTable {
  //we want the size of the array to be a prime number
  constructor(size = 53) {
    //the array were we will store the key-value pairs
    this.keyMap = new Array(size);
  }

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
}

let hashTab = new HashTable(3);
hashTab.set("cree", "human");
hashTab.set("mochi", "cat");
hashTab.set("joe", "bear");
hashTab.set("snickers", "dog");
console.log(hashTab.get("cree"));
