window.onload = function() {
  
  // DEFINE VARIABLES
  let offset = document.getElementById("incValue").innerHTML;
  offset = 0;
  
  
  
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
    
    // Create new string and push individual letters onto it
    let newStr = [];
    offset = parseInt(document.getElementById("incValue").innerHTML);
    for (let i = 0; i < str.length; i++) {
      newStr.push(str[i].replace(/([A-Z])/g, String.fromCharCode((str.charCodeAt(i)-13 + offset) % 26 + 65))
                  .replace(/([a-z])/g, String.fromCharCode((str.charCodeAt(i)-19 + offset) % 26 + 97)));
    }
    document.getElementById("outputText").innerHTML = newStr.join("");
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
  
  
  
  // ADD EVENT LISTENERS
  // Add convert button functionality
  document.getElementById("encrypt").addEventListener("click", cipher);
  
  // Copy button
  document.getElementById("copyButton").addEventListener("click", copyContent);
  
  // Increment button
  document.getElementById("incre").addEventListener("click", increment);
  
  // Decrement button
  document.getElementById("decre").addEventListener("click", decrement);
  
  
  
  // FUNCTIONS TO RUN ON PAGE LOAD
  // Run once on pageload for placeholder text
  cipher();
  
  // END OF WINDOW.ONLOAD
}
