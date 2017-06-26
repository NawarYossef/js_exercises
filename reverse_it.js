// challenge : 
// Write a function that takes one argument, a string, and returns the same string with the words in reverse order.

// Solution: 
function reverseSentence(string) {
  if (string == '') {
    return '';
  } 
  
  let words = string.match(/\w+/gi);
  return words.reverse().join(' ');
}

reverseSentence('');                     // ''
reverseSentence('Hello World');          // 'World Hello'
reverseSentence('Reverse these words');  // 'words these Reverse'