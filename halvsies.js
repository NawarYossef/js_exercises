//  Challenge: 
// /Write a function that takes an Array as an argument, and returns an array that contains 2 elements, each of which is an Array. Put the first half of the original Array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half Array.

// Solution: 
'use strict';
function halvsies(arr) {
  var cpyArr = arr
  var sizeArray = arr.length;
  var outputArr = new Array()
  if (arr.length == 0) {
    outputArr.push([], [])
  } else if (sizeArray % 2 == 0) {
    var firstHalf = cpyArr.splice(0, cpyArr.length / 2)
    var secondHalf = cpyArr.splice(0, cpyArr.length)
    outputArr.push(firstHalf)
    outputArr.push(secondHalf)
  } else if (sizeArray % 2 != 0) {
    var oddIdx = Math.ceil(cpyArr.length / 2)
    var firstHalf = cpyArr.splice(0, oddIdx)
    var secondHalf = cpyArr.splice(0, cpyArr.length)
    outputArr.push(firstHalf)
    outputArr.push(secondHalf)
  }
  return outputArr
}

halvsies([1, 2, 3, 4])    // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]) // [[1, 5, 2], [4, 3]]
halvsies([5])             // [[5], []]
halvsies([])              // [[], []]