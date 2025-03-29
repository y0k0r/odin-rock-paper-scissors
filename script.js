function getComputerChoice() {
  // generate random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3); 

  // return choice based on random number
  switch(randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  // prompt user for their selection
  const humanChoice = prompt("Enter your choice 'rock, paper, or scissors': ").toLowerCase().trim();
  return humanChoice;
}
