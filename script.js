let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let resetButton = document.getElementById("resetButton");
let roundWinner = document.getElementById("roundWinner");
let computerRock = document.getElementsByClassName("rock-computer")[0];
let computerPaper = document.getElementsByClassName("paper-computer")[0];
let computerScissors= document.getElementsByClassName("scissors-computer")[0];
let computerChoice

function hideComputerChoice(){
	computerRock.style.display = "none";
	computerPaper.style.display = "none";
	computerScissors.style.display = "none";
}
function displayComputerChoice() {                //this function modifies the CSS display property of the images under "Computer choice	
												  //so that the image displayed reflects the value assigned to computerChoice
	if(computerChoice == "rock") {
		computerRock.style.display = "block";
		computerPaper.style.display = "none";
		computerScissors.style.display = "none";
	} else if(computerChoice == "paper"){
		computerRock.style.display = "none";
		computerPaper.style.display = "block";
		computerScissors.style.display = "none";
	} else {
		computerRock.style.display = "none";
		computerPaper.style.display = "none";
		computerScissors.style.display = "block";
	}
}
function getComputerChoice(){
	let currentValue = (Math.random() * 100);
	if(currentValue <= 33.34) {
		computerChoice = "rock";
		displayComputerChoice();
		return "rock"
	} else if (currentValue <= 66.67) {
		computerChoice = "paper";
		displayComputerChoice();
		return "paper"
	} else {
		computerChoice = "scissors"
		displayComputerChoice()
		return "scissors"

	}

}

rock.onclick = function() {
	switch(getComputerChoice()) {
		case  "rock": 
			roundWinner.innerHTML = "It's a tie";
			break;
		case "paper":
			roundWinner.innerHTML = "You lost :(";
	 		computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
			break;
		case "scissors":
			roundWinner.innerHTML = "You won!";
			playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
			break;
	}
}
paper.onclick = function() {
	switch(getComputerChoice()) {
		case  "rock": 
			roundWinner.innerHTML = "You won!";
			playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
			break;
		case "paper":
			roundWinner.innerHTML = "It's a tie";
			break;
		case "scissors":
			roundWinner.innerHTML = "You lost :(";
			computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1
			break;
	}
}
scissors.onclick = function() {
	switch(getComputerChoice()) {
		case  "rock": 
			roundWinner.innerHTML = "You lost :(";
			computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
			break;
		case "paper":
			roundWinner.innerHTML = "You won!";
			playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
			break;
		case "scissors":
			roundWinner.innerHTML = "It's a tie";
			break;
	}
}
resetButton.onclick = function() {
	hideComputerChoice();
	playerScore.innerHTML = 0;
	computerScore.innerHTML = 0;
	roundWinner.innerHTML = "Game resetted";
}

 