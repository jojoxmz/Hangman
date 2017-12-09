
// After array has been established (mine is already named wordBank)

var availableLetters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordBank =["bulbasaur", "eevee", "jolteon", "lapras", "pikachu", "squirtle"];

var pokemonInfo = [
	{
		name: "bulbasaur",
		shadow: "./assets/images/bulbasaur_shadow.png",
		solved: "./assets/images/bulbasaur.png"
	},
	{
		name: "eevee",
		shadow: "link",
		solved: "link",
	},
	{
		name: "jolteon",
		shadow: "link",
		solved: "link",
	}
]

var currentWord;
var numberOfWins = 0;
var guessesRemaining = 5;
var lettersGuessed = [];

function currentWord(){
	var random = Math.floor(Math.random() * wordBank.length);
	var current = pokemonInfo[random].name;
	currentWord = current
	displayValue("randomWord", makeUnderscore(current));
}

function displayValue(id, value){
	document.getElementById(id).innerText = value;
}

function displayPokemon(pokemonLink) {
	document.getElementById("guess-that-pokemon").src = pokemonLink;
}

function makeUnderscore(word){
	var underscores = [];

	for (var i = 0; i < word.length; i++) {
		underscores.push("_");
	}

	return underscores.join(" ");
}



//look up .indexof js//
function checkUserGuess(letter){
	//check if guess is in current word//

	//if guess is in current word -- correct
	//display guess 
	//change letters that have been guessed

	//then 
	//if guess is not in current word-- incorrect 
	// display letterguessed
	// (-) guessed remaining
	// display one less pokeball
	// can only loose life once per guessed letter
	};


//On Load Call these
currentWord();
displayValue("wins", numberOfWins);
displayValue("guessesRemaining", guessesRemaining);
displayValue("lettersGuessed", lettersGuessed);



// Run game functions on event
document.onkeyup= function (event){
	checkUserGuess(event.key);
}



