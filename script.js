function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function getUserChoice() {
  const userChoice = prompt("Rock, Paper or Scissors");
  const userChoiceLow = userChoice.toLowerCase();
  return userChoiceLow;
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection;
  const computer = computerSelection;
  console.log(`p: ${player}, c: ${computer}`);

  // Check for a tie
  if (player === computer) {
    return "It's a Tie. Play again!";
  }

  // Check for win/lose scenarios
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return `You Win! ${player} beats ${computer}`;
  } else {
    // If not a tie and not a win, it's a loss
    return `You Lose! ${computer} beats ${player}`;
  }
}

let playerSelection = getUserChoice();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
