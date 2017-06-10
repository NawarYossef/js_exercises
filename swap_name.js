// challenge : 
// Write a function that takes a first name, a space, and a last name passed as a single String argument, and returns a string that contains the last name, a comma, a space, and the first name.

// Solution: 
function swapName(string) {
  let words = string.match(/\w+/gi);
  return words.reverse().join(', ');
}

swapName('Joe Roberts') // 'Roberts, Joe'