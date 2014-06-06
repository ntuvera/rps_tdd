// function doesBeat(moveA, moveB) {
//   if (moveA == 'paper' && moveB == 'rock'){
//     return true;
//   }
//   if (moveA == 'rock' && moveB == 'scissors'){
//     return true;
//   }
//   if (moveA == 'scissors' && moveB == 'paper'){
//     return true;
//   }
//   if (moveA == 'rock' && moveB =='paper'){
//     return false;
//   }
// }

// rockWin =[scissors]
// paperWin=[rock]
// scissorsWin=[paper]



// return victory[moveA] = moveB

function doesBeat(moveA, moveB){
victory = {rock: 'scissors', paper: 'rock', scissors: 'paper'};
return victory[moveA] == moveB

}

function doesTie(moveA, moveB){
 return moveA == moveB;
}



function Player(name){
  this.name         = name
  this.victoryCount = 0
}

Player.prototype.pickMove = function(move){
  this.move = move;
}

Player.prototype.winBattle = function(){
  this.victoryCount += 1;
}

Player.prototype.winWar = function(){
  return this.victoryCount == 3;

  }

Player.prototype.tieLose = function(){
    this.victoryCount = 0;
}


function Game(){
  this.playerA  = undefined;
  this.playerB  = undefined;
  this.gameOver = true;
}

Game.prototype.startGame = function(playerA, playerB){
  this.gameOver = false;
  this.playerA  = playerA;
  this.playerB  = playerB;
}


// if Player.victoryCount ==3

// gameOver true

// startGame false

