// challenge : 
// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the number negative, return the original number.

// Solution: 
function negative(num) {
  if (Math.sign(num) == 1) {
    return num * -1 ;
  } else if (Math.sign(num) == -1) {
  return num;
  } else {
    return -0;
  }
}

negative(5)  // -5
negative(-3) // -3
negative(0)  // -0