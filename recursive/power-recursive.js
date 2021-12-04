/**
 * Write a function called power which accepts a base and exponent. The function should return the power of the base to exponent.
 * This function should mimic the functionality of Math.pow() - don't worry about negative bases and exponents
 */

function power(n, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return n;
  return n * power(n, exp - 1);
}

power(2, 5);
//output: 32
