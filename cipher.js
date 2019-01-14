window.onload = function() {
  
  // DEFINE VARIABLES
  let offset = 1;
  let caseSens = true;
  
  
  
  // DEFINE FUNCTIONS
  // Encode message and put into outputBox
  // BUG-FIX: Upper = -13)+65 (65 = "A"); Lower = -19)+97 (97 = "a"; difference of 6 due to the characters between ASCII "Z" and "a")
  function cipher() {
    // Avoid problems between blank and filled-in textarea
    if (document.getElementById("inputText").value) {
      var str = document.getElementById("inputText").value;
    } else {
      var str = document.getElementById("inputText").placeholder;
    }
    // Use input text to create output text
    offset = parseInt(document.getElementById("incValue").innerHTML);
    document.getElementById("outputText").innerHTML = str.replace(/[A-Z]/gi, upperOrLower);
  }

  // Determine how to handle each character
  function upperOrLower(letter) {
    if (letter.charCodeAt(0) < 94) {
      // Encode uppercase to uppercase
      return String.fromCharCode((letter.charCodeAt(0) + 13 + offset) % 26 + 65);
    } else {
      if (caseSens == true) {
        // Encode lowercase to lowercase
        return String.fromCharCode((letter.charCodeAt(0) + 7 + offset) % 26 + 97);
      } else {
        // Encode lowercase to uppercase
        return String.fromCharCode((letter.charCodeAt(0) + 7 + offset) % 26 + 65);
      }
    }
  }
  
  // Copy contents to clipboard
  function copyContent() {
    window.prompt("Copy to clipboard: Ctrl+C, enter", document.getElementById("outputText").innerHTML);
  }
  
  // Increment the offset value
  function increment() {
    offset++;
    document.getElementById("incValue").innerHTML = offset;
    cipher();
  }
  
  // Decerement the offset value
  function decrement() {
    offset--;
    document.getElementById("incValue").innerHTML = offset;
    cipher();
  }
  
  // Toggle case sensitive on/off
  function toggleCaps() {
    this.id == "caseYes" ? caseSens = true : caseSens = false;
    cipher();
  }
  
  
  
  // ADD EVENT LISTENERS
  // Add convert button functionality
  document.getElementById("encrypt").addEventListener("click", cipher);
  
  // Copy button
  document.getElementById("copyButton").addEventListener("click", copyContent);
  
  // Increment button
  document.getElementById("incre").addEventListener("click", increment);
  
  // Decrement button
  document.getElementById("decre").addEventListener("click", decrement);
  
  // Caps toggle
  document.getElementById("caseYes").addEventListener("click", toggleCaps);
  document.getElementById("caseNo").addEventListener("click", toggleCaps);
  
  
  
  // FUNCTIONS TO RUN ON PAGE LOAD
  // Run once on pageload for placeholder text
  cipher();
  
  // END OF WINDOW.ONLOAD
}
