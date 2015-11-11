'use strict';


function roll() {
  // your code here
  var numbers = Array(1,2,3,4,5,6);

  var number = numbers[Math.floor(Math.random()*numbers.length)]

  return number
}
