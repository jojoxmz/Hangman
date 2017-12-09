
// After array has been established (mine is already named wordBank)

var available letters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordBank =["bulbasaur", "eevee", "jolteon", "lapras", "pikachu", "squirtle"];
var chosenWord= "";
var lettersInChosenWord= [];
var blankSpaces= 0;
var blankAndFilled= [];
var wrongGuesses =[];

var wins= 0;
var numOfGuessesRemain= 10;
var guesses =[];

var numOfGuessesRemain= document.getElementById("guessesRemaining");



// New variable:
let (var?) randNum = Math.floor(Math.random() * PokemonNames.length);

another new variable:
let (var?) choosenWord = word[randNum];
console.log (chosenWord);

and another:
let (var?) underScore = [];
console.log (chosenWord);

another two...gets added after "if user's guess is right"
var guessRight = [];
var guessWrong = [];

generate underscores based on the legnth of the array (each word):
var generateUnderscore = () => {
for (var i = 0; i < chosenWord.length; i++) {
  console.log(wordBank[i]);
underScore.push ('_');    ....the "_" mean we will be pushing underScore itself

		}
	return underScore;
	}
	console.log(generateUnderscore());


	// Now we have to capture the user's guess:
document.addEventListener ('keypress', (event) => {
console.log(event);   


// Now we convert the key code into a letter
var keyCode = event.keycode <----but no..wait, were going to convert that into a string. See
var KeyWord = String.fromCharCode(keyCode);

// If user's guess is right:
if (chosenWord.Indexof(Keyword > -1) {
	rightWord.push(keyWord)
	wrongWord.push(keyWord)
}
});