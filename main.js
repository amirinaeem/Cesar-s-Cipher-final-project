//Imported modules from single files;

import { findReplace } from "./search.js";
import {
  encryptToLetters,
  encryptToShapes,
  encryptToBinary,
  encrypToChar
} from "./encrypt.js";
import { generateRandomParagraph } from "./generate.js";
import {
  decryptFromLetters,
  decrypFromCharToText,
  decryptFromBinary,
  decryptFromShapes
} from "./decrypt.js";

//Main module for the generate words project;

// global variables;
let optionSelect = document.querySelectorAll("option");
let encryptingBtns = document.querySelectorAll(".encrypt-btn");
let generateBtn = document.querySelector("#generate-btn");
let searchText = document.querySelector(".search-text");
let replaceText = document.querySelector(".replace-text");
let findReplaceBtn = document.querySelector(".find-btn");
let mainTextArea = document.querySelector(".main-textarea");
let displayBox = document.querySelector(".display-text");
let decryptBtn = document.querySelector(".decrypt-btn");

//calling generate paragraph function;
generateBtn.addEventListener("click", function (event) {
  event.preventDefault();
  for (let i = 0; i < optionSelect.length; i++) {
    if (optionSelect[0].selected) {
      displayBox.innerText = "";
      displayBox.innerText += generateRandomParagraph(10, 10);
    } else if (optionSelect[1].selected) {
      displayBox.innerText = "";
      displayBox.innerText += generateRandomParagraph(100, 100);
    } else if (optionSelect[2].selected) {
      displayBox.innerText = "";
      displayBox.innerText += generateRandomParagraph(200, 200);
    } else {
      displayBox.innerText = "";
      displayBox.innerText += generateRandomParagraph(300, 300);
    }
  }
});

//calling find&Replace function;
findReplaceBtn.addEventListener("click", function () {
  let mainText = displayBox.innerText;
  let searchedText = searchText.value;
  let replacedText = replaceText.value;
  let findReplaceValue = findReplace(mainText, searchedText, replacedText);
  displayBox.innerText = "";
  displayBox.innerText = findReplaceValue;
});

// calling encrypting functions;
for (let i = 0; i < encryptingBtns.length; i++) {
  encryptingBtns[0].addEventListener("click", function () {
    displayBox.innerText = "";
    let towordFn = encryptToLetters(mainTextArea.value);
    displayBox.innerText = towordFn;
    if (towordFn) {
      decryptBtn.addEventListener("click", function () {
        displayBox.innerText = "";
        displayBox.innerText = decryptFromLetters(towordFn);
      });
    }
  });

  //Calling encrypting and decrypting to shaes function;
  encryptingBtns[1].addEventListener("click", function () {
    displayBox.innerText = "";
    let toShapsFn = encryptToShapes(mainTextArea.value);
    displayBox.innerText = toShapsFn;
    if (toShapsFn) {
      decryptBtn.addEventListener("click", function () {
        displayBox.innerText = "";
        displayBox.innerText = decryptFromShapes(toShapsFn);
      });
    }
  });

  //Calling encrypting and decrypting to binary numbers function;
  encryptingBtns[2].addEventListener("click", function () {
    displayBox.innerText = "";
    let toNumberFn = encryptToBinary(mainTextArea.value);
    displayBox.innerText = toNumberFn;
    if (toNumberFn) {
      decryptBtn.addEventListener("click", function () {
        displayBox.innerText = "";
        displayBox.innerText = decryptFromBinary(toNumberFn);
      });
    }
  });

  //Calling encrypting and decrypting to characters function;
  encryptingBtns[3].addEventListener("click", function () {
    displayBox.innerText = "";
    let toCharFn = encrypToChar(mainTextArea.value);
    displayBox.innerText = toCharFn;
    if (toCharFn) {
      decryptBtn.addEventListener("click", function () {
        displayBox.innerText = "";
        displayBox.innerText = decrypFromCharToText(toCharFn);
      });
    }
  });
}
