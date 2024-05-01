const getRandomNumber = (max) => Math.floor(Math.random() * max);

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

let getHumanChoice = () => {
  let humanChoice = prompt("Choose one: rock, paper, or scissors");
  return humanChoice.toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

let playRound = (humanChoice, computerChoice) => {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats Rock.");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper.");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats Paper.");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors.");
    computerScore++;
  } else {
    console.log("You tied!");
  }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
