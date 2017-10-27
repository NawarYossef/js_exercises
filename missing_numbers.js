// challenge : 
// Write a method that takes a sorted array of integers as an argument, and returns an array that includes all of the missing integers (in order) between the first and last elements of the argument.

// Solution: 
"use strict"
let missing = (arr) => {
  let alldigits = []
  for(let i = arr[0]; i < arr[arr.length - 1]; i++) {
    alldigits.push(i)
  }
  return alldigits.filter((e) => arr.includes(e) === false).sort()
}


missing([-3, -2, 1, 5]) //== [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]) //== []
missing([1, 5])// == [2, 3, 4]
missing([6]) //== []