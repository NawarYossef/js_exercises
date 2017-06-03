// challenge : 
// Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. 
// You may assume that the strings are of different lengths.

// Solution: 
'use strict'
function shortLongShort(str1, str2) {
  return str1.length > str2.length ? str2 + str1 + str2 : str1 + str2 + str1
}
shortLongShort('abc', 'defgh');   // "abcdefghabc"
shortLongShort('abcde', 'fgh');   // "fghabcdefgh"
shortLongShort('', 'xyz');    
