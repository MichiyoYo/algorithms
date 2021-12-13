/* Bubble sort compares each element with the next one
 * so that the larger elements bubble to the end of the array.
 */

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i + 1; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([2, 93, 21, 100, 16, 0]);

/**
 * complexity: O(n^2)
 */
