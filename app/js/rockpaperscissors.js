////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.return
   return move || `getInput()`.return;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.return 
    return move || `randomPlay()`.return;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === "rock" && computerMove === "scissors") {
         winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
         winner = "computer";
    }
    else if (playerMove === "scissors" && computerMove === "scissors") {
         winner = "tie";
    }
    else if (playerMove === "rock" && computerMove === "rock") {
         winner = "tie";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
         winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "rock") {
         winner = "computer";
    }
    else if (playerMove === "rock" && computerMove === "paper") {
         winner = "computer";
    }
    else if (playerMove === "paper" && computerMove === "paper") {
         winner = "tie";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
         winner = "player";
    }
    else {
        console.log('there was an error with your selection');
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.


while (playerWins < 3 && computerWins < 3){
    
 
 var playerValue = getPlayerMove(getInput());
 var computerValue = getComputerMove(randomPlay());
 var result = getWinner(playerValue, computerValue);
 

    if (result === "player"){
        playerWins += 1;
    }
    else if (result === "computer"){
        computerWins += 1;
    }
    else {
        console.log('tie');
    }
       
    console.log('you picked '+playerValue+' and the computer picked '+computerValue+' and the winner is the '+result); 
    
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
 
 playerValue = null;
 computerValue = null;
 result = null;
       
}
    

    if (playerWins === 3){
        console.log("playerWins")
    }
    else if (computerWins === 3){
        console.log("ComputerWins")
    }

    return [playerWins, computerWins];
    
    
}

playToFive();

