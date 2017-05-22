//  Challenge: 
// Write a function that combines two Arrays passed as arguments, and returns a new Array that contains all elements from both Array arguments, with the elements taken in alternation.
// You may assume that both input Arrays are non-empty, and that they have the same number of elements.// 

// Solution: 
'use strict'
function interleave(arr1, arr2) {
  let output = Array();
  for(var i = 0; i < arr1.length; i++) {
    output.push(arr1[i], arr2[i]);
  }
  return output;
}

interleave([1, 2, 3], ['a', 'b', 'c']) // [1, 'a', 2, 'b', 3, 'c']