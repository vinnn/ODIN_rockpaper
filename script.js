
// 
// 01. Event listener for 'push button'
// 02. Display the Player's selection, the Computer's selection and the result
// 03. Incremenet number of wins up to 5 rounds and display final winner


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Initialise the scores and round number
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let number_of_player_win = 0;
let number_of_computer_win = 0;
let number_of_ties = 0;
let round = 0;

const playerWinsDiv=document.querySelector('.user-score');
playerWinsDiv.textContent = number_of_player_win;
const computerWinsDiv=document.querySelector('.computer-score');
computerWinsDiv.textContent = number_of_computer_win;
const numberTiesDiv=document.querySelector('.tie-score');
numberTiesDiv.textContent = number_of_ties;
const roundDiv=document.querySelector('.round');
roundDiv.textContent = round;


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Press button event listener
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const btns = Array.from(document.querySelectorAll('button'));
console.log(btns);

btns.forEach(btn => btn.addEventListener("click", playRound));


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// PlayRound Function
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function playRound(e) {
    
    let computerSelection = computerPlay();
    let playerSelection = e.target.classList[0];
    let roundResult = whoWinsRound(playerSelection, computerSelection);

    displayRound(computerSelection, playerSelection, roundResult);
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// PlayRound Function
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function displayRound(computerSelection, playerSelection, roundResult) {


    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // read previous round number
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const roundDiv=document.querySelector('.round');
    round = Number(roundDiv.textContent);





    // If previous_round number is 5 then
    //      new round = 1
    //      nb player win = nb computer win = number ties = 0
    // else
    //      round += 1
    //      nb wins += 1

    if (round == 5) {
            // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            // intitalise to 0. Will be incremented in the common calcs after
            // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%            
            round = 0;
            number_of_player_win = 0;
            number_of_computer_win = 0;
            number_of_ties = 0;
    } else {
            // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            // record previous scores
            // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            const playerWinsDiv=document.querySelector('.user-score');
            number_of_player_win = Number(playerWinsDiv.textContent);
            const computerWinsDiv=document.querySelector('.computer-score');
            number_of_computer_win = Number(computerWinsDiv.textContent);
            const numberTiesDiv=document.querySelector('.tie-score');
            number_of_ties = Number(numberTiesDiv.textContent);
    }

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    //  Increment the round number and the number of wins or ties:  
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%      
    if (roundResult == "You win!") {
        number_of_player_win += 1;
    } else if (roundResult == "You lose!") {
        number_of_computer_win += 1;
    } else if (roundResult == "Tie!") {
        number_of_ties += 1;        
    }
    round += 1;




    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // DISPLAY UPDATED RESULTS
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    // Display the round results
    const playerDiv=document.querySelector('.ctn-user-choice');
    playerDiv.textContent = playerSelection;
    const computerDiv=document.querySelector('.ctn-computer-choice');
    computerDiv.textContent = computerSelection;
    const resultDiv=document.querySelector('.result');
    resultDiv.textContent = roundResult;

    // Write new scores
    playerWinsDiv.textContent = number_of_player_win;
    computerWinsDiv.textContent = number_of_computer_win;
    numberTiesDiv.textContent = number_of_ties;
    roundDiv.textContent = round;

    // Final result (displayed at end of round 5 only)
    let final_message = (number_of_player_win == number_of_computer_win) ? "Game Tie..." : (number_of_player_win > number_of_computer_win) ? "The final winner is the Player!" : "The final winner is the Computer!";
    // let final_message = "The final winner is the " + final_winner;

    const finalResultDiv=document.querySelector('.final-result');
    if (round == 5) {
        finalResultDiv.textContent = final_message;
    } else {
        finalResultDiv.textContent = "";
    }

}



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Computer selection (random)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
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


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Determines who wins or if a tie
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function whoWinsRound(playerSelection, computerSelection) {

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
    return roundResult;
}
