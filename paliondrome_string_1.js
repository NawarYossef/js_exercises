//  Challenge: 
// Write a function that returns true if the string passed as an argument is a palindrome, false otherwise. A palindrome reads the same forwards and backwards. For this problem the case matters and all characters matter.

// Solution: 
'use strict';
function isPalindrome(str) {
  var stringReverse = str.split('').reverse().join('')
  return stringReverse == str;
}

isPalindrome('madam');                    // true
isPalindrome('Madam');                    // false (case matters)
isPalindrome('madam i\'m adam');          // false (all characters matter)
isPalindrome('356653');                   // true