// Helper function to generate a random whole number
const getRandomNumber = (max) => Math.floor(Math.random() * max);

// Function to generate computer's choice
let getComputerChoice = () => {
  // Generate a random value from 0, 1, or 2
  let randomValue = getRandomNumber(3);

  if (randomValue === 0) {
    return "rock";
  } else if (randomValue === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// Declare scoring variables
let humanScore = 0;
let computerScore = 0;

// Select HTML elements
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const humanScoreElement = document.querySelector(".score__human-score");
const computerScoreElement = document.querySelector(".score__computer-score");

// The logic for a single round
let playRound = (humanChoice, computerChoice) => {
  if (humanChoice === "rock" && computerChoice === "paper") {
    result.textContent = "You lose! Paper beats Rock.";
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    result.textContent = "You win! Rock beats Scissors!";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    result.textContent = "You win! Paper beats Rock.";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    result.textContent = "You lose! Scissors beats Paper.";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    result.textContent = "You win! Scissors beats Paper.";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    result.textContent = "You lose! Rock beats Scissors.";
    computerScore++;
  } else {
    result.textContent = "You tied!";
  }
  // Update the score after every round
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;

  if (humanScore === 5) {
    result.textContent = "Victory!";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    result.textContent = "Defeat.";
    humanScore = 0;
    computerScore = 0;
  }
};

// Event Listeners for each choice
rock.addEventListener("click", function (e) {
  const computerChoice = getComputerChoice();
  playRound("rock", computerChoice);
});

paper.addEventListener("click", function (e) {
  const computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
});

scissors.addEventListener("click", function (e) {
  const computerChoice = getComputerChoice();
  playRound("scissors", computerChoice);
});
