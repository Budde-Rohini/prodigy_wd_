let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.querySelectorAll(".cell")[index].innerText = currentPlayer;
        if (checkWin()) {
            document.getElementById("status").innerText = currentPlayer + " Wins!";
            gameActive = false;
            return;
        }
        if (board.includes("") === false) {
            document.getElementById("status").innerText = "It's a Draw!";
            gameActive = false;
            return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];
    return winPatterns.some(pattern => {
        return board[pattern[0]] === currentPlayer &&
               board[pattern[1]] === currentPlayer &&
               board[pattern[2]] === currentPlayer;
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    document.getElementById("status").innerText = "";
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
}