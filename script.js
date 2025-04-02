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
    console.log("Great minds think alike! Replaying the round...")
  } else if ((computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissors") || (computerChoice === "scissors" && humanChoice === "rock")){
    console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
    return "human";
  } else {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}.`)
    return "computer"; 
  }
}

function playGame() {
  
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;

  // Run 5 rounds of the game
  while (round <=5 ){
    console.log(`Round ${round}, fight!`);
    let winner = playRound(getComputerChoice(), getHumanChoice());
  // Increment winner of round  
    switch (winner) {
      case "human":
        humanScore++;
        round++;
        break;
      case "computer":
        computerScore++;
        round++;
        break;
      default:
        break;
    }
  }
  // Print overall winner of the game
  if (humanScore > computerScore){
    console.log(`You are the winner! [Human: ${humanScore} points | Computer: ${computerScore} points]`); } else if (computerScore > humanScore) {
      console.log(`You lose :( [Human: ${humanScore} points | Computer: ${computerScore} points]`)
    }
  else {
    console.log(`Tie game.`)
  }
}

playGame();
