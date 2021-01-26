var playerTurn = true;
var computerMoveTimeout = 0;
let cellCount = 9;

// Returns an array of 9 <td> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoard() {
    var gameBoardTable = document.getElementById("gameBoard");
    var result = [];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            result.push(gameBoardTable.rows[i].cells[j]);
        }
    }
    return result;
}

function start() {
    // Setup the click event for the "New game" button
    var newBtn = document.getElementById("newGameButton");
    newBtn.addEventListener("click", newGame);

    // Create click-event listeners for each cell in the game board
    var cells = getGameBoard();
    for (let cell of cells) {
        cell.addEventListener("click", function () { cellClicked(cell); });
    }

    // Call the newGame function to make sure the board is clear
    newGame();
}

function newGame() {
    clearTimeout(computerMoveTimeout);
    var cells = getGameBoard();
    for (cell of cells) {
        cell.innerHTML = "&nbsp";
    }
    playerTurn = true;
    document.getElementById("turnInfo").innerHTML = "Your turn";
}

function cellClicked(cell) {
    if (playerTurn == true) {
        if (cell.innerHTML == '&nbsp;') {
            cell.innerHTML = "X";
            cell.style.color = "red";
            switchTurn();
        }
    }
}

function switchTurn() {
    var board = getGameBoard();
    if (board[0].innerHTML === "X" &&
        board[1].innerHTML === "X" &&
        board[2].innerHTML === "X"
    ) {
        document.getElementById("turnInfo").innerHTML = "You win!";
        playerTurn = false;
    }
    else if (
        board[3].innerHTML === "X" &&
        board[4].innerHTML === "X" &&
        board[5].innerHTML === "X"
    ) {
        document.getElementById("turnInfo").innerHTML = "You win!";
        playerTurn = false;
    }
    else if (
        board[6].innerHTML === "X" &&
        board[7].innerHTML === "X" &&
        board[8].innerHTML === "X"
    ) {
        document.getElementById("turnInfo").innerHTML = "You win!";
        playerTurn = false;
    }
    else if (
        board[0].innerHTML === "X" &&
        board[3].innerHTML === "X" &&
        board[6].innerHTML === "X"
    ) {
        document.getElementById("turnInfo").innerHTML = "You win!";
        playerTurn = false;
    }
    else if (
        board[1].innerHTML === "X" &&
        board[4].innerHTML === "X" &&
        board[7].innerHTML === "X"
    ) {
        document.getElementById("turnInfo").innerHTML = "You win!";
        playerTurn = false;
    }
    else if (
        board[2].innerHTML === "X" &&
        board[5].innerHTML === "X" &&
        board[8].innerHTML === "X"
    ) {
        document.getElementById("turnInfo").innerHTML = "You win!";
        playerTurn = false;
    }
    else if (
        board[0].innerHTML === "X" &&
        board[4].innerHTML === "X" &&
        board[8].innerHTML === "X"
    ) {
        document.getElementById("turnInfo").innerHTML = "You win!";
        playerTurn = false;
    }
    else if (
        board[2].innerHTML === "X" &&
        board[4].innerHTML === "X" &&
        board[6].innerHTML === "X"
    ) {
        document.getElementById("turnInfo").innerHTML = "You win!";
        playerTurn = false;
    }
    else if (
        board[0].innerHTML === "O" &&
        board[1].innerHTML === "O" &&
        board[2].innerHTML === "O"
    ) {
        document.getElementById("turnInfo").innerHTML = "Computer wins!";
        playerTurn = false;
    }
    else if (
        board[3].innerHTML === "O" &&
        board[4].innerHTML === "O" &&
        board[5].innerHTML === "O"
    ) {
        document.getElementById("turnInfo").innerHTML = "Computer wins!";
        playerTurn = false;
    }
    else if (
        board[6].innerHTML === "O" &&
        board[7].innerHTML === "O" &&
        board[8].innerHTML === "O"
    ) {
        document.getElementById("turnInfo").innerHTML = "Computer wins!";
        playerTurn = false;
    }
    else if (
        board[0].innerHTML === "O" &&
        board[3].innerHTML === "O" &&
        board[6].innerHTML === "O"
    ) {
        document.getElementById("turnInfo").innerHTML = "Computer wins!";
        playerTurn = false;
    }
    else if (
        board[1].innerHTML === "O" &&
        board[4].innerHTML === "O" &&
        board[7].innerHTML === "O"
    ) {
        document.getElementById("turnInfo").innerHTML = "Computer wins!";
        playerTurn = false;
    }
    else if (
        board[2].innerHTML === "O" &&
        board[5].innerHTML === "O" &&
        board[8].innerHTML === "O"
    ) {
        document.getElementById("turnInfo").innerHTML = "Computer wins!";
        playerTurn = false;
    }
    else if (
        board[0].innerHTML === "O" &&
        board[4].innerHTML === "O" &&
        board[8].innerHTML === "O"
    ) {
        document.getElementById("turnInfo").innerHTML = "Computer wins!";
        playerTurn = false;
    }
    else if (
        board[2].innerHTML === "O" &&
        board[4].innerHTML === "O" &&
        board[6].innerHTML === "O"
    ) {
        document.getElementById("turnInfo").innerHTML = "Computer wins!";
        playerTurn = false;
    }
    else if (
        (board[0].innerHTML == "X" || board[0].innerHTML === "O") &&
        (board[1].innerHTML == "X" || board[1].innerHTML === "O") &&
        (board[2].innerHTML == "X" || board[2].innerHTML === "O") &&
        (board[3].innerHTML == "X" || board[3].innerHTML === "O") &&
        (board[4].innerHTML == "X" || board[4].innerHTML === "O") &&
        (board[5].innerHTML == "X" || board[5].innerHTML === "O") &&
        (board[6].innerHTML == "X" || board[6].innerHTML === "O") &&
        (board[7].innerHTML == "X" || board[7].innerHTML === "O") &&
        (board[8].innerHTML == "X" || board[8].innerHTML === "O")
    ) {
        document.getElementById("turnInfo").innerHTML = "Draw game";
        playerTurn = false;
    }
    else if (playerTurn == true) {
        document.getElementById("turnInfo").innerHTML = "Computer's turn";
        computerMoveTimeout = setTimeout(makeComputerMove, 1000);
        playerTurn = false;               
    }
    else if (playerTurn == false) {
        document.getElementById("turnInfo").innerHTML = "Your turn";
        playerTurn = true;
    }
}

function makeComputerMove() {
    var cells = getGameBoard();
    var foundO = false;
    while (foundO == false) {
        var randomCell = Math.floor(Math.random() * cellCount);
        if (cells[randomCell].innerHTML == "&nbsp;") {
            cells[randomCell].innerHTML = "O";
            cells[randomCell].style.color = "blue";
            foundO = true;
        }
    } 
    switchTurn();
}