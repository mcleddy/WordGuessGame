//global variables
//--------------------------------------------------

//arrays&variables
var wordOptions = ["rattlesnake", "owl", "hummingbird", "javelina", "jackrabbit", "coyote", "bobcat", "scorpion", "tortoise"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
;

// game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


//functions
//--------------------------------------------------------
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);

    //make sure blanks and sucesses have correct # of blanks
    for (var i=0; i<numBlanks; i++) {
        blanksAndSuccesses.push(" _ ");
    }

    //change html
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    //test
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {

    var isLetterInWord = false;

    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter){
            isLetterInWord = true;
            
        }
    }
    if(isLetterInWord){
      for (var i=0; i<numBlanks; i++) {
         if(selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }
    }
    
}

else {
    wrongLetters.push(letter);
    guessesLeft--;
}

console.log(blanksAndSuccesses);

}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

    //updatehtml
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");
    document.getElementById("wrongGuesses").innerHTML =wrongLetters.join("");
    ///if player won
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won");

        document.getElementById("winCounter").innerHTML  = winCounter;

        startGame();
    }
    //if player loses
    else if (guessesLeft == 0){
        lossCount++;
        alert("You Lost");
        //html
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }
}

startGame();


document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    
    //test
   console.log(letterGuessed);
}

