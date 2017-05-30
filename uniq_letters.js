// Chalenge : 
// Write a function that takes a string argument and returns a new string that contains the value of the original string without duplicates.

// Solution : 
'use strict'
function crunch(string) {
  let words = string.split(' ');
  let output = '';
  words.forEach(ele => {
      let uniqWord = Array.from(new Set(ele.split('')));
      output += uniqWord.join('') + ' ';
  });
  console.log(output);
}



crunch('ddaaiillyy ddoouubbllee');        // 'daily double'
crunch('4444abcabccba');                  // '4abcabcba'
crunch('ggggggggggggggg');                // 'g'
crunch('a');                              // 'a'
crunch('');
