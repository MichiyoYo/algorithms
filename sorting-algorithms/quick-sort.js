function pivotFinder(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (arr.length < 2) return arr;
  if (start < end) {
    let pivIdx = pivotFinder(arr, start, end);
    quickSort(arr, start, pivIdx - 1);
    quickSort(arr, start, pivIdx + 1);
  }
  return arr;
}
