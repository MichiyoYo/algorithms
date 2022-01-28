/**
 * This function uses a common design pattern for recursion.
 * where the result array is declared outside of the recursive function and it is modified by it.
 * The function helper is a closure (a function that is bundled with references to its surrounding state)
 * @param {*} arr
 * @returns
 */

function collectOddValues(arr) {
  let result = [];
  //helper is a closure
  const helper = (input) => {
    if (input.length === 0) return;
    if (input[0] % 2 !== 0) result.push(input[0]);
    helper(input.slice(1));
  };
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8]));
