// challenge : 
// Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. 
// (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

// Solution: 
'use strict'
function asciiValue(string){
  let output = 0;
  for(let i = 0; i < string.length; i++) {
    output += string.charCodeAt(i);
  }
  console.log(output);
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0