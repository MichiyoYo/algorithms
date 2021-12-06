/**
 * Using an array as a stack to implement a function that
 * determines if a word is a palindrome or not
 */

 function isPalindrome(word) {
  //this is my stack as an array
  let letters = [];
  let reversedWord = "";

  //push adds at the end every letter
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  //pop removes from the end and returns the removed item
  for (let i = 0; i < word.length; i++) {
    reversedWord += letters.pop();
  }
)
  //if the reversed word is the same than the initial word, then it was a palindrome
  return (word===reversedWord);

}

isPalindrome("racecar");
