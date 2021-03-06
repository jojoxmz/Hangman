
// After array has been established (mine is already named wordBank)

var wordBank =["bulbasaur", "eevee", "jolteon", "lapras", "pikachu", "squirtle"];

var pokemonInfo = [
	{
		name: "bulbasaur",
		shadow: "./assets/images/Bulbasaur-shadow.jpg",
		solved: "./assets/images/Bulbasaur.png",
	},
	{
		name: "eevee",
		shadow: "./assets/images/Eevee-shadow.jpg",
		solved: "./assets/images/Eevee.png",
	},
	{
		name: "jolteon",
		shadow: "./assets/images/Jolteon-shadow.jpg",
		solved: "./assets/images/Jolteon-shadow.jpg",
	},
	{
		name: "lapras",
		shadow: "./assets/images/lapras-shadow.jpg",
		solved: "./assets/images/Lapras.png",
	},
	{
		name: "pikachu",
		shadow: "./assets/images/pikachu-shadow.jpg",
		solved: "./assets/images/pikachu.png",
	},
	{
		name: "squirtle",
		shadow: "./assets/images/Squirtle-shadow.jpg",
		solved: "./assets/images/Squirtle.png",
	},
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
	//check letter value if its in word//

	//if guess is in current word -- correct
	//display guess 
	//change letters that have been guessed

	//then 
	//if guess is not in current word-- incorrect 
	// display letterguessed
	// (-) guessed remaining
	// display one less pokeball
	// can only loose life once per guessed letter
	// };


//On Load Call these
currentWord();
displayValue("wins", numberOfWins);
displayValue("guessesRemaining", guessesRemaining);
displayValue("lettersGuessed", lettersGuessed);



// Run game functions on event
document.onkeyup= function (event){
	checkUserGuess(event.key);
}



