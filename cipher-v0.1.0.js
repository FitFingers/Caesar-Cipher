// Early coursework for freeCodeCamp JavaScript Data Structures and Algorithms, 12.12.18


window.onload = function() {
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let inputSatz = document.getElementById("inputText").value;
    
  function cipher(str) {
    // console.log("str is: " + str);
    return str.toUpperCase().split("").map
      (item => alpha.indexOf(item) !== -1 ? [alpha.indexOf(item) % 26 + 13].map
        (item => alpha[item]) : item).join("");
  }
  
  // document.getElementById("encrypt").addEventListener("click", cipher(x));
  // document.getElementById("settingsBox").addEventListener("click", cipher(x));
  
  document.getElementById("outputText").innerHTML = cipher(inputSatz);
}
