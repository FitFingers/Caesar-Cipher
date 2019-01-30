// VARIABLES
const INPUT_TEXT = document.getElementById("input-text");
const OFFSET_VALUE = document.getElementById("offset-value");
const CASE_ON = document.getElementById("case-sensitive-on");
const CASE_OFF = document.getElementById("case-sensitive-off");
const OUTPUT_TEXT = document.getElementById("output-text");
const WHEEL = document.getElementById("offset-wheel");
const VALUE_DISPLAY = document.getElementById("value-display");

let offset = 1;
let isCaseSensitive = true;
let destination = "";
let inputProxy = "";



// FUNCTIONS
const setProxy = () => inputProxy = INPUT_TEXT.value;

const checkDestination = () => destination = areWeMobile() === false ? OUTPUT_TEXT : INPUT_TEXT;

function cipher() {
  let inputText = inputProxy || INPUT_TEXT.placeholder;
  offset = parseInt(OFFSET_VALUE.innerHTML);
  return inputText.replace(/[A-Z]/gi, checkUpperOrLower);
}

const checkUpperOrLower = (letter) => letter.charCodeAt(0) < 94 ?
      String.fromCharCode((letter.charCodeAt(0) + 13 + offset) % 26 + 65) :
      String.fromCharCode((letter.charCodeAt(0) + 7 + offset) % 26 + checkCaseSensitivity());

const checkCaseSensitivity = () => isCaseSensitive === true ? 97 : 65;

const renderOutput = () => destination.value = cipher();

const areWeMobile = () => window.innerWidth <= 660 ? true : false;

const copyContent = () => window.prompt("Copy to clipboard: Ctrl+C, enter", destination.value);

function increment() {
  offset++;
  OFFSET_VALUE.innerHTML = (offset + 26) % 26;
  renderOutput();
  rotateWheel(-13.85);
}

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



// EVENT LISTENERS
document.getElementById("input-text").addEventListener("input", setProxy);
document.getElementById("encrypt-button").addEventListener("click", renderOutput);
document.getElementById("desktop-copy-button").addEventListener("click", copyContent);
document.getElementById("mobile-copy-button").addEventListener("click", copyContent);
document.getElementById("increment-offset").addEventListener("click", increment);
document.getElementById("decrement-offset").addEventListener("click", decrement);
CASE_ON.addEventListener("click", toggleCaps);
CASE_OFF.addEventListener("click", toggleCaps);
window.addEventListener("resize", checkDestination);



// FUNCTIONS TO RUN ON PAGE LOAD
window.onload = function() {
  checkDestination();
  renderOutput();
}
