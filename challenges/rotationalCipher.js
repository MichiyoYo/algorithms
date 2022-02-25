const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const isLetter = (char) => {
  return /[a-zA-Z]/.test(char);
};

const isNumber = (char) => {
  return /^\d+$/.test(char);
};

const isUpperCase = (char) => {
  return char === char.toUpperCase();
};

const rotate = (arr, currIdx, n) => {
  if (n === 0) return arr[currIdx];
  if (n > arr.length - 1) {
    let index = n % arr.length;
    return arr[(index + currIdx) % arr.length];
  } else return arr[(n + currIdx) % arr.length];
};

function rotationalCipher(input, rotationFactor) {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    //save if the char was uppercase
    let wasUpper = isUpperCase(input[i]);
    //convert to lowercase
    const char = wasUpper ? input[i].toLowerCase() : input[i];

    if (isLetter(char)) {
      const newChar = rotate(alphabet, alphabet.indexOf(char), rotationFactor);
      result += wasUpper ? newChar.toUpperCase() : newChar;
    } else if (isNumber(char)) {
      result += String(rotate(num, Number(char), rotationFactor));
    } else {
      result += char;
    }
  }

  return result;
}
