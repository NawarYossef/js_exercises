//  Challenge: 
// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (the result should never have consecutive spaces).
// Solution: 
'use strict';
function cleanUp(string) {
  let newString = string.replace(/\W+/g, ' ')
  return newString
}

cleanUp('---what\'s my +*& line?');     