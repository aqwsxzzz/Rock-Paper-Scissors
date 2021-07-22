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
  if (playerPick == "scissors" && computerPick == "paper") {
    resultMsg.textContent = "Computer picked Paper!\nYou win!";
  } else if (playerPick == "rock" && computerPick == "paper") {
    resultMsg.textContent = "Computer picked Paper!.\nYou Lose!";
  } else if (playerPick == "rock" && computerPick == "scissors") {
    resultMsg.textContent = "Computer picked Scissors!\nYou win!";
  } else if (playerPick == "paper" && computerPick == "rock") {
    resultMsg.textContent = "Computer picked Rock!\nYou win!";
  } else if (playerPick == "paper" && computerPick == "scissors") {
    resultMsg.textContent = "Computer picked Scissors!\nYou lose!";
  } else if (playerPick == "scissors" && computerPick == "rock") {
    resultMsg.textContent = "Computer picked Rock!\nYou lose!";
  } else {
    resultMsg.textContent = "Computer picked the same!\nIt's a draw!";
  }
}

