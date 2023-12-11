console.log("hello world");

const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  console.log(choice);
}
