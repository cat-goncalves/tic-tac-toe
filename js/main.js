let gameBoard = document.querySelector('#container')
let countGameBoardClicks = 0

gameBoard.addEventListener('click', playerTurn)

function playerTurn(event) {
  if (!event.target.classList.contains('x') && !event.target.classList.contains('o')) {
    countGameBoardClicks += 1
    let playerMark = ((countGameBoardClicks % 2 === 0) ? 'x' : 'o')
    event.target.classList.add(playerMark)
    console.log(evaluateGame(playerMark))
  };
}

function evaluateGame(playerMark){
  for (let modulo = 0; modulo <= 2; modulo++){
    let column = []
    for (let i = 0; i < 3; i++){column.push(i * 3 + modulo)}
    let playerWon = column
      .map(i => document.querySelectorAll('.box')[i])
      .map(node => node.classList.contains(playerMark))
      .reduce((a,b) => a && b)
      console.log(playerWon)
      if (playerWon){return true}
  }
}


// for (i = 0; i <3; i++){column.push(i * 3 + 1)}
// for (i = 0; i <3; i++){column.push(i * 3 + 2)}

  // arr.reduce((a, b) => a && b);
Array.from(document.querySelectorAll('.box')).slice(6).map(x => x.classList.contains('x')).reduce((a,b) => a && b)

// column.map(i => document.querySelectorAll('.box')[i])

// column.map(i => document.querySelectorAll('.box')[i]).map(node => node.classList.contains('x')).reduce((a,b) => a && b)