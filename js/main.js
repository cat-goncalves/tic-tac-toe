let gameBoard = document.querySelector('#container')
let eachSquare = document.querySelectorAll('.box')
let winName = document.querySelector('#winner')
let countGameBoardClicks = 0

let gameState = ['', '', '', '', '', '', '', '', '']
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6]
];

gameBoard.addEventListener('click', playerTurn)

function playerTurn(event) {
  if (!event.target.classList.contains('x') && !event.target.classList.contains('o')) {
    countGameBoardClicks += 1
    let playerMark = ((countGameBoardClicks % 2 === 0) ? 'x' : 'o')
    event.target.classList.add(playerMark)
    gameState[Number(event.target.id)] = playerMark
    console.log(gameState)
    evaluateGame()
  };
}

function evaluateGame(playerMark){
  let playerName = ((countGameBoardClicks % 2 === 0) ? 'Player 1 Wins' : 'Player 2 Wins') 

  let roundWon = false;
  for (let i = 0; i <= winConditions.length - 1; i++) {
    const singleWinCondition = winConditions[i]
    console.log(winConditions[i])
    let a = gameState[singleWinCondition[0]];
    let b = gameState[singleWinCondition[1]];
    let c = gameState[singleWinCondition[2]];
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
    }
  }
  if(roundWon) {
    console.log(playerName,) 
    return winName.innerText = playerName
  }

}




/*
function evaluateGame(playerMark){
  let playerName = ((countGameBoardClicks % 2 === 0) ? 'Player 1 Wins' : 'Player 2 Wins')
  for (let modulo = 0; modulo <= 2; modulo++){
    let column = []
    for (let i = 0; i < 3; i++){column.push(i * 3 + modulo)}
    let columnWin = column
      .map(i => eachSquare[i])
      .map(node => node.classList.contains(playerMark))
      .reduce((a,b) => a && b)
    let row1Win = Array.from(eachSquare).slice(0, 3).map(x => x.classList.contains(playerMark)).reduce((a,b) => a && b)
    let row2Win = Array.from(eachSquare).slice(3,6).map(x => x.classList.contains(playerMark)).reduce((a,b) => a && b)
    let row3Win = Array.from(eachSquare).slice(6).map(x => x.classList.contains(playerMark)).reduce((a,b) => a && b)

      console.log(columnWin, row1Win, row2Win, row3Win)
    if (columnWin || row1Win || row2Win || row3Win){return winName.innerText = playerName}
  }  
}
*/


// for (i = 0; i <3; i++){column.push(i * 3 + 1)}
// for (i = 0; i <3; i++){column.push(i * 3 + 2)}

  // arr.reduce((a, b) => a && b);
// Array.from(eachSquare).slice(0, 3).map(x => x.classList.contains('x')).reduce((a,b) => a && b)
// Array.from(eachSquare).slice(3,6).map(x => x.classList.contains('x')).reduce((a,b) => a && b)
// Array.from(eachSquare).slice(6).map(x => x.classList.contains('x')).reduce((a,b) => a && b)

// column.map(i => document.querySelectorAll('.box')[i])

// column.map(i => document.querySelectorAll('.box')[i]).map(node => node.classList.contains('x')).reduce((a,b) => a && b)