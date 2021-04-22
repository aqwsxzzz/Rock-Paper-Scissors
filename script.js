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
function gameStart() {
    let playerPick = prompt(
      "Please pick Rock, Paper or Scissors"
    ).toLowerCase();
    if (playerPick === "rock" || playerPick === "paper" || playerPick === "scissors") {
      let computer = computerPlay();
      return (computer && playRound());
    } else {
      alert("Please enter a valid answer!");
      return gameStart();
    }
}
let game = gameStart();

function playRound(playerPick, computerPick) {
    if (playerPick === "scissors" && computerPick === "paper") {
      alert("Computer picked Paper!\nYou win!");
    } else if (playerPick === "rock" && computerPick === "paper") {
      alert("Computer picked Paper!.\nYou Lose!");
    } else if (playerPick === "rock" && computerPick === "scissors") {
      alert("Computer picked Scissors!\nYou win!");
    } else if (playerPick === "paper" && computerPick === "rock") {
      alert("Computer picked Rock!\nYou win!");
    } else if (playerPick === "paper" && computerPick === "scissors") {
      alert("Computer picked scissors!\nYou lose!");
    } else if (playerPick === "scissors" && computerPick === "rock") {
      alert("Computer picked Rock!\nYou lose!");
    } else {
      alert("Computer picked the same!\nIt's a draw!");
    }
  }



