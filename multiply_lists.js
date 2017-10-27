//  Challenge: 
// Write a function that takes two Array arguments, in which each Array contains a list of numbers, and returns a new Array that contains the product of each pair of numbers from the arguments that have the same index. 
// You may assume that the arguments contain the same number of elements.

// Solution: 
'use strict'
function multiplyList(arr1, arr2) {
  let list = Array();
  for (let i = 0; i < arr1.length; i++) {
    list.push(arr1[i] * arr2[i]);
  }
  return list;
}

multiplyList([3, 5, 7], [9, 10, 11]) // [27, 50, 77]