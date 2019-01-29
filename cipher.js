// DEFINE VARIABLES
const INPUT_TEXT = document.getElementById("input-text");
const OFFSET_VALUE = document.getElementById("offset-value");
const CASE_ON = document.getElementById("case-sensitive-on");
const CASE_OFF = document.getElementById("case-sensitive-off");
const OUTPUT_TEXT = document.getElementById("output-text");
const WHEEL = document.getElementById("offset-wheel");
const VALUE_DISPLAY = document.getElementById("value-display");

let offset = 1;
let isCaseSensitive = true;



// DEFINE FUNCTIONS
// Take inputText and offset and return ciphered text
function cipher() {
  let inputText = INPUT_TEXT.value || INPUT_TEXT.placeholder;
  offset = parseInt(OFFSET_VALUE.innerHTML);
  return inputText.replace(/[A-Z]/gi, checkUpperOrLower);
}

// Determine how to handle each character
const checkUpperOrLower = (letter) => letter.charCodeAt(0) < 94 ?
      String.fromCharCode((letter.charCodeAt(0) + 13 + offset) % 26 + 65) :
      String.fromCharCode((letter.charCodeAt(0) + 7 + offset) % 26 + checkCaseSensitivity());

// Check the case of a letter and return correct number to calculate output from input (65 to caps, 97 to lowercase)
function checkCaseSensitivity() {
  const ASCII_VALUE = isCaseSensitive === true ? 97 : 65;
  return ASCII_VALUE;
}

// Mutate the DOM and render outputText
const renderOutput = () => OUTPUT_TEXT.innerHTML = cipher();

// Copy contents to clipboard
const copyContent = () => window.prompt("Copy to clipboard: Ctrl+C, enter", OUTPUT_TEXT.innerHTML);

// Increment the offset value
function increment() {
  offset++;
  OFFSET_VALUE.innerHTML = (offset + 26) % 26;
  renderOutput();
  rotateWheel(-13.85);
}

// Decerement the offset value
function decrement() {
  offset--;
  OFFSET_VALUE.innerHTML = (offset + 26) % 26;
  renderOutput();
  rotateWheel(13.85);
}

function rotateWheel(degrees) {
  WHEEL.style.transform += `rotate(${degrees}deg)`;
  VALUE_DISPLAY.style.transform += `rotate(${degrees * -1}deg)`
}

// Toggle case sensitive on/off
function toggleCaps() {
  isCaseSensitive = this.id === "case-sensitive-on" ? true : false;
  if (isCaseSensitive === true) {
    CASE_ON.classList.add("selected-option");
    CASE_OFF.classList.remove("selected-option");
  } else {
    CASE_ON.classList.remove("selected-option");
    CASE_OFF.classList.add("selected-option");
  }
  renderOutput();
}



// ADD EVENT LISTENERS
document.getElementById("encrypt-button").addEventListener("click", renderOutput);
document.getElementById("copy-button").addEventListener("click", copyContent);
document.getElementById("increment-offset").addEventListener("click", increment);
document.getElementById("decrement-offset").addEventListener("click", decrement);
CASE_ON.addEventListener("click", toggleCaps);
CASE_OFF.addEventListener("click", toggleCaps);



// FUNCTIONS TO RUN ON PAGE LOAD
window.onload = function() {
  renderOutput();
}
