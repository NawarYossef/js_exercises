// challenge : 
// Write a function that takes a single string argument and returns a new string that contains the original value of the argument with the first character of every word capitalized and all succeeding characters in lowercase.
// You may assume that words are any sequence of non-blank characters.

// Solution: 
"use strict"
function wordCap(string) {
  let output = Array()
  string.split(" ").map((word) => {
    let capWord = word
    capWord = capWord.replace(word[0], word[0].toUpperCase())
    output.push(capWord)
  })
 return output;
}

wordCap('four score and seven')    // 'Four Score And Seven'
wordCap('the javaScript language') // 'The Javascript Language'
wordCap('this is a "quoted" word') // 'This Is A "quoted" Word'







