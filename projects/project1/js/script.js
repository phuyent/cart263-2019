/*****************

Project 1: Happiness is Sysiphus?

Huyen Tran Pham (Emma)

My idea in this game is to make the player to be Zeus,
the one who decide Sysiphus'fate.
Therefore, the player will play to resize the rock of Sysiphus,
it will either be a tiny stone or an enormous rock :)


Let's begin
******************/

"use strict";

//Claim the varibles holding images from html page
let $stone;
let $plusStone;
let $minusStone;
let $bg;



//The program will run when the function is ready
$(document).ready(setup);


//setup()
//
//Using jQuery UI to drag the stones
function setup() {

  $plusStone = $('#plusStone');
  $plusStone.draggable();

  $minusStone = $('#minusStone');
  $minusStone.draggable();

  $stone = $('#stone');
  $stone.droppable({
    drop: stoneDropped
  });

}

//drop()
//
//Using jQuery UI to drop the stones to the rock
function stoneDropped (event,ui) {
  ui.draggable.remove();
  $(this).attr('src','assets/images/grey.png');
}
