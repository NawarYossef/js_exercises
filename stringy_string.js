// challenge : 
// Write a function that takes one argument, a positive integer, and returns a string of alternating 1s and 0s, always starting with 1. 
// The length of the string should match the given integer.

// Solution: 
'use strict'
function stringy(num){
  let output = '';
  for(let i = 0; i < num; i++) {
    i == 0 || i % 2 == 0 ? output += '1' : output += '0';
  }
  return output;
}

stringy(6) // '101010'
stringy(9) // '101010101'
stringy(4) // '1010'
stringy(7) // '1010101'