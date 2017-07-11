//  Challenge: 
// Write a function that takes an array of strings, and returns an array of the same string values without the vowels (a, e, i, o, u).
// Solution: 
'use strict'
function removeVowels(arr) {
  return arr.map((word) => word.replace(/[aieou]/gi,''));
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);             // ['bcdfghjklmnpqrstvwxyz']
removeVowels(['green', 'YELLOW', 'black', 'white']);      // ['grn', 'YLLW', 'blck', 'wht']
removeVowels(['ABC', 'AEIOU', 'XYZ']);                    // ['BC', '', 'XYZ']