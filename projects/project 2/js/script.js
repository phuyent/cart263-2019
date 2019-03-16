
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
}
