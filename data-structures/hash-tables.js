/**
 * The problem with this function is that it only hashes strings
 * Not constant time, but linear in key length
 * Could be a little more random
 */

function hashV1(key, arrayLen) {
  let total = 0;

  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    //using % will always give me a key in the range [0, arrayLen]
    total = (total + value) % arrayLen;
  }

  return total;
}

/**
 * In this version we multiply the total by a prime number
 * to minimize the number of collisions;
 * We also set a max for looping, the minimum between 100 and the length of the key
 */
function hashV2(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
