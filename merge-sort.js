function merge(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    for (let x = i; x < arr1.length; x++) {
      merged.push(arr1[x]);
    }
  }
  if (j < arr2.length) {
    for (let x = j; x < arr2.length; x++) {
      merged.push(arr2[x]);
    }
  }

  return merged;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midIndex = Math.floor((arr.length - 1) / 2);
  let left = arr.slice(0, midIndex + 1);
  let right = arr.slice(midIndex + 1, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

mergeSort([3, 1, 4, 20, 11, 100, 22]);
