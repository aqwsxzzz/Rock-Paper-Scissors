//Create a child for the final message.
const container = document.getElementById("container");
const resultMsg = document.createElement("p");
container.appendChild(resultMsg);

//Get players's pick from btns. and start the computers pick func.
const btnR = document.querySelector("#rock");
btnR.addEventListener("click", () => {
  let playerPick = "rock";
  let computer = computerPlay();
  return computer && playRound(playerPick, computer);
});
const btnP = document.querySelector("#paper");
btnP.addEventListener("click", () => {
  let playerPick = "paper";
  let computer = computerPlay();
  return computer && playRound(playerPick, computer);
});
const btnS = document.querySelector("#scissors");
btnS.addEventListener("click", () => {
  let playerPick = "scissors";
  let computer = computerPlay();
  return computer && playRound(playerPick, computer);
});

//Makes a random computer pick and return the result.
function computerPlay() {
  let computerPick = Math.random();
  if (computerPick <= 0.3) {
    return (computerPick = "rock");
  } else if (0.3 < computerPick && computerPick <= 0.6) {
    return (computerPick = "paper");
  } else {
    return (computerPick = "scissors");
  }
}

//Makes the comparison of the picks and return the result.
function playRound(playerPick, computerPick) {
  let playRoundResult;
  if (
    (playerPick == "scissors" && computerPick == "paper") ||
    (playerPick == "rock" && computerPick == "scissors") ||
    (playerPick == "paper" && computerPick == "rock")
  ) {
    playRoundResult = "win!";
  } else if (
    (playerPick == "rock" && computerPick == "paper") ||
    (playerPick == "paper" && computerPick == "scissors") ||
    (playerPick == "scissors" && computerPick == "rock")
  ) {
    playRoundResult = "lose!";
  } else {
    playRoundResult = "draw!";
  }
  resultMsg.textContent =
    "Computer picked" + computerPick + "!" + "You " + playRoundResult;
}
