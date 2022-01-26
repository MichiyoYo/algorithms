function someRecursive(arr, func) {
  if (arr.length === 0) return false;
  if (func(arr[0])) return true;
  return someRecursive(arr.slice(1), func);
}

//the callback function could be anything
//this is just an example
const isOdd = (val) => val % 2 !== 0;
