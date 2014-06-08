
function doesBeat(moveA, moveB){
victory = {rock: 'scissors', paper: 'rock', scissors: 'paper'};
return victory[moveA] == moveB

}

function doesTie(moveA, moveB){
 return moveA == moveB;
}


function Player(name){
  this.name         = name;
  this.victoryCount = 0;
}

Player.prototype.pickMove = function(move){
  this.move = move;
}

Player.prototype.winBattle = function(){
  this.victoryCount += 1;
  // $('#results').text(this.Player +' wins') use for rock crushes scissors/paper covers rrock
  var score = this.victoryCount.toString();
  var $scoreDisplay = $('#' + this.name + 'Score');
  $scoreDisplay.text("Wins: " + score)
}

// Player.prototype.displayScore = function(){

// }

Player.prototype.winWar = function(){
  var winner = $('<h1>').html(this.name + ' wins!');
    $('#results').append(winner);
  return this.victoryCount == 3;
  }

Player.prototype.resetScore = function(){
  this.victoryCount = 0;
  var score = this.victoryCount;
  var $scoreDisplay = $('#' + this.name + 'Score');
  $scoreDisplay.text("Wins: " + score);
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

// })

// $('.buttonB').click(function(e){
//   moveB   = $(this).attr('id');
//   playerB = $(this).parent().attr('id');

// })

// })

// on button click run startGame function
// game start requires player choices
// when two buttons clicked, start game   button.on('click')&&button2.on('click'))
$(function(){

playerA = new Player($('#playerA').attr('id'));
playerB = new Player($('#playerB').attr('id'));

  $('.buttonA').click(function(e){
    moveA = $(this).attr('id');
  })

  $('.buttonB').click(function(e){
    moveB = $(this).attr('id');
  })

  $('.buttonStart').click(function(e){

    if (doesBeat(moveA, moveB)){
      playerA.winBattle();
      playerB.resetScore();
    }
    else if (doesBeat(moveB, moveA)){
      playerB.winBattle();
      playerA.resetScore();
    }
    else{
      playerA.resetScore();
      playerB.resetScore();
    }

    if(playerA.victoryCount == 3){
      playerA.winWar();
    }
    if(playerB.victoryCount == 3){
      playerB.winWar();
    }
  })

})
