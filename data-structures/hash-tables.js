function hash(key, arrayLen) {
  let total = 0;

  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    //using % will always give me a key in the range [0, arrayLen]
    total = (total + value) % arrayLen;
  }

  return total;
}

console.log(hash("meh", 12));
