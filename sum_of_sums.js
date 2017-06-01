//  Challenge: 
// Write a function that takes an Array of numbers and then returns the sum of the sums of each leading subsequence for that Array. 
// You may assume that the Array always contains at least one number.


// Solution: 
'use strict'
function sumOfSums(arr) {
  var output = 0;
  for (var i = 1; i <= arr.length; i++) {
    output += arr.slice(0, i).reduce((a, b) => a + b);
  }
  return output;
}


sumOfSums([3, 5, 2])       // (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
sumOfSums([1, 5, 7, 3])    // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
sumOfSums([4])             // 4
sumOfSums([1, 2, 3, 4, 5]) // 35