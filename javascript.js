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

let playRound = (humanChoice, computerChoice) => {
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    result.textContent =
      "You lose! " +
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1) +
      " beats " +
      humanChoice.charAt(0).toUpperCase() +
      humanChoice.slice(1);
    +".";
    computerScore++;
  } else if (humanChoice === computerChoice) {
    result.textContent = "You tied!";
  } else {
    result.textContent =
      "You win! " +
      humanChoice.charAt(0).toUpperCase() +
      humanChoice.slice(1) +
      " beats " +
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1);
    +".";
    humanScore++;
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
