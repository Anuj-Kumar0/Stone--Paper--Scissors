let outcomes = ["Stone", "Paper", "Scissor"];

let winCases = {
  Stone: "Scissor",
  Paper: "Stone",
  Scissor: "Paper",
};

const resultDisplay = document.querySelector("#result");
const scoreDisplay = document.querySelector("#scoreresult");

let playerChoice = "";
let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", playerInput);
});

function playerInput(e) {
  let inputTarget = e.target;
  if (inputTarget.nodeName.toLowerCase() === "i") {
    inputTarget = inputTarget.parentNode; // Target the parent button element
  }
  let input = inputTarget.id;

  playerChoice = input;
  game();
}

function game() {
  let computerChoice = outcomes[Math.floor(Math.random() * 3)];
  if (winCases[playerChoice] === computerChoice) {
    playerWins++;
    resultDisplay.textContent = `Playerchoice: ${playerChoice}, Computerchoice: ${computerChoice}, You Won!`;
    scoreDisplay.textContent = `Your Score Is: ${playerWins}, Computer Score Is: ${computerWins}`;
  } else if (playerChoice === computerChoice) {
    resultDisplay.textContent = `Playerchoice: ${playerChoice}, Computerchoice: ${computerChoice}, Draw!`;
    scoreDisplay.textContent = `Your Score Is: ${playerWins}, Computer Score Is: ${computerWins}`;
  } else if (winCases[computerChoice] === playerChoice) {
    computerWins++;
    resultDisplay.textContent = `Playerchoice: ${playerChoice}, Computerchoice: ${computerChoice}, You Lose!`;
    scoreDisplay.textContent = `Your Score Is: ${playerWins}, Computer Score Is: ${computerWins}`;
  }

  if (playerWins >= 5) {
    resultDisplay.textContent = `Playerchoice: ${playerChoice}, Computerchoice: ${computerChoice}, You Won The Whole Game!`;
    scoreDisplay.textContent = `Your Score Is: ${playerWins}, Computer Score Is: ${computerWins}, Play Again By Clicking Again`;
    playerWins = 0;
    computerWins = 0;
  } else if (computerWins >= 5) {
    resultDisplay.textContent = `Playerchoice: ${playerChoice}, Computerchoice: ${computerChoice}, You Lost The Whole Game!`;
    scoreDisplay.textContent = `Your Score Is: ${playerWins}, Computer Score Is: ${computerWins}, Play Again By Clicking Again`;
    playerWins = 0;
    computerWins = 0;
  }
}
