/**
 * Write a function that counts the number of occurrences of a substring in the long string
 */

function substringSearch(string, sub) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (sub[j] !== string[i + j]) break;
      if (j === sub.length - 1) count++;
    }
  }

  return count;
}

console.log(substringSearch("lorie loled", "lol"));
