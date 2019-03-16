
"use strict";

/*****************
Project 2: Something's wrong on the Internet
Huyen Tran Pham

Basically, this is a game about unwrapping many layers of a present.
However, inside there's nothing because the focus is mostly about the process of
opening the outside.
******************/

//The program will run when the function is ready
$(document).ready(setup);

// setup()
//
// setup involves clicking once to actually start the game.
function setup() {
  $('#Click-to-begin').on('click',startGame);

}
//startGame()
//
//When the game starts, the text is removed
function startGame() {
  $('#Click-to-begin').remove();

  theGame();
}

//theGame()
//
//Set up what happens in the game
function theGame() {
  $('.box1').on('click', removeBox);
  $('.box2').on('click', removeBox);
  $('.box3').on('click', removeBox);
  $('.box4').on('click', removeBox);
  $('.box5').on('click', removeBox);
  $('.box6').on('click', removeBox);
  $('.box7').on('click', removeBox);

}
function removeBox(){
  $('.box1').remove();
  $('.box2').remove();
  $('.box3').remove();
  $('.box4').remove();
  $('.box5').remove();
  $('.box6').remove();
  $('.box7').remove();
}
