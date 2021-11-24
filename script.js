
// 
// 01. Event listener for 'push button'
//      if button 'data-key' pressed then call playRound
// 02. Display the Player's selection, the Computer's selection and the result
// 03. Keep all 5 consecutive results and display score /5


// Initialise the scores
let number_of_player_win = 0;
let number_of_computer_win = 0;
let number_of_ties = 0;


// 01. Press button event listener
const btns = Array.from(document.querySelectorAll('button'));
console.log(btns);

// btns.forEach(btn => btn.addEventListener("click", function(e) {
//     console.log(e);
//     console.log(e.target.classList[0]);
// })
// );

btns.forEach(btn => btn.addEventListener("click", playRound2));



function playRound2(e) {
    
    let computerSelection = computerPlay();
    console.log("computerSelection :: " + computerSelection.toString());

    let playerSelection = e.target.classList[0];
    console.log("playerSelection :: " + playerSelection);

    let roundResult;

    if (playerSelection == computerSelection) {
        roundResult = "Tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        roundResult = "You lose!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        roundResult = "You win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundResult = "You win!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        roundResult = "You lose!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        roundResult = "You lose!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        roundResult = "You win!";
    }

    console.log("roundResult :: " + roundResult);

    displayRound(computerSelection, playerSelection, roundResult);

    // return roundResult;


}


function displayRound(computerSelection, playerSelection, roundResult) {


    // Display the round results
    const playerDiv=document.querySelector('.ctn-user-choice');
    playerDiv.textContent = playerSelection;

    const computerDiv=document.querySelector('.ctn-computer-choice');
    computerDiv.textContent = computerSelection;

    const resultDiv=document.querySelector('.result');
    resultDiv.textContent = roundResult;


    // Read previous scores and round number
    const playerWinsDiv=document.querySelector('.user-score');
    number_of_player_win = Number(playerWinsDiv.textContent);
    const computerWinsDiv=document.querySelector('.computer-score');
    number_of_computer_win = Number(computerWinsDiv.textContent);
    const numberTiesDiv=document.querySelector('.tie-score');
    number_of_ties = Number(numberTiesDiv.textContent);
    const roundDiv=document.querySelector('.round');
    round = Number(roundDiv.textContent);

    //  Increment the number of wins or ties:    
    if (roundResult == "You win!") {
        number_of_player_win += 1;
    } else if (roundResult == "You lose!") {
        number_of_computer_win += 1;
    } else if (roundResult == "Tie!") {
        number_of_ties += 1;        
    }

    round += 1;
    // if (round == 6) {

    // }


    // Write new scores
    playerWinsDiv.textContent = number_of_player_win;
    computerWinsDiv.textContent = number_of_computer_win;
    numberTiesDiv.textContent = number_of_ties;
    roundDiv.textContent = round;





    // Read the current round number


    console.log("round :: " + round);




}





function displayGame(round) {

    const playerDiv=document.querySelector('.ctn-user-choice');
    playerDiv.textContent = playerSelection;

    const computerDiv=document.querySelector('.ctn-computer-choice');
    computerDiv.textContent = computerSelection;

    const resultDiv=document.querySelector('.result');
    resultDiv.textContent = resultRound;

    const gameResultDiv=document.querySelector('.game-results');
    gameResultDiv.textContent = resultRound;








}

















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










// Game of 5 rounds 
// if Player selection is "none" (invalid user entry) then re-call PlayerPlay 
// Increment record of player and computer wins for calcualtion of final winner
// let number_of_player_win = 0;
// let number_of_computer_win = 0;

// function game() {

//     for (let i = 1; i < 6; i++) {

//         let playerSelection = "none";
//         while (playerSelection == "none") {
//             playerSelection = playerPlay();
//         }

//         let computerSelection = computerPlay();
//         let roundResult = playRound(playerSelection,computerSelection);

//         if (roundResult == "You win!") {
//             number_of_player_win += 1;
//         } else if (roundResult == "You lose!") {
//             number_of_computer_win += 1;
//         }

//         console.log("Round No." + i + " - You: " + playerSelection + " vs Computer: " + computerSelection + "      => result " + roundResult);
//     }

//     let final_winner = (number_of_player_win == number_of_computer_win) ? "Neither the Player nor the Computer..." : (number_of_player_win > number_of_computer_win) ? "Player!" : "Computer!";
    
//     console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
//     console.log("The final winner is the " + final_winner);
//     console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

// }

// Call to run the game
// game()


