var wordList =["bulbasaur", "eevee", "jolteon", "lapras", "pikachu", "squirtle"];
var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; 
var wrongGuesses = []; 

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 5; 

function startGame() { 
    numGuesses = 5;
    blanksAndSuccesses;
    wrongGuesses; 

    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    console.log(chosenWord);
    console.log(numBlanks);

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
    console.log(blanksAndSuccesses);
    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

};

function checkLetters(letter){     
    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if (chosenWord[i] === letter){
            letterInWord = true;
        }
    }

    if(letterInWord){
        for (i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
            }
            console.log("inside our checkletter function", blanksAndSuccesses);
        }
    }else{ 
        numGuesses --;
        wrongGuesses.push(letter);
    }
    console.log("our wrong guesses inside our checkletter function", wrongGuesses);
};


function roundComplete() {
    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

        console.log(lettersInChosenWord);
        console.log(blanksAndSuccesses);
    
    if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
        winCounter++;
        alert("You win!!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    }else if(numGuesses === 0){
        document.getElementById('loss-counter').innerHTML = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = " ";
        alert("you don't have anymore guesses left");
        playButton.style.visibility = "visible";
    }    

};
    startGame(); 
    
    document.onkeyup = function(){
        
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("this is the letter we type", letterGuessed);
        checkLetters(letterGuessed);
        roundComplete();

};

