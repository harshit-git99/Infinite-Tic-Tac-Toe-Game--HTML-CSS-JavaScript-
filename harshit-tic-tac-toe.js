const boardElement = document.getElementById("board");
const statusText = document.getElementById("status");
const xWinsText = document.getElementById("xWins");
const oWinsText = document.getElementById("oWins");

let board = Array(9).fill("");
let movesQueue = [];
let MAX_MOVES = 6;
let currentPlayer = "X";
let gameOver = false;

let xWins = 0;
let oWins = 0;

function createBoard() {
  boardElement.innerHTML = "";
  board.forEach((_, index) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => makeMove(index));
    boardElement.appendChild(cell);
  });
}

function makeMove(index) {
  if (board[index] !== "" || gameOver) return;

  board[index] = currentPlayer;
  movesQueue.push(index);

  if (movesQueue.length > MAX_MOVES) {
    const oldMove = movesQueue.shift();
    board[oldMove] = "";
  }

  render();

  if (checkWinner(currentPlayer)) {
    statusText.textContent = `🎆 Player ${currentPlayer} Wins! 🎆`;
    gameOver = true;

    if (currentPlayer === "X") {
      xWins++;
      xWinsText.textContent = xWins;
    } else {
      oWins++;
      oWinsText.textContent = oWins;
    }
    restartGame();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
  gameOver = false;
}

function render() {
  document.querySelectorAll(".cell").forEach((cell, i) => {
    cell.textContent = board[i];
  });
}

function checkWinner(p) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return wins.some(combo => combo.every(i => board[i] === p));
}

function restartGame() {
  board = Array(9).fill("");
  movesQueue = [];
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  gameOver = false;
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
  render();
}

function openPopup() {
  document.getElementById("popupBox").style.display = "block";
}

function closePopup() {
  document.getElementById("popupBox").style.display = "none";
}

createBoard();

