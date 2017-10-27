// Challenge: 
// Write a function that takes a string, and returns a new string in which it doubles every character.


// Solution: 
function repeater(string) {
  var output = Array.from(string).map(let => let + let).join('');
  return output ;
}

repeater('Hello')     // "HHeelllloo"
repeater("Good job!") // "GGoooodd  jjoobb!!"
repeater('')          // ''