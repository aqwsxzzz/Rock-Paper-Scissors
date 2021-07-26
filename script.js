//Global variables.
let playRoundResult;
let playerScore = 0;
let computerScore = 0;
let playerPick;
let computerPick;
let tryAgain;

//Creates childs for the welcome messages div (#title).
const title = document.getElementById("title");
const welcomeMsg = document.createElement("h1");
welcomeMsg.textContent = "Welcome to my version of Rock, Paper and Scissors";
const subTitle = document.createElement("h2");
subTitle.textContent = "Hope you enjoy it!";
title.append(welcomeMsg, subTitle);

//Get players's pick from btns. and start the computers pick func.
function playerPlay(playerPick) {
  hidden();
  let computer = computerPlay();
  return computer && playRound(playerPick, computer);
}
const btnR = document.querySelector("#rock");
btnR.addEventListener("click", (e) => {
  playerPlay(e.target.id);
});
const btnP = document.querySelector("#paper");
btnP.addEventListener("click", (e) => {
  playerPlay(e.target.id);
});
const btnS = document.querySelector("#scissors");
btnS.addEventListener("click", (e) => {
  playerPlay(e.target.id);
});
//Create a child for the final message and score counter
//and remove hidden attribute from restart.
const container = document.getElementById("container");
const resultMsg = document.createElement("p");
const scoreCounter = document.createElement("p");
const pickAgain = document.createElement("p");
container.appendChild(resultMsg);
container.insertBefore(pickAgain, btnR);
container.insertBefore(scoreCounter, pickAgain);
function hidden() {
  pickAgain.removeAttribute("hidden");
  resultMsg.removeAttribute("hidden");
  scoreCounter.removeAttribute("hidden");
}

//Makes a random computer pick and return the result.
function computerPlay() {
  computerPick = Math.random();
  if (computerPick <= 0.3) {
    return (computerPick = "rock");
  } else if (0.3 < computerPick && computerPick <= 0.6) {
    return (computerPick = "paper");
  } else {
    return (computerPick = "scissors");
  }
}

//Makes the comparison of the picks and return the round result.
function playRound(playerPick, computerPick) {
  console.log(playerPick, computerPick);
  if (
    (playerPick == "scissors" && computerPick == "paper") ||
    (playerPick == "rock" && computerPick == "scissors") ||
    (playerPick == "paper" && computerPick == "rock")
  ) {
    playRoundResult = "won";
  } else if (
    (playerPick == "rock" && computerPick == "paper") ||
    (playerPick == "paper" && computerPick == "scissors") ||
    (playerPick == "scissors" && computerPick == "rock")
  ) {
    playRoundResult = "lose";
  } else {
    resultMsg.textContent =
      "Computer picked " + computerPick + "!" + " It's a draw!";
    pickAgain.textContent = "Please pick again.";
    return;
  }
  resultMsg.textContent =
    "Computer picked " +
    computerPick +
    "! " +
    "You " +
    playRoundResult +
    " this round!";

  score(playRoundResult);
}
//Make the game to 5 rounds updating the score of each player.
function score(result) {
  if (result === "won") {
    playerScore = playerScore + 1;
  } else computerScore = computerScore + 1;
  if (playerScore < 5 && computerScore < 5) {
    pickAgain.textContent = "Please pick again.";
    scoreCounter.textContent =
      "Player: " + playerScore + " Computer: " + computerScore;
  } else finalScore();
}

function finalScore() {
  if (playerScore === 5) {
    pickAgain.textContent = "You won the match!";
    scoreCounter.textContent =
      "Player: " + playerScore + " Computer: " + computerScore;
  } else {
    pickAgain.textContent = "You lose the match!";
    scoreCounter.textContent =
      "Player: " + playerScore + " Computer: " + computerScore;
  }
  btnR.disabled = true;
  btnP.disabled = true;
  btnS.disabled = true;
  tryAgain = document.createElement("button");
  tryAgain.removeAttribute("hidden");
  tryAgain.textContent = "Play again!";
  container.append(pickAgain, tryAgain);
  tryAgain.addEventListener("click", () => {
    playAgain();
  });
}

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  pickAgain.setAttribute("hidden", true);
  resultMsg.setAttribute("hidden", true);
  scoreCounter.setAttribute("hidden", true);
  tryAgain.setAttribute("hidden", true);
  btnR.disabled = false;
  btnP.disabled = false;
  btnS.disabled = false;
}
