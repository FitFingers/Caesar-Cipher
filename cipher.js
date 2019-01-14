window.onload = function() {
  
  // DEFINE VARIABLES
  let offset = 1;
  let isCaseSensitive = true;
  
  
  
  // DEFINE FUNCTIONS
  // Take inputText and offset and return ciphered text
  function cipher() {
    const inputText = document.getElementById("inputText").value || document.getElementById("inputText").placeholder;
    offset = parseInt(document.getElementById("offsetValue").innerHTML);
    return inputText.replace(/[A-Z]/gi, upperOrLower);
  }

  // Determine how to handle each character
  const upperOrLower = (letter) => letter.charCodeAt(0) < 94
  ? String.fromCharCode((letter.charCodeAt(0) + 13 + offset) % 26 + 65)
  : String.fromCharCode((letter.charCodeAt(0) + 7 + offset) % 26 + checkCaseSensitivity());
  
  // Check the case of a letter and return correct number to calculate output from input (65 to caps, 97 to lowercase)
  function checkCaseSensitivity() {
    const asciiCorrectionValue = isCaseSensitive === true ? 97 : 65;
    return asciiCorrectionValue;
  }
  
  // Mutate the DOM and render outputText
  const renderOutput = () => document.getElementById("outputText").innerHTML = cipher();
  
  // Copy contents to clipboard
  const copyContent = () => window.prompt("Copy to clipboard: Ctrl+C, enter", document.getElementById("outputText").innerHTML);
  
  // Increment the offset value
  function increment() {
    offset++;
    document.getElementById("offsetValue").innerHTML = offset;
    renderOutput();
  }
  
  // Decerement the offset value
  function decrement() {
    offset--;
    document.getElementById("offsetValue").innerHTML = offset;
    renderOutput();
  }
  
  // Toggle case sensitive on/off
  function toggleCaps() {
    isCaseSensitive = this.id === "caseSensitiveOn" ? true : false;
    renderOutput();
  }
  
  
  
  // ADD EVENT LISTENERS
  // Add encrypt button functionality
  document.getElementById("runEncryption").addEventListener("click", renderOutput);
  
  // Copy button
  document.getElementById("copyButton").addEventListener("click", copyContent);
  
  // Increment button
  document.getElementById("incrementOffset").addEventListener("click", increment);
  
  // Decrement button
  document.getElementById("decrementOffset").addEventListener("click", decrement);
  
  // Caps toggle
  document.getElementById("caseSensitiveOn").addEventListener("click", toggleCaps);
  document.getElementById("caseSensitiveOff").addEventListener("click", toggleCaps);
  
  
  
  // FUNCTIONS TO RUN ON PAGE LOAD
  // Run once on pageload for placeholder text
  renderOutput();
  
  // END OF WINDOW.ONLOAD
}
