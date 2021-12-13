/**
 * Write a function factorial which accepts a number and returns the factorial of that number.
 * A factorial is the product of an integer and all the integers below it; e.g. 4!=4*3*2*1
 */

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

factorial(3);
//output: 6
