const statusDisplay = document.querySelector('.game-status');

//variables
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

//messages 
const winningMessage = () => {
    if(currentPlayer === 'X'){
        return `Naruto has won!`
    }else if(currentPlayer === 'O'){
        return `Sasuke has won!`
    }
}
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => {
    if(currentPlayer === 'X'){
        return `It's Naruto's turn`
    }else if(currentPlayer === 'O'){
        return `It's Sasuke's turn`
    }
};

statusDisplay.innerHTML = currentPlayerTurn();

//functions 
function handleCellPlayed(clickedCell, clickedCellIndex) {

    gameState[clickedCellIndex] = currentPlayer;
    if(currentPlayer === 'O'){
        clickedCell.innerHTML = '<img src="./img/sasuke1.png" alt="">' ;
    }
    if(currentPlayer === 'X'){
        clickedCell.innerHTML = '<img class="naruto-img" src="./img/naruto1.png" alt="">' ;
    }

}
function handlePlayerChange() {
    currentPlayer = currentPlayer === 'X' ? 'O' : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleResultValidation() {
    let roundWon = false; 
    for (let i = 0; i <= 7; i++){
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if(a === "" || b ==='' || c === ''){
            continue;
        }
        if(a === b && b === c){
            roundWon = true;
            break
        }
    }

    if(roundWon){
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes('');
    if(roundDraw){
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();


}
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target; 
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );
    if(gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

//event listeners
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game-restart').addEventListener('click', handleRestartGame);