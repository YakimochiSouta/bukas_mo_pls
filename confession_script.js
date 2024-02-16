"use strict";

const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");

const max_no = 8;

let play = true;
let noCount = 0;

noButton.addEventListener("click", function () {
    if (play) {
        noCount++;
    resizeYesButton();
    updateNoButtonText();
    if (noCount === max_no) {
      play = false;
    }
  }
});


function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.8;
  
    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Sure ka ba",
    "Weh di nga",
    "Yung totoo",
    "Ayaw mo ba talaga",
    "Iyak ako ahaha",
    "Wala na sadboi na",
    "Umiiyak na ako oh huhuhu",
    "lombai",
    "hahahaha",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}