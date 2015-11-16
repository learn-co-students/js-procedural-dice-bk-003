'use strict';


function roll() {
  var dice = [1,2,3,4,5,6];
  return dice[Math.floor(Math.random() * dice.length)];
}
