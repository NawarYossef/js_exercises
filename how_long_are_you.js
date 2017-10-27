//  Challenge: 
// Write a function that takes a string as an argument, and returns an Array that contains every word from the string with the length of the word joined to it by a blank space.
// You may assume that one blank space separates words in the string.

// Solution: 
"use strict"
function wordLengths(string) {
  let all_words = Array();
  let output = Array();
  all_words = string.split(' ');
  output = all_words.map((word) => word + ' ' + word.length)
  return string.length === 0 ? [] : output;
}

wordLengths('cow sheep chicken');
// result
//['cow 3', 'sheep 5', 'chicken 7']

wordLengths('baseball hot dogs and apple pie');
// result
//['baseball 8', 'hot 3', 'dogs 4', 'and 3', 'apple 5', 'pie 3']

wordLengths('It ain\'t easy, is it?');
// result
// ['It 2', 'ain\'t 5', 'easy, 5', 'is 2', 'it? 3']

wordLengths('Supercalifragilisticexpialidocious');
// result
// ['Supercalifragilisticexpialidocious 34']

wordLengths('');
// result
//[]