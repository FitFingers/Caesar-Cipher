window.onload = function() {
  
  // Encode message and put into outputBox
  function cipher(str) {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
      newStr.push(str[i].replace(/([A-Z])/gi, String.fromCharCode((str.charCodeAt(i) % 26) + 65))); //Add var
    }
    document.getElementById("outputText").innerHTML = newStr.join("");
  }
  
  // Copy contents to clipboard
  function copyContent() {
    window.prompt("Copy to clipboard: Ctrl+C, enter", document.getElementById("outputText").innerHTML);
  }
  
  // Add button click functionality
  document.getElementById("encrypt").addEventListener("click", () => cipher(document.getElementById("inputText").value));
  
  // Add copy button functionality
  document.getElementById("copyC").addEventListener("click", copyContent);

  // Run once on pageload for placeholder text
  cipher(document.getElementById("inputText").placeholder);
}
