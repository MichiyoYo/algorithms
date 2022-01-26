/**
 * Write a function factorial which accepts a number and returns the factorial of that number.
 * A factorial is the product of an integer and all the integers below it; e.g. 4!=4*3*2*1
 */

//iterative solution
function factorialIterative(n) {
  let result = n;
  for (let i = n - 1; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log("Iterative " + factorialIterative(4));

//recursive solution
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log("Recursive " + factorial(4));
//output: 6
