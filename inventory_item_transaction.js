//  Challenge: 
// Write a function that gets only the transactions for the inventoryItem specificed. The function will take in two arguments; inventoryItem and transactions.
// Solution: 
'use strict'
var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

function transactionsFor(num,trans) {
  let output = Array();
  for(let i = 0; i < trans.length; i++) {
    trans[i]["id"] == num ? output.push(trans[i]) : null
  }
  return output;
}


transactionsFor(101, transactions);
// result [ { id: 101, movement: 'in', quantity: 5 },
// { id: 101, movement: 'in', quantity: 12 },
// { id: 101, movement: 'out', quantity: 18 }, ]