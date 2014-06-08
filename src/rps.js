
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
  if(this.victoryCount == 3){
    console.log('Someone Won!');
  }
}

// Player.prototype.winWar = function(){
//   return this.victoryCount == 3;

//   }

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
  this.playerA  = new Player(playerA);
  this.playerB  = new Player(playerB);
}



// $(function(){

// game = new Game()

// game.startGame()

// $('.buttonA').click(function(e){
//   moveA   = $(this).attr('id');
//   playerA = $(this).parent().attr('id');
//   playerA = new Player(playerA)
// })

// $('.buttonB').click(function(e){
//   moveB   = $(this).attr('id');
//   playerB = $(this).parent().attr('id');
//   playerB = new Player(playerB)
// })

// })

// on button click run startGame function
// game start requires player choices
// when two buttons clicked, start game   button.on('click')&&button2.on('click'))
$(function(){

  $('.buttonA').click(function(e){
    moveA = $(this).attr('id');
    // playerA= $(this).parent().attr('id');
    playerA = new Player(playerA)
  })

  $('.buttonB').click(function(e){
    moveB = $(this).attr('id');
    // playerB= $(this).parent().attr('id');
    playerB = new Player(playerB)
  })

  $('.buttonStart').click(function(e){
    // Game.startGame();

    if (doesBeat(moveA, moveB)){
      playerA.winBattle();
    }
    else if (doesBeat(moveB, moveA)){
      playerB.winBattle();
    }
    else{
      Game.startGame();
    }



  })



})
