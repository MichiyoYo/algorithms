/**
 * This function returns an array of odd numbers extracted from the array passed as argument
 * with pure recursion
 * @param {} arr
 * @returns
 */

function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  return newArr.concat(collectOddValues(arr.slice(1)));
}

console.log(collectOddValues([1, 2, 3, 4, 5, 9, 22, 33, 44, 55]));
