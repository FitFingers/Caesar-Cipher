<head>
    <title>Encrypt Your Messages and Retain Your Privacy | Caesar's Cipher</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="styles/cipher.css" rel="stylesheet" type="text/css">
    <script src="scripts/cipher.js" type="text/javascript"></script>
</head>

<body>  
  <header>
    <h1>Javascript Caesar's Cipher</h1>
    <h2>Encode and decode your messages</h2>
  </header>

  <main>
    <section id="appContents">
      
  <!-- Input box -->
      <div id="inputBox" class="mainContainer">
        <textarea id="inputText" type="textarea" placeholder="Hello there, I am the Caesar Cipher. Please note the friendly message; this could easily have been an offensive one and you'd never have known!"></textarea>
        <button id="runEncryption" class="button largebtn">Encrypt</button>
      </div>

  <!-- Settings box -->
      <div id="settingsBox" class="mainContainer">
        
  <!-- Increment buttons -->
        <span>Settings</span><hr>
        <div class="optionContainer">
          <div id="decrementOffset" class="option incrementer">
            <div>⊖</div>
          </div>
          
          <div id="valueDisplay" class="option">
            <div id="offsetValue">1</div>
          </div>
          
          <div id="incrementOffset" class="incrementer option">
            <div>⊕</div>
          </div>
        </div>
        
  <!-- Caps toggle -->
        <div id="caseSensitiveOptions">
          <hr><span>Case sensitive:</span><hr>
          <div class="optionContainer">
            <div id="caseSensitiveOn" class="option">Yes</div>
            <div id="caseSensitiveOff" class="option">No</div>
          </div>
        </div>
      </div>

  <!-- Output box -->
      <div id="outputBox" class="mainContainer">
        <textarea id="outputText" type="textarea"></textarea>
        <button id="copyButton" class="button largebtn">Copy</button>
      </div>
      
    </section>
  </main>
</body>
