let boxes = document.querySelectorAll(".box");
let winnerDiv = document.querySelector(".winner");
let winnerMsg = document.querySelector(".winnerMsg");
let resetGame = document.querySelector(".resetGameBtn");
let newGameBtn = document.querySelector(".newGameBtn");
let turn = document.querySelector(".turn");
let player_O = true;
let count = 0;
const patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
function checkWinner() {
  for (let pattern of patterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        showWinner(pos1);
      }
    }
  }
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player_O == true) {
      box.innerHTML = "O";
      box.style.color = "#1e90ff";
      turn.innerHTML = "Player X's Turn";
      player_O = false;
    } else {
      box.innerHTML = "X";
      box.style.color = "#ff6347";
      turn.innerHTML = "Player O's Turn";
      player_O = true;
    }
    box.disabled = true;
    count++;
    checkWinner();
    if (count == 9) {
      draw();
    }
  });
});
function draw() {
  winnerMsg.innerHTML = `Match draw ,Play again!`;
  winnerDiv.classList.remove("winnerDisplay");
}
function showWinner(winner) {
  winnerMsg.innerHTML = `Winner is ${winner}`;
  winnerDiv.classList.remove("winnerDisplay");
  disabledBoxes();
}

function disabledBoxes() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}
function enableBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
}

resetGame.addEventListener("click", () => {
  newGame();
});

newGameBtn.addEventListener("click", () => {
  newGame();
});
function newGame() {
  player_O = true;
  count = 0;
  turn.innerHTML = "Player O's Turn";
  enableBoxes();
  boxes.forEach((box) => {
    box.innerText = "";
  });
  winnerDiv.classList.add("winnerDisplay");
}
