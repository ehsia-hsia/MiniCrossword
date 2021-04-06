"use strict";

const frog = new CrossWordKey(
  "frog",
  "across1L1Input",
  "across1L2Input",
  "across1L3Input",
  "across1L4Input"
);

function CrossWordKey(word, id1, id2, id3, id4) {
  this.word = word;

  this.id1 = document.getElementById(id1);
  this.id2 = document.getElementById(id2);
  this.id3 = document.getElementById(id3);
  this.id4 = document.getElementById(id4);

  const inputArray = [this.id1, this.id2, this.id3, this.id4];

  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i].addEventListener("keyup", runPlay);
  }
  this.check = function () {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].value == this.word[i]) {
        inputArray[i].style.backgroundColor = "blue";
      } else {
        inputArray[i].style.backgroundColor = "pink";
      } //end conditional
    } // end loop
  }; //end check fucntion
} //end object

function runPlay() {
  frog.check();
}
