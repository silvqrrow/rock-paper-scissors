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
let round = 1;

// Select HTML elements
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const humanScoreElement = document.querySelector(".score__human-score");
const computerScoreElement = document.querySelector(".score__computer-score");
humanScoreElement.textContent = humanScore;
computerScoreElement.textContent = computerScore;

let playRound = (humanChoice, computerChoice) => {
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    // All inputs are in lower-case, using slicing and the upper-case method will capitalize the first letter of what the human and computer picked
    result.textContent =
      "Round " +
      round +
      ": " +
      "You lose! " +
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1) +
      " beats " +
      humanChoice.charAt(0).toUpperCase() +
      humanChoice.slice(1);
    +".";
    computerScore++;
    round++;
  } else if (humanChoice === computerChoice) {
    result.textContent = "Round " + round + ": " + "You tied!";
    round++;
  } else {
    result.textContent =
      "Round " +
      round +
      ": " +
      "You win! " +
      humanChoice.charAt(0).toUpperCase() +
      humanChoice.slice(1) +
      " beats " +
      computerChoice.charAt(0).toUpperCase() +
      computerChoice.slice(1);
    +".";
    humanScore++;
    round++;
  }
  // Update the score after every round
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;

  if (humanScore === 5) {
    result.textContent =
      "Victory! Select rock, paper, or scissors to play again.";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    result.textContent =
      "Defeat. Select rock, paper, or scissors to play again.";
    humanScore = 0;
    computerScore = 0;
    round = 1;
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
