//  Challenge: 
// Write a function which takes a grocery list (array) of fruits with quantities and converts it into an array of the correct number of each fruit.

// Solution: 
'use strict';
function buyFruit(list) {
  let output = Array();
  list.forEach((fruitMap) => {
    for (let i = 0; i < fruitMap[1]; i++) {
      output.push(fruitMap[0]);
    }
  });
  return output;
}

buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]) // == ['apples', 'apples', 'apples', 'orange', 'bananas','bananas']