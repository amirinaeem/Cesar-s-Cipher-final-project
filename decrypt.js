//global variables
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let shiftValue = 3;
const alphabetNumber =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const characters = "!@#$%^&*()_+[]{}|;:',.<>?/`~\"\\=1234567890-";
const shapeMapping = {
  a: "●",
  b: "■",
  c: "▲",
  d: "◆",
  e: "○",
  f: "□",
  g: "△",
  h: "◇",
  i: "⬤",
  j: "⬛",
  k: "⬟",
  l: "⬢",
  m: "⬠",
  n: "◉",
  o: "✪",
  p: "✦",
  q: "✧",
  r: "★",
  s: "✩",
  t: "✯",
  u: "✡",
  v: "☸",
  w: "⚝",
  x: "❖",
  y: "✹",
  z: "❂",
  " ": " " // Space stays as space
};

//Updated Decrypt Function to Skip Random Letters

// function of get random letters
function getRandomLetter() {
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

function decryptFromLetters(encryptedMessage) {
  // variable for decrypted message
  let decryptedMessage = "";
  // variable required for inserting random letter;
  let counter = 0;
  // loop through the encrypted message
  for (let i = 0; i < encryptedMessage.length; i++) {
    // handling the case
    const encryptedChar = encryptedMessage[i];
    // variable for encrypted in upper case
    const isUpperCase = encryptedChar === encryptedChar.toUpperCase();
    // variable for encrypted in lower case
    const lowerChar = encryptedChar.toLowerCase();
    //index of encryptedChar in alphabet
    const indexEncryptedChar = alphabet.indexOf(lowerChar);
    // handling the characters and whitespace
    if (indexEncryptedChar === -1) {
      // If character is not in the alphabet, add it as is.
      decryptedMessage += encryptedChar;
    } else {
      if (counter < 2) {
        // move the index of character in reverse order
        let movedBackIndex = (indexEncryptedChar - shiftValue) % 26;
        // handle the index of characters in reverse order if it exceeds the alphabet
        if (movedBackIndex < 0) movedBackIndex += 26;
        // move the character in reverse order
        let movedBackLetter = alphabet[movedBackIndex];
        // handling the moved letter case
        if (isUpperCase) movedBackLetter = movedBackLetter.toUpperCase();
        // assigning the moved letter into decrypted message box
        decryptedMessage += movedBackLetter;
        counter++;
      } else {
        // Skip the random letter
        counter = 0;
      }
    }
  }

  return decryptedMessage;
}

// Function to decrypt a message from shapes to text
const reverseShapeMapping = Object.fromEntries(
  Object.entries(shapeMapping).map(([letter, shape]) => [shape, letter])
);
function decryptFromShapes(encryptedMessage) {
  let decryptedMessage = "";
  // Loop through the encrypted message
  for (let i = 0; i < encryptedMessage.length; i++) {
    const shape = encryptedMessage[i];
    decryptedMessage += reverseShapeMapping[shape] || shape; // Decrypt shape to letter or keep it as is
  }
  return decryptedMessage;
}

//Decrypting from Binary back to text;
function decryptFromBinary(binaryMessage) {
  let decryptedMessage = "";

  // Split the binary message by spaces to get individual binary codes
  const binaryCodes = binaryMessage.split(" ");

  // Convert each binary code back to its corresponding character
  for (let i = 0; i < binaryCodes.length; i++) {
    const binaryCode = binaryCodes[i];
    const charCode = parseInt(binaryCode, 2); // Convert binary to decimal (base 10)
    const character = String.fromCharCode(charCode); // Convert char code to character
    decryptedMessage += character;
  }

  return decryptedMessage;
}

//Decrypt function from character to text;
function decrypFromCharToText(charac) {
  let decryptedMessage = " ";
  for (let i = 0; i < charac.length; i++) {
    let charEl = charac[i];
    let charElIndex = characters.indexOf(charEl);
    if (charElIndex !== -1) {
      decryptedMessage += alphabetNumber[charElIndex % characters.length];
    } else {
      decryptedMessage += charEl;
    }
  }

  return decryptedMessage;
}

export {
  decryptFromLetters,
  decrypFromCharToText,
  decryptFromBinary,
  decryptFromShapes
};
