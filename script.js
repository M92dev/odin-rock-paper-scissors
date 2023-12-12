"use strict";

// Get a choice by the Computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

// Get a choice by User prompt
function getUserChoice() {
  const userChoice = prompt("Rock, Paper or Scissors");
  const userChoiceLow = userChoice.toLowerCase();
  return userChoiceLow;
}

let playerCount = 0;
let computerCount = 0;

// Plays a round with automatic Computer Choice and a user Prompt
function playRound(playerSelection, computerSelection) {
  const player = playerSelection;
  const computer = computerSelection;
  console.log(`p: ${player}, c: ${computer}`);

  // Check for a tie
  if (player === computer) {
    console.log("It's a Tie. Play again!");
  } else if (
    // Check for win/lose scenarios
    (player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    console.log(`You Win! ${player} beats ${computer}.`);
    playerCount++;
  } else {
    // If not a tie and not a win, it's a loss
    console.log(`You Lose! ${computer} beats ${player}`);
    computerCount++;
  }
}

// console.log(playRound(playerSelection, computerSelection));

function game() {
  //call 5 times playround because of a best of 5
  //point in console.log() for each round and the winner at the end

  for (let i = 0; i < 5; i++) {
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    console.log(playerCount, computerCount);

    if (playerCount > computerCount) {
      console.log("Player wins");
    } else if (computerCount > playerCount) {
      console.log("Computer wins");
    } else {
      console.log("It´s a Tie.");
    }
  }
}
game();
