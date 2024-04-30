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
