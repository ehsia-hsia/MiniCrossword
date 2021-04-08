"use strict";

//Variable and Object Creation
const word0 = new CrossWordKey(
  "_poem",
  "across1L1Input",
  "across1L2Input",
  "across1L3Input",
  "across1L4Input",
  "across1L5Input"
);

const word1 = new CrossWordKey(
  "hippo",
  "across2L1Input",
  "across2L2Input",
  "across2L3Input",
  "across2L4Input",
  "across2L5Input"
);

const word2 = new CrossWordKey(
  "april",
  "across3L1Input",
  "across3L2Input",
  "across3L3Input",
  "across3L4Input",
  "across3L5Input"
);

const word3 = new CrossWordKey(
  "space",
  "across4L1Input",
  "across4L2Input",
  "across4L3Input",
  "across4L4Input",
  "across4L5Input"
);

const word4 = new CrossWordKey(
  "hahs_",
  "across5L1Input",
  "across5L2Input",
  "across5L3Input",
  "across5L4Input",
  "across5L5Input"
);

//Construction Function

function CrossWordKey(keyWord, id1, id2, id3, id4, id5) {
  this.keyWord = keyWord; //correct word
  this.id1 = document.getElementById(id1);
  this.id2 = document.getElementById(id2);
  this.id3 = document.getElementById(id3);
  this.id4 = document.getElementById(id4);
  this.id5 = document.getElementById(id5);

  // Input Array & Call Functions
  const inputArray = [this.id1, this.id2, this.id3, this.id4, this.id5];

  // inputArray.forEach((input) => input.addEventListener("focus", runPlayFocus));

  for (let i = 0; i < inputArray.length; i++) {
    blankLetter(keyWord[i], inputArray[i]);
    inputArray[i].autocomplete = "off";
  }
} //end object

/*---------------NEED TO DO WORD CHECK FUNCTION!___*/

const newArrayTest = []; /// sub for input array

const wordArray = [word0, word1, word2, word3, word4];

wordArray.forEach((word) => testyLoop(word));

function testyLoop(word) {
  for (let i = 1; i < 6; i++) {
    const idBaby = `id${i}`; //iterate through all word objects with dynamic variable
    // console.log(idBaby);
    // word[idBaby].style.backgroundColor = "pink"; /// target all word inputs with dynamic variables

    newArrayTest.push(word[idBaby]);
    // console.log(newArrayTest);
    runPlayKeyUp(word[idBaby]);

    console.log(word);
    console.log(word.keyWord);
  }
}

newArrayTest.forEach((input) => input.addEventListener("keyup", runPlayKeyUp));
// newArrayTest.forEach((input) => input.addEventListener("focus", runPlayFocus));

function runPlayKeyUp(word) {
  for (let i = 0; i < newArrayTest.length; i++) {
    cursorMove(newArrayTest[i]);
  }
}

// function runPlayFocus() {
//   for (let i = 0; i < newArrayTest.length; i++) {
//     highlighter(newArrayTest[i]);
//   }
// }
newArrayTest[1].value = "s";

//--Blank Styles

function blankLetter(wordSquare, inputId) {
  if (wordSquare == "_") {
    inputId.classList.add("blankLetter");
    inputId.disabled = "true";
    inputId.readOnly = "true";
  }
}

function highlighter(section) {
  if (section.disabled == false) {
    section.classList.add("selected");
  } else {
    section.classList.remove("selected");
  }
}

//--Work Checker
function check(letter, id, singleId) {
  if (id.value == letter) {
    id.disabled = "true";
    id.readOnly = "true";
    id.classList.add("correctColor");
  } else if (id.value !== letter) {
    singleId.classList.add("incorrectColor");
  }
}

function cursorMove(input) {
  let nextTarg = input;
  let myLength = nextTarg.value.length;
  if (myLength >= 1) {
    nextTarg.focus();
    while ((nextTarg = nextTarg.nextElementSibling)) {
      if (nextTarg == null) break;
      if (nextTarg.tagName.toLowerCase() == "input") {
        nextTarg.focus();
        break;
      }

      if (nextTarg.readOnly == true) {
        nextTarg = nextTarg.nextSibling;
        nextTarg.focus();
        break;
      }
    }
  }
}
