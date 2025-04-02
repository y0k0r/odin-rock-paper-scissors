const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

const results = document.querySelector(".results");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");


rockBtn.addEventListener("click", () => {
  playRound(getComputerChoice(), "rock")
}); 

paperBtn.addEventListener("click", () => {
  playRound(getComputerChoice(), "paper")
});

scissorsBtn.addEventListener("click", () => {
  playRound(getComputerChoice(), "scissors")
});


let humanScore = 0; 
let computerScore = 0; 

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

function playRound(computerChoice, humanChoice) {
  // accept input for both computer and human choices
  // compare input and return a round winner
  if (computerChoice === humanChoice){
    results.textContent = "Great minds think alike! Replaying the round..."
  } else if ((computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissors") || (computerChoice === "scissors" && humanChoice === "rock")){
    results.textContent = `You won! ${humanChoice} beats ${computerChoice}.`
    humanScore++;
  } else {
    results.textContent = `You lost! ${computerChoice} beats ${humanChoice}.`
    computerScore++;

  }    
  score.textContent = `Computer: ${computerScore}   Human: ${humanScore}`
  
  if (computerScore === 5) {
    winner.textContent = 'You lost. Better luck next time!';
  } else if (humanScore === 5) {
    winner.textContent = 'You won!';
  }
}

