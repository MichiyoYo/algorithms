function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  let pivot = Math.floor((left + right) / 2);

  while (arr[pivot] !== value && left < right) {
    value < arr[pivot] ? (right = pivot - 1) : (left = pivot + 1);
    pivot = Math.floor((left + right) / 2);
  }

  return value === arr[pivot] ? pivot : -1;
}
