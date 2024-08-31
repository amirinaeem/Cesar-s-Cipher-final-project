//get randomInteger function;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//get random letter function;
function getRandomLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters.charAt(getRandomInt(0, letters.length - 1));
}

//get random word function;
function generateRandomWord(minLength = 3, maxLength = 8) {
  const wordLength = getRandomInt(minLength, maxLength);
  let word = "";
  for (let i = 0; i < wordLength; i++) {
    word += getRandomLetter();
  }
  return word;
}

// get random sentece function;
function generateRandomSentence(minWords = 5, maxWords = 12) {
  const sentenceLength = getRandomInt(maxWords, minWords);
  let sentence = "";
  for (let i = 0; i < sentenceLength; i++) {
    let word = generateRandomWord();
    // Capitalize the first word of the sentence
    if (i === 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    }
    sentence += word;
    //Add a space after each word except the last one
    if (i < sentenceLength - 1) {
      sentence += " ";
    } else {
      sentence += ".";
    }
  }
  return sentence;
}

// get Random paragraph function
function generateRandomParagraph(minSentences = 10, maxSentences = 20) {
  const paragraphLength = getRandomInt(minSentences, maxSentences);
  let paragraph = "";
  for (let i = 0; i < paragraphLength; i++) {
    paragraph += generateRandomSentence();
    // add a space after each sentence except the last one
    if (i < paragraphLength - 1) {
      paragraph += " ";
    }
  }
  return paragraph;
}

export {
  generateRandomParagraph,
  generateRandomSentence,
  generateRandomWord,
  getRandomLetter,
  getRandomInt
};
