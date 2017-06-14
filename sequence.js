// challenge : 
// Write a function that takes an integer argument, and returns an Array of all integers, in sequence, between 1 and the argument.
// You may assume that the argument will always be a valid integer that is greater than 0.
// Solution: 
function sequence(num) {
  let output = Array();
  for(let i = 1; i <= num; i++) {
    output.push(i);
  }
  return output;
}

sequence(5) // [1, 2, 3, 4, 5]
sequence(3) // [1, 2, 3]
sequence(1) // [1]