let countries = [
    "australia",
      "slovenia",
      "canada",
      "turkey",
      "greece",
      "japan",
      "netherlands",
      "france",
      "india",
    "china",
      "finland",
      "switzerland",
      "croatia",
      "germany",
      "egypt",
    "nigeria",
    "spain",
    "argentina",
    "senegal"
  ]
  
  let answer = "";
  let maxWrong = 6;
  let mistakes = 0;
  let guessed = [];
  let wordStatus = null;
  
  function randomWord() {
    answer = countries[Math.floor(Math.random() * countries.length)]; //Picks one of the words randomly from the countries array
  }
  
  
  function generateButtons() {
      let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `                                           
          <button                      
            class="btn btn-lg btn-primary m-2"      
            id='` + letter + `'
            onClick="handleGuess('` + letter + `')"
          >
            ` + letter + `
          </button>
        `).join('');   // generate the HTML buttons using JS instead of manually adding each button in HTML.
                       //  each letter instance is one of the alphabet letters in the buttonsHTML variable.
    
      document.getElementById('keyboard').innerHTML = buttonsHTML;
    }
  
    function handleGuess(chosenLetter){ // if the chosen letter does not exist,(-1 evaluates to false!!) push the chosen letter in the array
      guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
      document.getElementById(chosenLetter).setAttribute('disabled', true);   //disables the button once clicked
       
       if(answer.indexOf(chosenLetter) >= 0) { // if the chosen letter exists in the answer we call the guessedWord function to update the letters
        guessedWord(); //(if its 0 or a positive number it evaluates to true!!)
        checkifGameWon();
       }              
        else if (answer.indexOf(chosenLetter) === -1 ) { // if the chosen letter does not exist in the answer word we 
          mistakes ++;   // increment the mistakes variable by one, each time we guess incorectly 
          updateMistakes();
          checkifGameLost();
          updateHangmanPic(); 
        }
    }
  
     function updateHangmanPic() {
      document.getElementById(`hangmanPic`).src = `images/` + mistakes + `.jpg`;
     }
  
  
  
    function checkifGameWon(){
      if(wordStatus === answer) {
        document.getElementById(`keyboard`).innerHTML = `You Won`;
      } 
      //  the buttons in the keyboard were created using JS and simply appended to a empty div with an id of #keyboard,
      // if the statements of these two function are true we simply replace the content of the keyboard with messages from the functions
      // So if we either win or lose, the keyboard content will be replaced by the apropriate message.                                               
    }                                                    
    function checkifGameLost(){
      if(mistakes === maxWrong) {
        document.getElementById(`wordSpotlight`).innerHTML = `The answer was: ` + answer;
        document.getElementById(`keyboard`).innerHTML = `You Lost`;
      }
    }
  
    function guessedWord(){ // check if the letter exists in the guessed array
      // if it exists it will be a number greater than zero and added to the guessed array
      wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
      document.getElementById(`wordSpotlight`).innerHTML = wordStatus;
    }
  
    function updateMistakes(){
      document.getElementById(`mistakes`).innerHTML = mistakes;
    }
  
    function reset() {
      mistakes = 0;
      guessed = [];
      document.getElementById(`hangmanPic`).src = "../images/0.jpg";
  
      randomWord();  // generate a new random word
      guessedWord();    
      updateMistakes(); // to reset the mistakes counter in the HTML 
      generateButtons();
    }
    document.getElementById(`maxWrong`).innerHTML = maxWrong;
  
  
   
    randomWord();
    generateButtons();
    guessedWord();