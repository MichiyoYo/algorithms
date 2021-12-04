//Write a function called productOfArray which takes in an array of numbers and returns the product of them all

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

//alterative solution

function productOfArrayAlt(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
