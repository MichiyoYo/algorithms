/**
 * Given a root of a Binary Search Tree (BST) and a number num, implement an efficient function findLargestSmallerKey that finds the largest key in the tree that is smaller than num.
 * If such a number doesn't exist, return -1. Assume that all keys in the tree are nonnegative.
 */
function findLargestSmallestTree(root, num) {
  if (!root) return -1;
  if (!root.left && !root.right && root.val < num) return root.val;
  if (num < root.val) {
    let k = findLargestSmallestTree(root.left, val);
    if (k === -1) return root.val;
    else return k;
  }
  if (num > root.val) {
    return findLargestSmallestTree(root.right, val);
  }
}

function findLargestSmallerKey(root, num) {
  let result = -1;

  while (root) {
    if (root.val < num) {
      //saving this val because it could be the one
      result = root.val;
      //continue search in the right sub tree
      root = root.right;
    } else {
      root = root.left;
    }
  }
  return result;
}
