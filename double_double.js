//  Challenge: 
// A double number is an even length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, 7676 are all double numbers. 444, 334433, and 107 are not.
// Write a function that returns 2 times the number provided as an argument, unless the argument is a double number; return double numbers as-is.

// Solution: 
'use strict';
class Double {
  constructor(num) {
    this.num = num;
    this.digits = String(num).split('').map(Number);
    this.output()
  }

  arraysCompare(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = arr1.length - 1; i >= 0; i--) {
      if (arr1[i] !== arr2[i]) {
        return false ;
      }
    return true;
    }
  }

  numIsDouble() {
    let leftEnd = Math.ceil(this.digits.length / 2)
    let leftDigits = this.digits.slice(0, leftEnd);
    let rightDigits = this.digits.slice(leftEnd);
    return this.arraysCompare(leftDigits, rightDigits)
  }

  output() {
    this.numIsDouble() ? console.log(this.num) : console.log(this.num * 2)
  }
}

var twice = new Double(37);                 // 74
var twice = new Double(44);                 // 44
var twice = new Double(334433);             // 668866
var twice = new Double(444);                // 888
var twice = new Double(107);                // 214
var twice = new Double(103103);             // 103103
var twice = new Double(3333);               // 3333
var twice = new Double(7676);               // 7676
