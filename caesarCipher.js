// caesarCipher.js

export function caesarCipher(string, shiftFactor) {
  let shiftedString = '';

  for (let char in string) {
    if (string[char] === ' ') {
      shiftedString += ' ';
    } else if (punctuations(string[char])) {
      shiftedString += string[char]; 
    } else if (string[char] === string[char].toUpperCase()) {
      let charIndex = getIndex(string[char].toLowerCase());
      let shiftedChar = getCipherChar(charIndex, shiftFactor);
      shiftedString += shiftedChar.toUpperCase();
    } else {
      let charIndex = getIndex(string[char]);
      let shiftedChar = getCipherChar(charIndex, shiftFactor);
      shiftedString += shiftedChar;
    }
  }

  return shiftedString;
}

function getCipherChar(index, shiftFactor) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let shiftedIndex = (index + shiftFactor) % 26;

  // Adjust for wrap-around
  if (shiftedIndex < 0) {
    shiftedIndex += 26;
  }

  return alpha[shiftedIndex];
}


function getIndex(char) {
  const alphaKey = 'abcdefghijklmnopqrstuvwxyz';
  return alphaKey.indexOf(char);
}


function punctuations(char) {
  const punctuations = `.,?!;:–-'"()[]…/`
  return punctuations.includes(char);
}