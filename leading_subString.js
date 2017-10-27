//  Challenge: 
// Write a function that returns a list of all substrings of a string that start at the beginning of the original string. 
// It returns the substrings arranged from shortest to longest.

// Solution: 
'use strict'
function substringsAtStart(string) {
  var output = Array();
  for (var i = 1; i <= string.length; i++) {
    output.push(string.split('').slice(0, i).join(''));
  }
  return output;
}

substringsAtStart('abc')   // ['a', 'ab', 'abc']
substringsAtStart('a')     // ['a']
substringsAtStart('xyzzy') // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']