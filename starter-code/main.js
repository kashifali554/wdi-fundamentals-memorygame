// console.log("sanity check")
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king"
// var cardFour = "king"

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var board = document.getElementById('game-board');


 // Create Board function
function createBoard() {
	for(var i=0; i<cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
	}
}
		
// Is Two Cards? function
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="koc.png" alt="King of Clubs"/>';
	} else {
		this.innerHTML = '<img src="qoc.png" alt="Queen of Clubs"/>';
	}
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

// Is A Match? function
var isMatch = function(cards){
	if (cards[0] === cards[1]) {
		alert("You found a match");
	} else {
		alert ("Sorry, try again!");
	}
	document.querySelectorAll('.card').innerHTML = ' ';
}


// Initalize Game
createBoard();