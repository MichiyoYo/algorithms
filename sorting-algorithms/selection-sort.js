/**
 * Selection sort looks for the minimum value of the array and puts it at
 * the beginning of the array, and then moves to the next minimum value.
 * The ordered array builds up at the beginning.
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //assume the first el is the min
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    //to avoid unnecessary swaps we only swap when i is not min already
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

selectionSort([3, 555, 0, 233, 21, 11]);

/**
 * Complexity: O(n^2)
 */
