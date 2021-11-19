

function computerPlay() {
    let random_number = Math.round(Math.random() * 2);

    if (random_number == 0) {
        return "rock";
    } else if (random_number == 1) {
        return "paper";
    } else {
        return "scissors";
    }

}



function playRound(playerSelection, computerSelection) {
    
    let playerSelection_lowerc = playerSelection.toLowerCase();

    if (playerSelection_lowerc == computerSelection) {
        return "Tie!";
    } else if (playerSelection_lowerc == "rock" && computerSelection == "paper") {
        return "You lose!";
    } else if (playerSelection_lowerc == "rock" && computerSelection == "scissors") {
        return "You win!";
    } else if (playerSelection_lowerc == "paper" && computerSelection == "rock") {
        return "You win!";
    } else if (playerSelection_lowerc == "paper" && computerSelection == "scissors") {
        return "You lose!";
    } else if (playerSelection_lowerc == "scissors" && computerSelection == "rock") {
        return "You lose!";
    } else if (playerSelection_lowerc == "scissors" && computerSelection == "paper") {
        return "You win!";
    }
}


let playerSelection = "Rock";
let computerSelection = computerPlay();
let roundResult = playRound(playerSelection,computerSelection);

console.log("Player selection is : " + playerSelection);
console.log("Computer selection is : " + computerSelection);

console.log("The result is : " + roundResult);



