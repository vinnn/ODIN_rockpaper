// Computer selection (random)
function computerPlay() {
    let random_number = Math.floor(Math.random() * 2.99);

    if (random_number == 0) {
        return "rock";
    } else if (random_number == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Player's selection.
// Prompt the user to input its selection,
// returns "none" if entry not valid.
function playerPlay() {

    let prompt_capture = window.prompt(`Please enter your selection ("rock", "paper", or "scissors")`, `rock`);

    let prompt_capture_lowerc = prompt_capture.toLowerCase();

    if (prompt_capture_lowerc == "rock" || prompt_capture_lowerc == "paper" ||prompt_capture_lowerc == "scissors") {
        return prompt_capture_lowerc;
    } else {
        window.alert("Selection not properly entered. Please re-enter.");
        return "none";
    }
}


// One round:
// Determines win, lose or tie 
// base on the player selection and the computer selection.
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






// Game of 5 rounds 
// if Player selection is "none" (invalid user entry) then re-call PlayerPlay 
// Increment record of player and computer wins for calcualtion of final winner
let number_of_player_win = 0;
let number_of_computer_win = 0;

function game() {

    for (let i = 1; i < 6; i++) {

        let playerSelection = "none";
        while (playerSelection == "none") {
            playerSelection = playerPlay();
        }

        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection,computerSelection);

        if (roundResult == "You win!") {
            number_of_player_win += 1;
        } else if (roundResult == "You lose!") {
            number_of_computer_win += 1;
        }

        console.log("Round No." + i + " - You: " + playerSelection + " vs Computer: " + computerSelection + "      => result " + roundResult);
    }

    let final_winner = (number_of_player_win == number_of_computer_win) ? "Neither the Player nor the Computer..." : (number_of_player_win > number_of_computer_win) ? "Player!" : "Computer!";
    
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log("The final winner is the " + final_winner);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

}

// Call to run the game
game()


