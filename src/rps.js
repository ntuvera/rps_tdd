
function doesBeat(moveA, moveB){
victory = {rock: 'scissors', paper: 'rock', scissors: 'paper'};
return victory[moveA] == moveB;

}

function doesTie(moveA, moveB){
 return moveA == moveB;
}


function Player(name){
  this.name         = name;
  this.victoryCount = 0;
}

Player.prototype.pickMove = function(move){
  if (game.gameOver == false){
    this.move = move;
  }else{
    $('#results').html("Please start a game beore picking a move");
  }
}

Player.prototype.winBattle = function(){
  this.victoryCount += 1;
  // $('#results').text(this.Player +' wins') use for rock crushes scissors/paper covers rrock
  var score = this.victoryCount.toString();
  var $scoreDisplay = $('#' + this.name + 'Score');
  $scoreDisplay.text("Wins: " + score);
  $('#results').html(this.name + "wins")
}

// Player.prototype.displayScore = function(){

// }

Player.prototype.winWar = function(){
  var winner = $('<h1>').html(this.name + ' wins!');
    $('#results').append(winner);
    document.getElementById('buttonStart').disabled=true;
    window.alert("Please Start a new game");
  return this.victoryCount == 3;
  }

Player.prototype.resetScore = function(){
  this.victoryCount = 0;
  var score = this.victoryCount;
  var $scoreDisplay = $('#' + this.name + 'Score');
  $scoreDisplay.text("Wins: " + score);
}


function Game(){
  var playerA  = new Player(playerA);
  var playerB  = new Player(playerB);
  this.gameOver = false;
}


Game.prototype.startGame = function(playerA, playerB){
  this.gameOver= false;
  var playerA  = new Player(playerA);
  var playerB  = new Player(playerB);
  playerA.resetScore();
  playerB.resetScore();
}

Game.prototype.endGame = function(playerA, playerB){
  this.gameOver = true
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



$( document ).ready(function(){

game = new Game();
playerA = new Player($('#playerA').attr('id'));
playerB = new Player($('#playerB').attr('id'));


  $('.newGame').click(function(e){
  playerA.resetScore();
  playerB.resetScore();
  document.getElementById('buttonStart').disabled=false;
  // game.startGame();
  })

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
      $('#results').text("Draw");
    }

    if(playerA.victoryCount == 3){
      playerA.winWar();
      game.endGame();
    }
    if(playerB.victoryCount == 3){
      playerB.winWar();
      game.endGame();
    }
  })

})
