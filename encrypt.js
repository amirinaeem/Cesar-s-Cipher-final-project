//global variables;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let shiftValue = 3;
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
const alphabetNumber =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const characters = "!@#$%^&*()_+[]{}|;:',.<>?/`~\"\\=1234567890-";

//All encrypting functions;
/*---------------------------*/
/*---------------------------*/

/*--------------Toletter function -------------*/

// function of get random letters
function getRandomLetter() {
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

function encryptToLetters(message) {
  //variable for encrypted message
  let encryptedMessage = "";
  //counter required for random number generator
  let counter = 0;
  // loop through message
  for (let i = 0; i < message.length; i++) {
    // variable for letter in message
    const letterInMessage = message[i];
    // variable for letter in message upper case
    const isUpperCase = letterInMessage === letterInMessage.toUpperCase();
    // variable for letter in message lower case
    const lowerChar = letterInMessage.toLowerCase();
    //finding index of letter in message in alphabetical order
    const charIndexInMessage = alphabet.indexOf(lowerChar);
    //handling the characters and whitespace in encrypted message
    if (charIndexInMessage === -1) {
      // If character is not in the alphabet, add it as is.
      encryptedMessage += letterInMessage;
    } else {
      // Calculate the shifted index of the message letter index in alphabet
      let movedIndex = (charIndexInMessage + shiftValue) % 26;
      //handling the character exceeds the alphabet length
      if (movedIndex < 0) movedIndex += 26;
      //creating  the encrypted letter
      let encryptedLetter = alphabet[movedIndex];
      //handling the the case of encrypted letter
      if (isUpperCase) encryptedLetter = encryptedLetter.toUpperCase();
      //adding the encrypted letter in the encrypted message
      encryptedMessage += encryptedLetter;
      //incrementing the counter according to the encrypted letter
      counter++;
      // Insert a random letter after every 2 letters
      if (counter === 2) {
        encryptedMessage += getRandomLetter();
        // assigning the counter back to zero;
        counter = 0;
      }
    }
  }
  // returning the final encrypted message
  return encryptedMessage;
}

/*--------------ToShape function -------------*/

// Function to encrypt a message into shapes
function encryptToShapes(message) {
  let encryptedMessage = "";
  // Loop through the message
  for (let i = 0; i < message.length; i++) {
    const char = message[i].toLowerCase();
    // Encrypt letter to shape or keep it as is
    encryptedMessage += shapeMapping[char] || char;
  }
  return encryptedMessage;
}

/*--------------Tobinary function -------------*/

function encryptToBinary(message) {
  let binaryMessage = "";

  for (let i = 0; i < message.length; i++) {
    // Get the character's ASCII/Unicode code
    const charCode = message.charCodeAt(i);
    // Convert the code to a binary string
    const binaryCode = charCode.toString(2);
    // Ensure it's 8 bits long
    const paddedBinaryCode = binaryCode.padStart(8, "0");
    // Add a space between binary codes
    binaryMessage += paddedBinaryCode + " ";
  }
  // Remove the trailing space
  return binaryMessage.trim();
}

/*--------------ToChar function -------------*/

function encrypToChar(message) {
  let encryptedMessage = " ";
  //loop through message;
  for (let i = 0; i < message.length; i++) {
    //get each character of the message
    let messageEl = message[i];
    //get the index of the message character
    let messageElIndex = alphabetNumber.indexOf(messageEl);
    //fixing the whitespace
    if (messageElIndex !== -1) {
      encryptedMessage += characters[messageElIndex % alphabetNumber.length];
    } else {
      encryptedMessage += messageEl;
    }
  }

  return encryptedMessage;
}

// exporting all functions to main file;
export { encryptToLetters, encryptToShapes, encryptToBinary, encrypToChar };
