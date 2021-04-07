"use strict";

//Variable and Object Creation
const word1 = new CrossWordKey(
  "_poem",
  "across1L1Input",
  "across1L2Input",
  "across1L3Input",
  "across1L4Input",
  "across1L5Input"
);

const word2 = new CrossWordKey(
  "hippo",
  "across2L1Input",
  "across2L2Input",
  "across2L3Input",
  "across2L4Input",
  "across2L5Input"
);

const word3 = new CrossWordKey(
  "april",
  "across3L1Input",
  "across3L2Input",
  "across3L3Input",
  "across3L4Input",
  "across3L5Input"
);

const word4 = new CrossWordKey(
  "space",
  "across4L1Input",
  "across4L2Input",
  "across4L3Input",
  "across4L4Input",
  "across4L5Input"
);

const word5 = new CrossWordKey(
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
  inputArray.forEach((input) => input.addEventListener("keyup", runPlayKeyUp));

  inputArray.forEach((input) => input.addEventListener("focus", runPlayFocus));

  for (let i = 0; i < inputArray.length; i++) {
    blankLetter(keyWord[i], inputArray[i]);

    inputArray[i].autocomplete = "off";
  }
  function runPlayKeyUp() {
    for (let i = 0; i < inputArray.length; i++) {
      check(keyWord[i], inputArray[i]);
      cursorMove(inputArray[i]);
      highLightFunctions(inputArray[i]);
    }
  }
  function runPlayFocus() {
    for (let i = 0; i < inputArray.length; i++) {
      highLightFunctions(inputArray[i]);
    }
  }
} //end object

//--Blank Styles

function blankLetter(wordSquare, inputId) {
  if (wordSquare == "_") {
    inputId.classList.add("blankLetter");
    inputId.disabled = "true";
    inputId.readOnly = "true";
  }
}

//--Work Checker
function check(letter, id) {
  if (id.value == letter) {
    id.classList.add("correctColor");
    id.disabled = "true";
    id.readOnly = "true";
  }
}

function highLightFunctions(id) {
  if (id.focus) {
    if (id.readOnly == false) {
      id.classList.add("selected");
    }
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
      if (nextTarg.nextElementSibling == null) {
        nextTarg = nextTarg.firstChild;
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
