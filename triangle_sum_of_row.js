// Chalenge : 
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8


// Solution
let triangle = [   1,
         3,    5,
       7,     9,    11,
   13,    15,    17,    19,
21,    23,    25,    27,    29]

function  rowSumOddNumbers(n) {
    let counter = 1;
    let cpyTring = triangle;
    let rows = [];
     let c = 1;
    while(cpyTring.length !== 0) {
        rows.push(cpyTring.splice(0, counter));
        counter += 1;
        c+= 1
    }
    return rows[n - 1].reduce((a, b) => a + b);
}


rowSumOddNumbers(2)  === 8
rowSumOddNumbers(1) === 1 
