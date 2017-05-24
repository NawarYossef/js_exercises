// Challenge:
// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

// Solution:
var max = 99
for(var i = 1; i <= max; i++){
  i % 2 !== 0 ? console.log(i) : null
};