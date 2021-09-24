// let gameBoard = document.querySelector('#container')
// let eachSquare = document.querySelectorAll('.box')
// let winName = document.querySelector('#winner')
// let countGameBoardClicks = 0

// let boardState = ['', '', '', '', '', '', '', '', '']
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6]
];

// gameBoard.addEventListener('click', game.playerTurn())

// function playerTurn(event) {
//   if (!event.target.classList.contains('x') && !event.target.classList.contains('o')) {
//     game.countGameBoardClicks += 1
//     let playerMark = ((game.countGameBoardClicks % 2 === 0) ? 'x' : 'o')
//     event.target.classList.add(playerMark)
//     game.boardState[Number(event.target.id)] = playerMark
//     console.log(game.boardState)
//     game.evaluateGame()
//   };
// }

class Game {
  constructor(){
  this.gameBoard = document.querySelector('#container')
  // this.eachSquare = document.querySelectorAll('.box')
  this.winName = document.querySelector('#winner')

  this.boardState = ['', '', '', '', '', '', '', '', '']
  this.squares = []
    for (let i = 0; i < 9; i++){
      let s = new Square(i)
      this.squares.push(s)
    }
  this.countGameBoardClicks = 0
  this.roundWon = false
  // When the player turn function runs, if there is a "this" it will refer to the game object not the event target
  this.playerTurn = this.playerTurn.bind(this)
  this.gameBoard.addEventListener('click', this.playerTurn)
  this.resetGame = this.resetGame.bind(this)
  document.querySelector('#reset').addEventListener('click', this.resetGame)
  }

  playerTurn(event) {
    if (this.roundWon !== true && !event.target.classList.contains('x') && !event.target.classList.contains('o')) {
      this.countGameBoardClicks += 1
      let playerMark = ((this.countGameBoardClicks % 2 === 0) ? 'x' : 'o')
      // event.target.classList.add(playerMark)
      // this.boardState[Number(event.target.id)] = playerMark
      this.squares[Number(event.target.id)].setState(playerMark)
      console.log(this.squares)
      this.evaluateGame()
    };
  }
  
  evaluateGame(playerMark){
    let playerName = ((this.countGameBoardClicks % 2 === 0) ? 'Candiace Wins!' : 'Monique Wins!') 
  
    for (let i = 0; i <= winConditions.length - 1; i++) {
      const singleWinCondition = winConditions[i]
      console.log(winConditions[i])
      // let a = this.boardState[singleWinCondition[0]];
      // let b = this.boardState[singleWinCondition[1]];
      // let c = this.boardState[singleWinCondition[2]];
      let a = this.squares[singleWinCondition[0]].getState();
      let b = this.squares[singleWinCondition[1]].getState();
      let c = this.squares[singleWinCondition[2]].getState();
      if (a === '' || b === '' || c === '') {
        continue;
      } 
      if (a === b && b === c) {
        this.roundWon = true;
        break;
      }
    }
    if(this.isGameWon()) {
      return this.winName.innerText = playerName
    } else if (this.isTie()){
      return this.winName.innerText = 'Tie!'
    }
  }

  isGameOngoing(){
    return this.countGameBoardClicks < 9 && this.roundWon === false
  }

  isGameWon(){
    return this.roundWon
  }

  isTie(){
    // checking to see if isGameOngiong and is game won false
    return !this.isGameOngoing() && !this.isGameWon()
  }
  
  resetGame(){
    this.squares.forEach(s => s.clear())
    this.countGameBoardClicks = 0
    this.winName.innerText = ''
    this.roundWon = false
  }
}

class Square{
  constructor(id){
    this.id = id
    this.boxElement = document.getElementById(id)
  }
  getState(){
    if (this.boxElement.classList.contains('x')){
      return 'x'
    } else if (this.boxElement.classList.contains('o')){
      return 'o'
    } else {return ''}
  }
  clear(){
    this.boxElement.classList.remove('x')
    this.boxElement.classList.remove('o')
  }
  setState(state){
    this.clear()
    if (state === 'x' || state === 'o'){this.boxElement.classList.add(state)}
  }
}


const game = new Game()

// function evaluateGame(playerMark){
//   let playerName = ((game.countGameBoardClicks % 2 === 0) ? 'Player 2 Wins' : 'Player 1 Wins') 

//   let roundWon = false;
//   for (let i = 0; i <= winConditions.length - 1; i++) {
//     const singleWinCondition = winConditions[i]
//     console.log(winConditions[i])
//     let a = game.boardState[singleWinCondition[0]];
//     let b = game.boardState[singleWinCondition[1]];
//     let c = game.boardState[singleWinCondition[2]];
//     if (a === '' || b === '' || c === '') {
//       continue;
//     }
//     if (a === b && b === c) {
//       roundWon = true;
//     }
//   }
//   if(roundWon) {
//     console.log(playerName,) 
//     return winName.innerText = playerName
//   }
// }




// function evaluateGame(playerMark){
//   let playerName = ((countGameBoardClicks % 2 === 0) ? 'Player 1 Wins' : 'Player 2 Wins')
//   for (let modulo = 0; modulo <= 2; modulo++){
//     let column = []
//     for (let i = 0; i < 3; i++){column.push(i * 3 + modulo)}
//     let columnWin = column
//       .map(i => eachSquare[i])
//       .map(node => node.classList.contains(playerMark))
//       .reduce((a,b) => a && b)
//     let row1Win = Array.from(eachSquare).slice(0, 3).map(x => x.classList.contains(playerMark)).reduce((a,b) => a && b)
//     let row2Win = Array.from(eachSquare).slice(3,6).map(x => x.classList.contains(playerMark)).reduce((a,b) => a && b)
//     let row3Win = Array.from(eachSquare).slice(6).map(x => x.classList.contains(playerMark)).reduce((a,b) => a && b)

//       console.log(columnWin, row1Win, row2Win, row3Win)
//     if (columnWin || row1Win || row2Win || row3Win){return winName.innerText = playerName}
//   }  
// }



// for (i = 0; i <3; i++){column.push(i * 3 + 1)}
// for (i = 0; i <3; i++){column.push(i * 3 + 2)}

  // arr.reduce((a, b) => a && b);
// Array.from(eachSquare).slice(0, 3).map(x => x.classList.contains('x')).reduce((a,b) => a && b)
// Array.from(eachSquare).slice(3,6).map(x => x.classList.contains('x')).reduce((a,b) => a && b)
// Array.from(eachSquare).slice(6).map(x => x.classList.contains('x')).reduce((a,b) => a && b)

// column.map(i => document.querySelectorAll('.box')[i])

// column.map(i => document.querySelectorAll('.box')[i]).map(node => node.classList.contains('x')).reduce((a,b) => a && b)