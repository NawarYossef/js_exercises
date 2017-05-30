// challenge : 
// Write a method that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.


// Solution: 
function sum(num) {
  return String(num).split('')
    .map(Number)
    .reduce((x, y) => { 
      return x + y;
    });
}

sum(23);          // 5
sum(496);         // 19
sum(123456789);   // 45