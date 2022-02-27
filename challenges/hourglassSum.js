/**
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:

a b c
  d
e f g
There are 16  hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .} matrix 
*/

function hourglassSum(matrix) {
  let sums = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      sums.push(
        matrix[i][j] +
          matrix[i][j + 1] +
          matrix[i][j + 2] +
          matrix[i + 1][j + 1] +
          matrix[i + 2][j] +
          matrix[i + 2][j + 1] +
          matrix[i + 2][j + 2]
      );
    }
  }

  return Math.max(...sums);
}

const matrix = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

hourglassSum(matrix);
