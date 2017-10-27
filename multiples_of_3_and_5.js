// challenge : 
// Write a function that computes the sum of all numbers from 1 and some other number that are a multiple of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
// You may assume that the number passed in is an integer greater than 1.

// Solution: 
function multisum(num) {
  let output = 0;
  for(let i = 1; i <= num; i++){
    (i % 3 == 0 || i % 5 == 0) ? output += i : null;
  }
  return output;
}

multisum(3);      // 3
multisum(5);      // 8
multisum(10);     // 33
multisum(1000);   // 234168 
