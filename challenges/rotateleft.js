/**
 * Rotates the array left by d positions
 * @param {Number} d
 * @param {*} arr
 * @returns the rotated array
 */
function rotateLeft(d, arr) {
  if (d === 0) return arr;
  let head = arr.splice(0, d);
  let result = [...arr, ...head];
  return result;
}
