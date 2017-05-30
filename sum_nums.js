//  Challenge: 
// # Write a method that takes in an integer `num` and returns the sum of
// # all integers between zero and num, up to and including `num`.

// Solution: 
'use strict'
function sum_nums(num) {
  let sum = 0;
  for(let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}


sum_nums(3) == 6
sum_nums(4) == 10
sum_nums(5) == 15