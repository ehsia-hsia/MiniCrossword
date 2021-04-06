"use strict";

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
function CrossWordKey(word, id1, id2, id3, id4, id5) {
  this.word = word;

  this.id1 = document.getElementById(id1);
  this.id2 = document.getElementById(id2);
  this.id3 = document.getElementById(id3);
  this.id4 = document.getElementById(id4);
  this.id5 = document.getElementById(id5);

  const inputArray = [this.id1, this.id2, this.id3, this.id4, this.id5];

  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i].addEventListener("keyup", runPlay);
    if (word[i] == "_") {
      inputArray[i].style.backgroundColor = "black";
      inputArray[i].disabled = "true";
    }
  }

  this.check = function () {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].value == this.word[i]) {
        inputArray[i].style.backgroundColor = "blue";
      } //end conditional
    } // end loop
  }; //end check fucntion
} //end object

function runPlay() {
  const wordArray = [word1, word2, word3, word4, word5];
  wordArray.forEach((word) => word.check());
}
