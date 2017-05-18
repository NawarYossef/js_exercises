// Challenge :
// Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or product of all numbers between 1 and the entered integer.

// Solution :
var num = prompt("Please enter an integer greater than 0: ")
var operation = prompt("Enter \"s\" to compute the sum, \"p\" to compute the product.")
console.log(num)
console.log(operation)
if(operation == 's') {
  var sum = 0
  for(var i = 0; i <= num; i++) {
    sum += i
  }
  console.log(sum)
}else if(operation == 'p') {
  var product = 1
  for(var i = 1; i <= num; i++) {
    product *= i
  }
  console.log(product)
}

