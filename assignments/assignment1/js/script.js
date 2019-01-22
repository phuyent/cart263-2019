"use strict";

/*****************

Circle Eater
Pippin Barr

A simple game in which the player controls a shrinking circle with their mouse and tries
to overlap another circle (food) in order to grow bigger.

******************/

// Constants defining key quantities
const AVATAR_SIZE_GAIN = 50;
const AVATAR_SIZE_LOSS = 1;
<<<<<<< HEAD
const FOOD_MAX_SPEED = 50;
=======
////NEW CODE: Set a permanent max speed////
const FOOD_MAX_SPEED = 30;
////END NEW CODE////
>>>>>>> 6603504d32aa1af2bdb0518ad7f116b6577f9c6b

// Avatar is an object defined by its properties
let avatar = {
  x: 0,
  y: 0,
  maxSize: 64,
  size: 64,
  active: true,
  color: '#cccc55'
}

// Food is an object defined by its properties
let food = {
  x: 0,
  y: 0,
  size: 64,
  color: '#55cccc',
  ////NEW CODE: Set new properies for food////
  vx: 0,
  vy: 0,
  maxSpeed: FOOD_MAX_SPEED
<<<<<<< HEAD
=======
  ////END NEW CODE////
>>>>>>> 6603504d32aa1af2bdb0518ad7f116b6577f9c6b
}

// setup()
//
// Create the canvas, position the food, remove the cursor

function setup() {
  createCanvas(windowWidth,windowHeight);
  positionFood();
  noCursor();
}


// draw()
//
// Move the avatar, check for collisions, display avatar and food

function draw() {
  // Make sure the avatar is still alive - if not, we don't run
  // the rest of the draw loop
  if (!avatar.active) {
    // By using "return" the draw() function exits immediately
    return;
  }

  // Otherwise we handle the game
  background(0);
  updateAvatar();
<<<<<<< HEAD
  updateFood();
=======
  ////NEW CODE: Call updateFood()////
  updateFood();
  ////END NEW CODE////
>>>>>>> 6603504d32aa1af2bdb0518ad7f116b6577f9c6b
  checkCollision();
  displayAvatar();
  displayFood();
}

// updateAvatar()
//
// Set the position to the mouse location
// Shrink the avatar
// Set it to inactive if it reaches a size of zero
function updateAvatar() {
  avatar.x = mouseX;
  avatar.y = mouseY;
  // Shrink the avatar and use constrain() to keep it to reasonable bounds
  avatar.size = constrain(avatar.size - AVATAR_SIZE_LOSS,0,avatar.maxSize);
  if (avatar.size === 0) {
    avatar.active = false;
  }
}

<<<<<<< HEAD
//updateFood()
//
//Keep track of the food's positon based on its velocity
//Constrain the food inside the canvas
//Randomly change the food's velocity based on its maximum speed during the game
function updateFood() {
food.x += food.vx;
food.y += food.vy;

food.x = constrain(food.x, 0, width-food.x);
food.y = constrain(food.y,0,height-food.y);


}
=======
////NEW CODE: Define updateFood()////
//updateFood()
//
//Keep track of the food's position based on its velocity
//Make sure it stays on the canvas
//Changes the food's velocity randomly based on its maximum speed from time to time
function updateFood() {
  //Food's position based on velocity
  food.x += food.vx;
  food.y += food.vy;
  //Contrain the food x & y position to be on screen
  food.x = constrain(food.x,0,windowWidth-food.size);
  food.y = constrain(food.y,0,windowHeight-food.size);
  //Change the food's velocity randomly after 20 seconds
  setTimeout(food.vx = random(-30,food.maxSpeed),20000);
  setTimeout(food.vy = random(-30,food.maxSpeed),20000);

}
////END NEW CODE////

>>>>>>> 6603504d32aa1af2bdb0518ad7f116b6577f9c6b

// checkCollision()
//
// Calculate distance of avatar to food
// Check if the distance is small enough to be an overlap of the two circles
// If so, grow the avatar and reposition the food
function checkCollision() {
  let d = dist(avatar.x,avatar.y,food.x,food.y);
  if (d < avatar.size/2 + food.size/2) {
    avatar.size = constrain(avatar.size + AVATAR_SIZE_GAIN,0,avatar.maxSize);
    positionFood();
  }
}

// displayAvatar()
//
// Draw the avatar in its current position, using its size and color
// Use push() and pop() around it all to avoid affecting the rest of the program
// with drawing commands
function displayAvatar() {
  push();
  noStroke();
  fill(avatar.color);
  ellipse(avatar.x,avatar.y,avatar.size);
  pop();
}

// displayFood()
//
// Draw the food in its current position, using its size and color
// Use push() and pop() around it all to avoid affecting the rest of the program
// with drawing commands
function displayFood() {
  push();
  noStroke();
  fill(food.color);
  ellipse(food.x,food.y,food.size);
  pop();
}

// positionFood()
//
// Set the food's position properties to random numbers within the canvas dimensions
function positionFood() {
  food.x = random(0,width);
  food.y = random(0,height);
  ////NEW CODE: Set a random velocity for food based on iits max speed////
  food.vx = random(-food.maxSpeed, food.maxSpeed);
  food.vy = random(-food.maxSpeed, food.maxSpeed);
  ////END NEW CODE////
}
