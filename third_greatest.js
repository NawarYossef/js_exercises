//  Challenge: 
// # Write a method that takes an array of numbers in. Your method should
// # return the third greatest number in the array. You may assume that
// # the array has at least three numbers in it.

// Solution: 
'use strict'
function third_greatest(arr) {
  var numsMap = Object();
  
  arr.forEach((num) => {
    numsMap[num]++;
  });
  
  return Object.keys(numsMap)
  .sort()
  .reverse()[2];
}

third_greatest([5, 3, 7, 4]) // == 4
third_greatest([2, 3, 7, 4]) // == 3
third_greatest([5, 3, 7, 5]) // == 3
