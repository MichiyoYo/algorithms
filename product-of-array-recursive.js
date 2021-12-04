//short version with divide et impera
function productOfArray(arr) {
  if (arr.length < 1) return 0;
  if (arr.length === 1) return arr[0];
  let midIndex = Math.floor(arr.length / 2);
  return (
    productOfArray(arr.slice(0, midIndex)) * productOfArray(arr.slice(midIndex))
  );
}

//long-hand version
function productOfArray(arr) {
  if (arr.length < 1) return 0;
  if (arr.length === 1) return arr[0];
  let midIndex = Math.floor(arr.length / 2);
  let left = productOfArray(arr.slice(0, midIndex));
  let right = productOfArray(arr.slice(midIndex));
  return left * right;
}
