function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("racecar"));
//racecar str[0]===str.slice(-1), r=r => isPalindrome("aceca")
//aceca str[0]===str.slice(-1), a=a => isPalindrome("cec")
//cec str[0]===str.slice(-1), c=c => isPalindrome("e")
//e, length===1 => true
