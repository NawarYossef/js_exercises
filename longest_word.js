//  Challenge: 
// # Write a method that takes in a string. Return the longest word in
//  the string. You may assume that the string contains only letters and
// # spaces.
// #
// # You may use the String `split` method to aid you in your quest.

// Solution: 
'use strict'
function longest_word(string) {
  let largestSize = 0;
  let longestWord = '';
  string.split(' ').forEach((word) => {
    if (word.length > largestSize) {
      largestSize = word.length;
      longestWord = word;
    }
  })
  return longestWord
}


longest_word("short longest")   // "longest_word"
longest_word("one") // "one"
longest_word("abc def abcde") // "abcde"