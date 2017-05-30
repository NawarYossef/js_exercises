// challenge : 
// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first 2 numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.
// Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075 -- that's enormous, especially considering that it takes 6 iterations just to find the first 2 digit Fibonacci number.
// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified as an argument. (The first Fibonacci number has index 1.)

// Solution: 
'use strict'
'use strict';

class Fibonacci {
	
  constructor(numberOfDigits) {
    this.numberOfDigits = numberOfDigits;
  }

  fibSeries(num) {
  if (num <= 1) return 1;
  return this.fibSeries(num - 1) + this.fibSeries(num - 2);
  }

  findFibonacciIndexByLength() {
    let output = 0;
    for(let i = 1; i < Infinity; i++ ) {
      output = this.fibSeries(i);
      if(output.toString().length == this.numberOfDigits){
        output = i + 1
        break;
      }
    }
    console.log(output);
  }
}

var value = new Fibonacci(2)
value.findFibonacciIndexByLength() // 7

value = new Fibonacci(10)
value.findFibonacciIndexByLength() // 45

value = new Fibonacci(6)
value.findFibonacciIndexByLength() // 26
