// challenge : 
// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array as well.
// Review the test cases below and then implement the solution accordingly.


// Solution: 
"use strict"
let rotateArray = (arr) => {
  if (Array.isArray(arr)) {
    arr.push(arr.splice(0, 1)[0])
    return arr
  } else {
    	return "undefined"
  }

}

rotateArray([7, 3, 5, 2, 9, 1])   // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c'])      // ['b', 'c', 'a']
rotateArray(['a'])                // ['a']
rotateArray([1, 'a', 3, 'c']);    // [ 'a', 3, 'c', 1 ]
rotateArray([{a: 2}, [1, 2], 3]); // [ [1, 2], 3, {a: 2} ]
rotateArray([])                   // []
rotateArray();                    // undefined
rotateArray(1);  
