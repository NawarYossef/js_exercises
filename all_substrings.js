//  Challenge: 
// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. 
// This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

// Solution: 
'use strict'
function substrings(string) {
  var output = Array();
  for (var i = 0; i < string.length; i++) { 
    var cpyString = string.slice(i, string.length)
    for (var v = 1; v <= cpyString.length; v++) {
      output.push(cpyString.slice(0, v));
    }
  }
  return output;
}

substrings('abcde');
// result
//[ 'a', 'ab', 'abc', 'abcd', 'abcde',
//  'b', 'bc', 'bcd', 'bcde',
//  'c', 'cd', 'cde',
//  'd', 'de',
//  'e' ]