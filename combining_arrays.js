// challenge : 
// Write a function that takes two Arrays as arguments, and returns an Array that contains the union of the values from the two. There should be no duplication of values in the returned Array, even if there are duplicates in the original Arrays. 
// You may assume that the arguments will be Arrays only.

// Solution: 
'use strict'
function union(arr1, arr2) {
  var uniqArr = Array()
  arr1.concat(arr2).forEach((value) => {
    uniqArr.includes(value) ? null : uniqArr.push(value)
  })
  return uniqArr
}

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]