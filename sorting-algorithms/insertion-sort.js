/**
 * Insertion sort builds up the sorted array by gradually creating a larger
 * left half which is always sorted
 * It takes each element, it compares it with the previous ones in the sorted array portion and
 * it INSERTS it in the correct spot
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currValue;
  }
  return arr;
}

/**
 * Complexity: O(n^2)
 */
